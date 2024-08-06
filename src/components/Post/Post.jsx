import { DateTime } from "luxon";
import { GoComment } from "react-icons/go";
import ReactMarkdown from "react-markdown";
import Carousel from "react-gallery-carousel";
import 'react-gallery-carousel/dist/index.css';
import styles from "./post.module.css";

const Post = ({post, postType=''}) => {
    const getGalleryUrls = () => {
        const imageUrls = [];
        if (post.media_metadata && post.gallery_data && post.gallery_data.items) {
            const metadata = post.media_metadata;
            const galleryItems = post.gallery_data.items;
            
            // Map the order of media IDs from gallery_data
            const mediaOrder = galleryItems.map(item => item.media_id);
    
            mediaOrder.forEach((id) => {
                const media = metadata[id];
                if (media && media.p && media.p.length > 0) {
                    // Extract the last URL for each image
                    const lastImageUrl = media.p[media.p.length - 1].u.replaceAll('&amp;', '&');
                    imageUrls.push({ src: lastImageUrl });
                }
            });
        }
        return imageUrls;
    };

    return (
        <div className={styles.container}>
            <h3 className="postTitle"><ReactMarkdown children={post.title} /></h3>
            <div className={styles.postPreview}>
                <div className={styles.images}>
                    {post.post_hint === 'image' && <img src={post.url} className={styles.postImage} />}
                    {post.is_gallery && <Carousel images={getGalleryUrls()} canAutoPlay={false} style={{width: 400 }}/>}
                    {post.post_hint === 'link' && post.thumbnail && (
                        <>
                            <img src={post.thumbnail} />  
                            <a href={post.url}>{post.url}</a>
                        </>
                    )}
                </div>
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