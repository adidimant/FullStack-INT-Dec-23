import React from 'react';
import './Post.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
function Post({user,postImage,likes,timespamp}) {
    return (
        <div className='post'>
            <div className="post__header">
                <div className="post__headerAuthor">
                    <AccountCircleIcon>{user.charAt(0).toUpperCase()}</AccountCircleIcon>
                    {user} . <span>{timespamp}</span>
                </div>
                <MoreHorizIcon></MoreHorizIcon>
            </div>
            <div className="post__image">
                <img src={postImage} alt="" />
            </div>
            <div className="post__footer">
                <div className="post__footerIcons">
                    <div className="post__iconsMain">
                        <FavoriteBorder className='postIcon'/>
                        <ChatBubbleOutlineIcon className='postIcon'/>
                        <TelegramIcon className='postIcon'/>
                    </div>
                    <div className="post_iconSave">
                        <BookmarkBorderIcon className='postIcon'/>
                    </div>
                </div>
                Liked by {likes} people
            </div>
        </div>
    );
}

export default Post;