import { DateTime } from "luxon";
import ReactMarkdown from "react-markdown";
import styles from "./comment.module.css"

const Comment = ({ comment }) => {
    const renderNestedComments = (comment, level) => {
        return (
            <div key={comment.id} style={{ marginLeft: `${level * 20}px`, borderLeft: '2px solid gray', paddingLeft: '10px'}}>
                <p>
                    {comment.author} · {(typeof comment.created_utc ==='number') && DateTime.fromSeconds(comment.created_utc).toRelative({ style: 'long' })}
                </p>
                <ReactMarkdown children={comment.body} />
                {comment.replies && comment.replies.data.children.map(reply => renderNestedComments(reply.data, level + 1))}
            </div>
        );
    };

    return (
        <div className={styles.container}>
            <p>
                {comment.author} · {(typeof comment.created_utc ==='number') && DateTime.fromSeconds(comment.created_utc).toRelative({ style: 'long' })}
            </p>
            <ReactMarkdown children={comment.body} />
            {comment.replies && comment.replies.data.children.map(reply => renderNestedComments(reply.data, 1))}
        </div>
    );
};


export default Comment;