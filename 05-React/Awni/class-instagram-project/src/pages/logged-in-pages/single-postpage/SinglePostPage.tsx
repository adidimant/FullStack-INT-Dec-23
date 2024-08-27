import { memo, useEffect, useState, ChangeEvent, MouseEvent } from "react";
import { useParams } from "react-router-dom";
import { Posts } from "../posts-page/components/Post-Info/PostInfo";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import './SinglePostPage.css';

function SinglePostPage() {
    const { postId } = useParams<{ postId: string }>(); // Get the postId from the URL params using useParams hook from react router // url הוא הוק שמחזיר אובייקט של זוגות מפתח/ערך של פרמטרים של כתובת 
    const [post, setPost] = useState<Posts | null>(null); // State to manage the post data 
    const [comments, setComments] = useState<string[]>([]); // State to manage comments
    const [newComment, setNewComment] = useState<string>(""); // State for the new comment input



    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`https://randomuser.me/api/?seed=${postId}&results=1`);
                const data = await response.json();
                setPost(data.results[0]);
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };

        fetchPost();
    }, [postId]);

    const handleCommentChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewComment(event.target.value);
    };

    const handleCommentSubmit = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();// Prevent the default form submission behavior of the browser to avoid page refresh on button click event 
        if (newComment.trim()) {
            setComments([...comments, newComment]);
            setNewComment("");
        }
    };

    if (!post) {
        return <div>Loading...</div>;
    }

    const handleChange = () => {
        window.history.back();
    }
    return (
        <div className="single-post-container">
            <div className="single-post">
                <div className="post-image-container">
                    <img src={post.picture.large} alt="Profile" />
                </div>
                <div className="post-details-container">
                    <span className="close" onClick={handleChange}>X</span>
                    <h1>{post.name.title} {post.name.first} {post.name.last}</h1>
                    <div className="post-bio">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, inventore?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, inventore?</p>
                    </div>
                    <div className="comments">
                        {comments.map((comment, index) => (
                            <div key={index} className="comment">
                                <p><strong>Username:</strong> {comment}</p>
                            </div>
                        ))}
                    </div>
                    <div className="icons">
                        <FavoriteBorderIcon className='postIcon' />
                        <ChatBubbleOutlineIcon className='postIcon' />
                        <TelegramIcon className='postIcon' />
                    </div>
                    <div className="footer-post">
                        <p>Likes: 1,234</p>
                        <p>{post.dob.date.toString()}</p>
                        <div className="comment-inpt">
                            <input
                                type="text"
                                placeholder="Add a comment..."
                                value={newComment}
                                onChange={handleCommentChange} // Handle the input change event to update the new comment state value 
                            />
                            <button
                                className="comment-btn"
                                onClick={handleCommentSubmit} // Handle the button click event to submit the new comment  
                            >
                                Post
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(SinglePostPage);
