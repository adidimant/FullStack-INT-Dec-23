import { memo, useCallback, useEffect, useMemo, useState } from "react";
import Post from "../Post/Post";
import { RandomPostApiResult } from "../../../types";
import { useThemeContext } from '../../../../../contexts/theme-context'
import './PostsContainer.css';
import '../../../../../contexts/theme-style.css'

function PostsContainer() {
    const [posts, setPosts] = useState<RandomPostApiResult[]>([]); // setPosts is a function that updates the posts state variable with the new value passed to it as an argument (in this case, an array of posts) and triggers a re-render of the component.

    const loadMorePosts = useCallback(async()=>{
        try{
            const response = await fetch('http://localhost:3000/posts'); // Fetch posts from the server.
            const data = await response.json(); // Parse the response as JSON.
            setPosts([...posts, ...data]); // Update the posts state variable with the fetched posts.
        }
        catch (error) {
            console.error('Error fetching posts:', error);
        }
    },[posts])

    useEffect(() => { // useEffect is a hook that runs a function when the component mounts and whenever the dependencies array changes.
        if (posts.length < 50) { // critical for avoiding endless re-renders!
            loadMorePosts();
        }
    }, [loadMorePosts, posts.length]);

    const handleRefresh = useCallback(() => { // Handle refresh button click. 
        setPosts([]);
    }, []);

    const { theme } = useThemeContext();
	const isDark = useMemo(() => theme === 'dark', [theme]);

    return (
        <div className="postpage-container">
           
            <button className= {isDark ? 'postpage-btn dark' : 'postpage-btn light'} onClick={handleRefresh}>Refresh</button>
            {posts.map((post: RandomPostApiResult, index: number) => (
                <Post user={post.name.first}
                    postImage={post.picture.large}
                    likes={index * 10}
                    timestamp={post.registered.date} />
            ))}
        </div>
    );
}

export default memo(PostsContainer);