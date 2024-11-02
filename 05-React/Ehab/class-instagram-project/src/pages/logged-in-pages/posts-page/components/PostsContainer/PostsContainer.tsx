import { memo, useCallback, useEffect, useState } from "react";
import Post from "../Post/Post";
import { PostType } from "../../../types";
import './PostsContainer.css';
import { useRefreshContext } from "../../../../../contexts/refresh-context";

function PostsContainer() {
    const [posts, setPosts] = useState<PostType []>([]); // setPosts is a function that updates the posts state variable with the new value passed to it as an argument (in this case, an array of posts) and triggers a re-render of the component.
    //const fetchingFromAPI = useRef(false);
    const { value, setValue } = useRefreshContext();
    if(value && posts.length == 0){
        setValue(false);
    }
    /*const loadMorePosts = useCallback(async () => {
        try {
            const response = await fetch('http://localhost:3000/api/posts'); // Fetch posts from the API.
            //const response = await fetch('http://localhost:3000/api/posts?results=' + amount + '&fetchingFromAPI=' + fetchingFromAPI); // Fetch posts from the API.
            const data = await response.json(); // Parse the response as JSON.
            setPosts([...posts, ...data]); // Update the posts state variable with the fetched posts.
            return data;
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    }, [posts]);*/

    
    useEffect( ()=>{
       const loadPosts = async () => {
        try {
            if(posts.length == 0){
                const response = await fetch('http://localhost:3000/api/posts'); // Fetch posts from the API.
                //const response = await fetch('http://localhost:3000/api/posts?results=' + amount + '&fetchingFromAPI=' + fetchingFromAPI); // Fetch posts from the API.
                const data = await response.json(); // Parse the response as JSON.
                setPosts([...posts, ...data]); // Update the posts state variable with the fetched posts.
                return data;
            }
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
       }
       loadPosts();
    },[posts]);
    /*useEffect(() => { // useEffect is a hook that runs a function when the component mounts and whenever the dependencies array changes.
        if (posts.length < 10) { // critical for avoiding endless re-renders!
            if(!fetchingFromAPI.current){
                loadMorePosts(1);
                fetchingFromAPI.current = !fetchingFromAPI.current;
            }else{
                loadMorePosts(1);
            }
        }
    }, [loadMorePosts, posts.length]);*/

    const handleRefresh = useCallback(() => { // Handle refresh button click. 
        setPosts([]);
    }, []);

    if(value && posts.length != 0){
        //fetchingFromAPI.current = !fetchingFromAPI.current;
        setPosts([]);
    }

    return(
        <div className="postpage-container">
            <button className="postpage-btn" onClick={handleRefresh}>Refresh</button>
            {
                posts.map((post: PostType, index: number) =>{
                    return(
                        <Post 
                            user={post.userId}
                            postImage={post.imgUrl}
                            likes={index * 10}
                            key={index}
                            timestamp={post.createdDate.toString()}
                        />
                    )
                })
            }
        </div>
    );
}

export default memo(PostsContainer);