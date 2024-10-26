import { memo, useCallback, useEffect, useState } from "react";
import {RandomApiResult} from '../../type';
import Post from "./Post";
import './PostMain.css';

function PostMain(){
    const [posts, setPosts] = useState<RandomApiResult[]>([]);
    const loadMorePosts = useCallback( async (amount: number) =>{
        try{
            const response = await fetch('http://localhost:3000/api/posts?results=' + amount);
            const data = await response.json();
            setPosts((prevPosts) => [...prevPosts, ...data]);
            return data;
        } catch (error) {
            console.error('Error fetching posts:' , error);
        }
    }, []);

    useEffect(()=> {
        if(posts.length < 50)
            loadMorePosts(2);
    }, [posts,loadMorePosts]);

    const handleRefresh = useCallback(()=> {
        setPosts([])
    }, []);

    return(
        <div className="postpage-container">
            <button className="postpage-btn" onClick={handleRefresh}>Refresh</button>
            {posts.map((post: RandomApiResult, index: number) => {  
                return (
                    <Post
                        user={post.name.first}
                        postImg={post.picture.large}
                        liks={index * 10}
                        key={index}
                        timestamp={post.registered.date}
                          /> 
                );
            })}
        </div>
    );
}

export default memo(PostMain);