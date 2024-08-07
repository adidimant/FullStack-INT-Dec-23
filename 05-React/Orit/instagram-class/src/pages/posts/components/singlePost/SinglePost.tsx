import { ReactNode, memo, useState } from "react";
import DefaultAvatar from "../../assets/profile.jpg";
import './SinglePost.css';

type PostProps = {
    avatarImage?: string;
    username: string;
    date: string;
    postImage: string;
    likes: number;
    description: string;
}

const MAX_DESCRIPTION_LENGTH: number = 100;

function SinglePost({avatarImage, username, date, postImage, likes, description}: PostProps): ReactNode {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = () => setIsExpanded(!isExpanded);

    // Truncated description
    const truncatedDescription =
    description.length > MAX_DESCRIPTION_LENGTH ? description.slice(0, MAX_DESCRIPTION_LENGTH) + '...' : description;

    return (
        <div className="post-container">
            <div className="post-header">
                <div className="post-avatar">
                    <img src={avatarImage ? avatarImage : DefaultAvatar} alt="" />
                </div>
                <div className="post-username-date">
                    <div className="post-username">{username}</div>•
                    <div className="post-date">{date}</div>
                </div>
                <div className="post-more-options">
                    <svg aria-label="More options" className="dotsSVG" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>More options</title><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                </div>
            </div>
            <div className="post-image">
                <img src={postImage} alt="" />
            </div>
            <div className="post-actions">
                <div className="actions-left">
                    <span id="action-like" className="action-button" title="Like">
                        <svg aria-label="Like" className="likeSVG" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Like</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                    </span>
                    <span id="action-comment" className="action-button" title="Comment">
                        <svg aria-label="Comment" className="commentSVG" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comment</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    </span>
                    <span id="action-share" className="action-button" title="Share post">
                        <svg aria-label="Share Post" className="shareSVG" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Share Post</title><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
                    </span>
                </div>
                <div className="actions-right">
                    <span id="action-save" className="action-button" title="Save">
                        <svg aria-label="Save" className="saveSVG" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Save</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
                    </span>
                </div>
            </div>
            <div className="post-likes">{likes} likes</div>
            <div className="post-desc">
                <p className="description">
                    <span className="username">{username} </span>
                    <span>
                        {isExpanded ? description : truncatedDescription}</span>
                    {description.length > MAX_DESCRIPTION_LENGTH && (
                    <span className="show-more" onClick={toggleDescription}>
                        {isExpanded ? ' less' : ' more'}
                    </span>
                    )}
                </p>
            </div>
        </div>
    );
  }
  
  export default memo(SinglePost);