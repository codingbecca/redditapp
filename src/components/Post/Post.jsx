import { DateTime } from "luxon";
import { GoComment } from "react-icons/go";
import ReactMarkdown from "react-markdown";

const Post = ({post, postType=''}) => {
    
    return (
        <div className="container">
            <h3 className="postTitle"><ReactMarkdown children={post.title} /></h3>
            <div className="postPreview">
                {post.post_hint === 'image' && <img src={post.url} className="postImage" />}
                {postType.toLowerCase() === 'preview' ?
                    <ReactMarkdown children={post.selftext.length > 800 ? post.selftext.slice(0, 800).concat('...'): post.selftext} />
                    : <ReactMarkdown children={post.selftext} />}
            </div>
                <p className="postInfo">
                    Posted by {post.author} · {DateTime.fromSeconds(post.created_utc).toRelative({style: 'long'})} · <GoComment /> {post.num_comments}
                </p>
        </div>
    )
}

export default Post;