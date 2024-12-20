import { memo } from 'react';
import './Posts.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Link } from 'react-router-dom';

type PostProps = {
    user: string;
    postImage: string;
    likes: number;
    timestamp: string;
};

function Post({ user, postImage, likes, timestamp }: PostProps) {
    return (
        <div className='post'>
            <div className="post__header">
                <div className="post__headerAuthor">
                    <AccountCircleIcon />
                    {user} . <span>{timestamp}</span>
                </div>
                <MoreHorizIcon />
            </div>
            <div className="post__image">
                <img src={postImage} alt="" />
            </div>
            <div className="post__footer">
                <div className="post__footerIcons">
                    <div className="post__iconsMain">
                        {/* Use Link to navigate to the specific post page */}
                        <Link to={`/posts/post/${user}`}>
                            <FavoriteBorderIcon className='postIcon' />
                            <ChatBubbleOutlineIcon className='postIcon' />
                            <TelegramIcon className='postIcon' />
                        </Link>
                    </div>
                    <div className="post_iconSave">
                        <BookmarkBorderIcon className='postIcon' />
                    </div>
                </div>
                Liked by {likes} people
            </div>
        </div>
    );
}

export default memo(Post);
