import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../store/craftsnarkSlice";
import Post from "../Post/Post";
import PostLoading from "../Post/PostLoading";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";

const Home = () => {
    const dispatch = useDispatch();
    const craftsnark = useSelector(state => state.craftsnark);
    const { posts, error, isLoading } = craftsnark;

    useEffect(() =>{
        if (posts.length === 0) {
            dispatch(fetchPosts())
        }
    }, [dispatch, posts])

    if(error) {
        return (
            <>
                <p>Something went wrong.</p> <button onClick={() => dispatch(fetchPosts())}>Return to r/craftsnark</button>
            </>
        )
    }

    if(isLoading) {
        return (
           <div className={styles.postsContainer}>
                {Array(27).fill(null).map((_, index) => <div className={styles.container}><PostLoading key={index}/></div>)}
           </div> 
        )
    }

    if (posts.length === 0) {
        return (
            <>
            <p>No posts found.</p> <button onClick={() => dispatch(fetchPosts())}>Return to r/craftsnark</button>
            </>
        )
    }
    return (
        <div className={styles.postsContainer}>
            {posts.map((post) =>(
                <div key={post.id} className={styles.container}>
                    <Link to={`/${post.id}`}>
                        <Post post={post} postType='preview' />
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Home;