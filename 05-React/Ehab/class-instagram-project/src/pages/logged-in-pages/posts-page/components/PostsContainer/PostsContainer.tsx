import { memo, useCallback, useEffect, useRef, useState } from "react";
import Post from "../Post/Post";
import { RandomPostApiResult, PostType } from "../../../types";
import './PostsContainer.css';
import { useRefreshContext } from "../../../../../contexts/refresh-context";

function PostsContainer() {
    const [posts, setPosts] = useState<RandomPostApiResult []>([]); // setPosts is a function that updates the posts state variable with the new value passed to it as an argument (in this case, an array of posts) and triggers a re-render of the component.
    const fetchingFromAPI = useRef(false);
    const { value, setValue } = useRefreshContext();

    const loadMorePosts = useCallback(async (amount: number, fetchingFromAPI: string) => {
        try {
            const response = await fetch('http://localhost:3000/api/posts?results=' + amount + '&fetchingFromAPI=' + fetchingFromAPI); // Fetch posts from the API.
            const data = await response.json(); // Parse the response as JSON.
            setPosts([...posts, ...data]); // Update the posts state variable with the fetched posts.
            return data;
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    }, [posts]);

    
    useEffect(()=>{
        console.log('from postContainer value=', value);
        if(value){
            setValue(false);
        }
    },[setValue, value]);
    

    useEffect(() => { // useEffect is a hook that runs a function when the component mounts and whenever the dependencies array changes.
        if (posts.length < 10) { // critical for avoiding endless re-renders!
            if(!fetchingFromAPI.current){
                loadMorePosts(1,'false');
                fetchingFromAPI.current = !fetchingFromAPI.current;
            }else{
                loadMorePosts(1,'true');
            }
        }
    }, [fetchingFromAPI, loadMorePosts, posts]);

    const handleRefresh = useCallback(() => { // Handle refresh button click. 
        setPosts([]);
    }, []);

    return(
        <div className="postpage-container">
            <button className="postpage-btn" onClick={handleRefresh}>Refresh</button>
            {posts.map((post: RandomPostApiResult | PostType, index: number) => {
                if ('name' in post) {
                    return (
                        <Post
                            user={post.name.first}
                            postImage={post.picture.large}
                            likes={index * 10}
                            key={index}
                            timestamp={post.registered.date} 
                        />
                    );
                    } else {
                        return(
                            <Post 
                                user={post.userId}
                                postImage={'http://localhost:3000'+post.imgUrl}
                                likes={index * 10}
                                key={index}
                                timestamp={post.createdDate.toString()}
                            />
                        )
                    }
                })}
        </div>
    );

    /*return (
        <div className="postpage-container">
           
            <button className="postpage-btn" onClick={handleRefresh}>Refresh</button>
            {posts.map((post: RandomPostApiResult | PostType, index: number) => (
               
                <Post user={post.name.first}
                    postImage={post.picture.large}
                    likes={index * 10}
                    key={index}
                    timestamp={post.registered.date} />
            ))}
        </div>
    );*/
}

export default memo(PostsContainer);