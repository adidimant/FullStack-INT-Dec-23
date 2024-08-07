import { ReactNode, memo, useEffect, useState } from "react";
import Suggested from "../suggested/Suggested";
import Posts from "../posts/Posts";
import Stories from '../stories/Stories';
import { User, PostImage } from "../../types/types";
import './MainBody.css';

function MainBody(): ReactNode {
  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPosts] = useState<PostImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const imageResponse = await fetch('https://picsum.photos/v2/list?limit=50');
        const images = await imageResponse.json();

        const descriptionResponse = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=50');
        const descriptions = await descriptionResponse.json();

        const usersResponse = await fetch("https://randomuser.me/api/?results=50");
        const usersData = await usersResponse.json();

        // Map the fetched images and descriptions to create post data
        const postsData = images.map((image: any, index: number) => ({
          imageUrl: image.download_url,
          description: descriptions[index].body
        }));

        setUsers(usersData.results);
        setPosts(postsData);

        setLoading(false);
       }
    /*fetch("https://randomuser.me/api/?results=50")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
        setLoading(false);
      })*/
      catch (error)  {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    /*return (<div>Loading...</div>);*/
    return (
      <div className="loading-container">
        <div className="loading-wave">
          <div className="loading-bar"></div>
          <div className="loading-bar"></div>
          <div className="loading-bar"></div>
          <div className="loading-bar"></div>
        </div>
      </div>
    );
  }

    return (
      <section className="main-body-container">
        <div className="main-body">
          <Stories users={users} />
          <Posts posts={posts} users={users}  />
        </div>
        <div className="sidebar">
          <Suggested users={users} />
        </div>
      </section>
    );
  }
  
  export default memo(MainBody);