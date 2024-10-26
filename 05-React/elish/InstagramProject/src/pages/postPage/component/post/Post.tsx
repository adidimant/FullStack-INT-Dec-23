import { memo, ReactNode , useCallback, useState} from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Moreinformation from "./moreinformation/Moreinformation";
import './Post.css';

type PostProps = {
    user: string;
    postImg: string;
    liks: number;
    timestamp: string;
};

function Post({user, postImg, liks, timestamp} :PostProps) : ReactNode {
    const [open, setOpen] = useState(false);

    const handleOpen = useCallback(() => {
        setOpen((prevOpen) => !prevOpen);
    },[]);
    
    return(
        <div className='post'>
        <div className="post__header">
            <div className="post__headerAuthor">
                <AccountCircleIcon></AccountCircleIcon>
                {user} . <span>{timestamp}</span>
            </div>
            <div className="moreinformation" style={{cursor: 'pointer'}} onClick={handleOpen}><MoreHorizIcon></MoreHorizIcon></div>
        </div>
        <div className="post__image">
            <img src={postImg} alt="" />
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
            Liked by {liks} people
        </div>
        <Moreinformation openMore={open} onClose={handleOpen}/>
    </div>
    );
}

export default memo(Post);