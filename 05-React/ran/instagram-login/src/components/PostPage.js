import React from 'react';
import { useLocation } from 'react-router-dom';
import './PostPage.css';

const PostPage = () => {
  const location = useLocation();
  const { post } = location.state || {};

  if (!post) {
    return <p>No post found.</p>;
  }

  return (
    <div className="post-page">
      <h1>{post.name.first} {post.name.last}</h1>
      <img src={post.picture.large} alt="user" />
      <p><strong>Email:</strong> {post.email}</p>
      <p><strong>Phone:</strong> {post.phone}</p>
      <p><strong>Location:</strong> {post.location.city}, {post.location.country}</p>
    </div>
  );
};

export default PostPage;
