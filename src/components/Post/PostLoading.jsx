import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const PostLoading = () => {
    return (
        <div className="container">
            <h3 className="postTitle"><Skeleton width={500} /></h3>
            <div className="postPreview">
                <Skeleton height={250} width={500} />
                <Skeleton count={5} width={500} />
            </div>
            <p className="postInfo">
                <Skeleton width={500} />
            </p>
        </div>
    )
}

export default PostLoading;