import React, { useState } from 'react';
import SinglePost from './SinglePost'; // ייבוא הקומפוננטה

const Posts = () => {
    const [selectedPost, setSelectedPost] = useState(null);

    const posts = [
        { 
            name: { first: 'John', last: 'Doe' }, 
            email: 'john@example.com', 
            phone: '123-456-7890',
            location: { city: 'New York', country: 'USA' },
            picture: { large: 'https://example.com/john.jpg' }
        }
    ];

    return (
        <div>
            <h1>Posts List</h1>
            <ul>
                {posts.map((post, index) => (
                    <li key={index} onClick={() => setSelectedPost(post)}>
                        {post.name.first} {post.name.last}
                    </li>
                ))}
            </ul>

            {selectedPost && <SinglePost post={selectedPost} />}
        </div>
    );
};

export default Posts;