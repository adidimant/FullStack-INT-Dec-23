
import { memo, useMemo } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { useThemeContext } from '../../../../../contexts/theme-context';
import './Post.css';
import '../../../../../contexts/theme-style.css'

type PostProps = {
    user: string;
    postImage: string;
    likes: number;
    timestamp: string;
};

function Post({ user, postImage, likes, timestamp }: PostProps) {
    const { theme } = useThemeContext();
	const isDark = useMemo(() => theme === 'dark', [theme]);
    return (
        <div className={isDark ? 'post dark' : 'post light'}>
            <div className={isDark ? 'post__header dark' : 'post__header light'}>
                <div className= {isDark ? 'post__headerAuthor dark' : 'post__headerAuthor light'}>
                    <AccountCircleIcon></AccountCircleIcon>
                    {user} . <span>{timestamp}</span>
                </div>
                <MoreHorizIcon></MoreHorizIcon>
            </div>
            <div className={isDark ? 'post__image dark' : 'post__image light'}>
                <img src={postImage} alt="" />
            </div>
            <div className={isDark ? 'post__footer dark' : 'post__footer light'} >
                <div className= {isDark ? 'post__footerIcons dark' : 'post__footerIcons light'}>
                    <div className= {isDark ? 'post__iconsMain dark' : 'post__iconsMain light'}>
                        <FavoriteBorderIcon className='postIcon' />
                        <ChatBubbleOutlineIcon className='postIcon' />
                        <TelegramIcon className='postIcon' />
                    </div>
                    <div className= {isDark ? 'post_iconSave dark' : 'post_iconSave light'}>
                        <BookmarkBorderIcon className='postIcon' />
                    </div>
                </div>
                Liked by {likes} people
            </div>
        </div>
    );
}
export default memo(Post);


