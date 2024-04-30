import { DateTime } from "luxon";
import ReactMarkdown from "react-markdown";

const Comment = ({comment}) => {
    return (
        <div>
            <p className="commentAuthor">{comment.author}</p>
            <p className="commentCreation">{DateTime.fromSeconds(comment.created_utc).toRelative({style: 'long'})}</p>
            <ReactMarkdown children={comment.body} />
        </div>
    )
}

export default Comment;