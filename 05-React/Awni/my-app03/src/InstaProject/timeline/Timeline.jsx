import React from 'react';
import './Timeline.css';
import Sugesstions from './Sugesstions';
import Post from './Posts/Post';
import { useState } from 'react';

function Timeline() {
    const [posts, setPosts] = useState([
        {
            user: 'Awni_',
            postImage: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            likes: 12,
            timespamp: "2d",
        },
        {
            user: 'Adi_',
            postImage: "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
            likes: 55,
            timespamp: "12h",
        },
        {
            user: 'Ali_',
            postImage: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
            likes: 123,
            timespamp: "3h",
        },
        {
            user: 'Omar_',
            postImage: "https://cc-prod.scene7.com/is/image/CCProdAuthor/FF-SEO-text-to-image-z-pattern1-desktop-1x?$pjpeg$&jpegSize=100&wid=500",
            likes: 113,
            timespamp: "7h",
        },
    ]);
    return (
        <div className='timeline'>
            <div className="timeline__left">
                <div className="timeline__posts">
                    {posts.map((post) => (
                        <Post user={post.user}
                            postImage={post.postImage}
                            likes={post.likes}
                            timespamp={post.timespamp} />
                    ))}
                </div>
            </div>
            <div className="timeline__right">
                <Sugesstions />
            </div>

        </div>
    );
}

export default Timeline;