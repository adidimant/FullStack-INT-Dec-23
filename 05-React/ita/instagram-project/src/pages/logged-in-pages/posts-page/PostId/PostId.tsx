import { memo, useEffect, useState } from "react";
import { RandomPostApiResult } from "../../types";
import Post from "../components/Post/Post";

function PostId() {
    const [userData, setUserData] = useState<RandomPostApiResult[]>([]);
  
    useEffect(() => {
      fetch("https://randomuser.me/api/?results=7")
        .then(response => response.json())
        .then(data => setUserData(data.results));
    }, []); 
  
    const pathParts = window.location.pathname.split('/');
    const PostId = pathParts[pathParts.length - 1].toLowerCase();
  
    const relevantPost = userData.find(user => user.id.name.toLowerCase() === PostId);
  
    if (!relevantPost) {
      return <div>Post not found</div>;
    }
  
    return (
      <Post
        user={relevantPost.name.first}
        postImage={relevantPost.picture.large}
        likes={7 * 10}
        timestamp={relevantPost.registered.date}
        id={relevantPost.id.name}
      />
    );
  }
  
  export default memo(PostId);