import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPostComments } from "../../store/commentSlice";
import Post from "./Post";
import Comment from "../Comment/Comment"

const PostDetail = () => {
    const dispatch = useDispatch();
    const { postId } = useParams();
    const post = useSelector(state => state.craftsnark.posts.find(post => post.id === postId));
    const comments = useSelector(state => state.comments.comments);

    useEffect(() =>{
        dispatch(fetchPostComments(post.permalink))
    }, [])



    if (!post) {
        return <div>Post not found :(</div>
    }
    return (
        <>
            <Post post={post}/>
            {comments.map((comment) => <Comment key={comment.id} comment={comment}/>)}
        </>
    )
}

export default PostDetail;