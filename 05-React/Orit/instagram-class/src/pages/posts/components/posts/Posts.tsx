import { ReactNode, memo } from "react";
import SinglePost from "../singlePost/SinglePost";
import PostAvatar from "../../assets/avatarSfatHalev.jpg";
import PostImg from "../../assets/sfatHalevPostImage.jpeg";
import { User, PostImage } from "../../types/types";
import './Posts.css';

interface PostsProps {
  posts: PostImage[];
  users: User[];
}

function Posts({ posts, users }: PostsProps): ReactNode {
    return (
      <div className="posts-container">
        <div className="posts">
          <SinglePost
            avatarImage={PostAvatar}
            username="sfat_halev22"
            date="2hrs"
            postImage={PostImg}
            likes={4}
            description="החיוך של אביאל המתוק לפני הניתוח ואחרי הניתוח
            אנחנו כאן איתכם בכל שלב❤
            
            #ניתוחשפהשסועה
            #שפהשסועה
            #חיוךמושלם
            #חיוך
            #שפתהלב
            #שפתיים"
          />
          {users.map((user, index) => (
          <SinglePost
            key={index}
            avatarImage={user.picture.thumbnail}
            username={user.login.username}
            date={new Date(user.registered.date).toLocaleTimeString()}
            postImage={posts[index]?.imageUrl} // if posts are less than users
            likes={Math.floor(Math.random() * 100)} // Random likes :-)
            description={posts[index]?.description} // if posts are less than users
          />
        ))}
        </div>
      </div>
    );
  }
  
  export default memo(Posts);