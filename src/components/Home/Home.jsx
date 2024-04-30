import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../store/craftsnarkSlice";
import Post from "../Post/Post";
import PostLoading from "../Post/PostLoading";
import { useEffect } from "react";
import { Link } from "react-router-dom";

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
                <p>Something went wrong.</p>
            </>
        )
    }

    if(isLoading) {
        return (
           <>
                <PostLoading />
                <PostLoading />
                <PostLoading />
                <PostLoading />
                <PostLoading />
           </> 
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
        <>
            {posts.map((post) =>(
                <div key={post.id}>
                    <Link to={`/${post.id}`}>
                        <Post post={post} postType='preview' />
                    </Link>
                </div>
            ))}
        </>
    )
}

export default Home;