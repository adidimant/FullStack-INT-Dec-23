import './PostInfo.css';
import { memo, useCallback, useEffect } from 'react';
import Post from './Posts';
import { usePostsContext } from '../../../PostsContext';
import './PostInfo.css';
export type Posts = {
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
    const { posts, setPosts } = usePostsContext(); // Get the posts state and setPosts function from the PostsContext 

    const loadMorePosts = useCallback(async (amount: number) => {
        try {
            const response = await fetch('https://randomuser.me/api/?results=' + amount);
            const data = await response.json();
            setPosts([...posts, ...data.results]);
            return data;
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    }, [posts, setPosts]);

    useEffect(() => {
        if (posts.length < 50) {
            loadMorePosts(2);
        }
    }, [posts, loadMorePosts]);

    const handleRefresh = () => {
        setPosts([]);
    };

    return (
        <div className="postpage-container">
            <button className="postpage-btn" onClick={handleRefresh}>Refresh</button>
            {posts.map((post, index) => (
                <Post
                    key={index}
                    user={post.name.first}
                    postImage={post.picture.large}
                    likes={index * 10}
                    timestamp={post.registered.date}
                />
            ))}
        </div>
    );
}

export default memo(PostsPage);
