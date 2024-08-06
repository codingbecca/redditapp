import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPostComments } from "../../store/commentSlice";
import styles from "./postDetail.module.css";
import Post from "./Post";
import Comment from "../Comment/Comment"

const PostDetail = () => {
    const dispatch = useDispatch();
    const { postId } = useParams();
    const post = useSelector(state => state.craftsnark.posts.find(post => post.id === postId));
    const comments = useSelector(state => state.comments.comments);

    useEffect(() =>{
        dispatch(fetchPostComments(post.permalink))
    }, [dispatch, post])



    if (!post) {
        return <div>Post not found :(</div>
    }
    return (
        <div className={styles.container}>
            <Post post={post}/>
            {comments.map((comment) => <Comment key={comment.id} comment={comment}/>)}
        </div>
    )
}

export default PostDetail;