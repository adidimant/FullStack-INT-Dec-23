import { memo, useCallback, useEffect, useState } from "react";
import Post from "../Post/Post";
import { PostBackendAPI } from "../../../types";
import './PostsContainer.css';
import { appendServerPrefix } from "../../../../../utils";
import { axiosClient } from "../../../../../axiosClient";

function PostsContainer() {
    const [posts, setPosts] = useState<PostBackendAPI[]>([]); // setPosts is a function that updates the posts state variable with the new value passed to it as an argument (in this case, an array of posts) and triggers a re-render of the component.
    const [anyPostsLeft, setAnyPostsLeft] = useState(true);
    const [oldestPostCreatedDate, setOldestPostCreatedDate] = useState(null);
    const loadMorePosts = useCallback(async (amount: number, oldestPostCreatedDate: string | null) => {
        try {
            let query = '/api/posts?results=' + amount;
            if (oldestPostCreatedDate) {
                query += `&oldestPostCreatedDate=${oldestPostCreatedDate}`;
            }
            const response = await axiosClient.get(query);
            const data = response.data; // Parse the response as JSON.
            if (data.length) {
                // if received users - take the oldest createdDate and store it in the state
                const oldestPost = data[data.length-1];
                const oldestPostDate = oldestPost.createdDate;
                setOldestPostCreatedDate(oldestPostDate);
            } else {
                setAnyPostsLeft(false);
            }
            setPosts([...posts, ...data]); // Update the posts state variable with the fetched posts.
            return data;
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    }, [posts]);

    useEffect(() => { // useEffect is a hook that runs a function when the component mounts and whenever the dependencies array changes.
        if (posts.length < 50 && anyPostsLeft) { // critical for avoiding endless re-renders!
            loadMorePosts(2, oldestPostCreatedDate);
        }
    }, [anyPostsLeft, loadMorePosts, oldestPostCreatedDate, posts]);

    const handleRefresh = useCallback(() => {
        setPosts([]);
        setOldestPostCreatedDate(null);
        setAnyPostsLeft(true);
    }, [])

    return (
        <div className="postpage-container">
           
            <button className="postpage-btn" onClick={handleRefresh}>Refresh</button>
            {posts.map((post: PostBackendAPI, index: number) => (
                <Post user={post.userId}
                    postImage={appendServerPrefix(post.imgUrl)}
                    likes={index * 10}
                    key={index}
                    createdDate={post.createdDate} />
            ))}
        </div>
    );
}

export default memo(PostsContainer);