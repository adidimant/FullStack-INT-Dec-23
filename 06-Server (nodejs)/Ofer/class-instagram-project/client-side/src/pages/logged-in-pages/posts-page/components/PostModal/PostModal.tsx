
import { memo } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import './PostModal.css';

type PostProps = {
    user: string;
    postImage: string;
    likes: number;
    timestamp: string;
};

function PostModal({ user, postImage, likes, timestamp }: PostProps) {
    return (
        <div className='postModal'  >
            <div className="postModal__header">
                <div className="postModal__headerAuthor">
                    <AccountCircleIcon></AccountCircleIcon>
                    {user} . <span>{timestamp}</span>
                </div>
                <MoreHorizIcon></MoreHorizIcon>
            </div>
            <div className="postModal__image">
                <img src={postImage} alt="" />
            </div>
            <div className="postModal__footer">
                <div className="postModal__footerIcons">
                    <div className="postModal__iconsMain">
                        <FavoriteBorderIcon className='postIcon' />
                        <ChatBubbleOutlineIcon className='postIcon' />
                        <TelegramIcon className='postIcon' />
                    </div>
                    <div className="postModal_iconSave">
                        <BookmarkBorderIcon className='postIcon' />
                    </div>
                </div>
                Liked by {likes} people
            </div>
        </div>
    );
}
export default memo(PostModal);
