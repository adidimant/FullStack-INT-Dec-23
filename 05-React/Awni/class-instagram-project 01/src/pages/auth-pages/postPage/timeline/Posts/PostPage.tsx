import { memo, useEffect, useState } from "react";
import Post from "./Post";
import './PostPage.css';

type Posts = {
    name: {
        title: string;
        first: string;
        last: string;
    };
    email: string;
    picture: {
        large: string;
    };
    gender: string;
    location: {
        street: {
            number: number;
            name: string;
        };
        city: string;
        state: string;
        country: string;
        postcode: string;
        coordinates: {
            latitude: string;
            longitude: string;
        };
        timezone: {
            offset: string;
            description: string;
        };
    };
    login: {
        uuid: string;
        username: string;
        password: string;
        salt: string;
        md5: string;
        sha1: string;
        sha256: string;
    };
    dob: {
        date: string;
        age: number;
    };
    registered: {
        date: string;
        age: number;
    };
    phone: string;
    cell: string;
    id: {
        name: string;
        value: string;
    };
    nat: string;
    
}

function PostsPage() {
    const [posts, setPosts] = useState<Posts[]>([]); // setPosts is a function that updates the posts state variable with the new value passed to it as an argument (in this case, an array of posts) and triggers a re-render of the component.
    
    useEffect(() => { // useEffect is a hook that runs a function when the component mounts and whenever the dependencies array changes.
        fetchPosts(); // Fetch posts when the component mounts.
    }, []);
    
    const fetchPosts = async () => {
        try {
            const response = await fetch('https://randomuser.me/api/?results=50'); // Fetch posts from the API.
            const data = await response.json(); // Parse the response as JSON.
            setPosts(data.results); // Update the posts state variable with the fetched posts.
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };
    
    const handleRefresh = () => { // Handle refresh button click. 
        fetchPosts(); // Fetch posts again.
    };
    
    return (
        <div className="postpage-container">
            <button className="postpage-btn" onClick={handleRefresh}>Refresh</button> 
            {posts.map((post: { name: { first: string }, picture: { large: string }, registered: { date: string } }, index: number) => (
                <Post user={post.name.first}
                postImage={post.picture.large}
                likes={index * 10}
                timestamp={post.registered.date} />
            ))}
        </div>
    );
}

export default memo(PostsPage);