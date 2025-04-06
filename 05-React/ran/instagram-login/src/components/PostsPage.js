import React, { useState, useEffect, useMemo } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import './PostsPage.css';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // פונקציה לשליפת פוסטים מ-API
  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://randomuser.me/api/?results=50');
      const data = await response.json();
      setPosts(data.results);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  // שליפת פוסטים בטעינת הדף
  useEffect(() => {
    fetchPosts();
  }, []);

  // חישוב פורמט המיקום, רק כאשר הנתונים משתנים
  const formattedLocations = useMemo(() => {
    return posts.map(post => `${post.location.city}, ${post.location.country}`);
  }, [posts]);

  return (
    <div className="posts-page">
      <h1>Posts</h1>
      <Button onClick={fetchPosts}>Refresh Posts</Button>
      {loading ? (
        <p>Loading posts...</p>
      ) : (
        <div className="posts-list">
          {posts.map((post, index) => (
            <div key={index} className="post-item">
              <img src={post.picture.thumbnail} alt="user thumbnail" />
              <div className="post-details">
                <h3>{post.name.first} {post.name.last}</h3>
                <p>Email: {post.email}</p>
                <p>Location: {formattedLocations[index]}</p>
                <Link to={`/posts/${index}`} state={{ post }}>View Post</Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostsPage;
