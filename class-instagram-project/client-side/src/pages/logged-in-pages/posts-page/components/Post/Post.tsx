
import { memo } from 'react';
import './Post.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { useThemeContext } from '../../../../../contexts/theme-context';

type PostProps = {
    user: string;
    postImage: string;
    likes: number;
    createdDate: string;
};

function Post({ user, postImage, likes, createdDate }: PostProps) {
    const { theme }= useThemeContext();
    return (
        <div className='post'>
            <div className="post__header">
                <div className="post__headerAuthor">
                    <AccountCircleIcon></AccountCircleIcon>
                    {user}  <span style={{ marginLeft: '12px', color: theme === 'dark' ? '#ffffff' : undefined }}>{new Date(createdDate).toLocaleDateString()}</span>
                </div>
                <MoreHorizIcon></MoreHorizIcon>
            </div>
            <div className="post__image">
                <img src={postImage} alt="" />
            </div>
            <div className="post__footer">
                <div className="post__footerIcons">
                    <div className="post__iconsMain">
                        <FavoriteBorderIcon className='postIcon' />
                        <ChatBubbleOutlineIcon className='postIcon' />
                        <TelegramIcon className='postIcon' />
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


