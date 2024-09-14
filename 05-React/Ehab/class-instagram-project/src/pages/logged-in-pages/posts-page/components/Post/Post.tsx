
import { memo, useCallback, useEffect, useState } from 'react';
import './Post.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MoreOptions from '../MoreOptions/MoreOptions';
import { usePostContext } from '../../../../../contexts/Post-Context';

type PostProps = {
    user: string;
    postImage: string;
    likes: number;
    timestamp: string;
};


function Post({ user, postImage, likes, timestamp }: PostProps) {
    const { dispatch } = usePostContext();
    
    const [isVisible, setIsVisible] = useState(false);
    
    const moreOptionsClick = useCallback(()=>{
        const _post: PostProps = {
            user: user,
            postImage: postImage,
            likes: likes,
            timestamp: timestamp 
        }
        console.log('_post',_post);
        if(dispatch){
            dispatch({..._post}); 
        }
        setIsVisible(!isVisible);
    },[dispatch, isVisible, likes, postImage, timestamp, user]);

    const hiddMoreOptions = useCallback((event: MouseEvent)=>{
        const clickedDiv = event.target as HTMLDivElement;
        if (!(clickedDiv.classList[0] == 'moreoptions-container' || clickedDiv.classList[0] == 'option')){
            setIsVisible(!isVisible);
        }
    },[isVisible]);

    useEffect (()=>{
        const leftNavbarElement = document.getElementsByClassName('left-navbar')[0] as HTMLDivElement;
        const authPageContainerElement = document.getElementsByClassName('auth-page-container')[0] as HTMLDivElement;

        if (isVisible){
            document.body.style.overflow = 'hidden';
            document.body.style.backgroundColor = 'gray';
            
            if(leftNavbarElement){
                leftNavbarElement.style.borderRightColor = 'gray';
            }
            authPageContainerElement.addEventListener('click', hiddMoreOptions);
        }
        else{
            document.body.style.overflow = 'auto';
            document.body.style.backgroundColor = 'white';
            leftNavbarElement.style.borderRightColor = '#dbdbdb';
            authPageContainerElement.removeEventListener('click',hiddMoreOptions);
        }
    },[hiddMoreOptions, isVisible]);

    return (
        <>
        <div id='MoreOptionsDiv'>{isVisible && <MoreOptions user={user} postImage={postImage} likes={likes} timestamp={timestamp}  />}</div>
        <div className='post'>
            <div className="post__header">
                <div className="post__headerAuthor">
                    <AccountCircleIcon></AccountCircleIcon>
                    {user} . <span>{timestamp}</span>
                </div>
                <span onClick={()=> moreOptionsClick()} style={{cursor: 'pointer'}}><MoreHorizIcon></MoreHorizIcon></span>
                
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
        </>
    );
}
export default memo(Post);


