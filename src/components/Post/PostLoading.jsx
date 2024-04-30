import Skeleton from "react-loading-skeleton";

const PostLoading = () => {
    return (
        <div className="container">
            <h3 className="postTitle"><Skeleton /></h3>
            <div className="postPreview">
                <Skeleton height={250} />
                <Skeleton count={5} />
            </div>
            <p className="postInfo">
                <Skeleton />
            </p>
        </div>
    )
}

export default PostLoading;