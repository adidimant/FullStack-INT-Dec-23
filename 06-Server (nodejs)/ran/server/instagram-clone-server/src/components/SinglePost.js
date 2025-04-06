import React from 'react';

const SinglePost = ({ post }) => {
    if (!post) return <p>No post data available</p>;

    return (
        <div>
            <h1>{post.name.first} {post.name.last}</h1>
            <p>Email: {post.email}</p>
            <p>Phone: {post.phone}</p>
            <p>Location: {post.location.city}, {post.location.country}</p>
            <img src={post.picture.large} alt={`${post.name.first} ${post.name.last}`} />
        </div>
    );
};

export default SinglePost;