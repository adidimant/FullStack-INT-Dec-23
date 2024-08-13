import { ReactNode, memo } from "react";
import SinglePost from "../singlePost/SinglePost";
import PostAvatar from "../../../../assets/avatarSfatHalev.jpg";
import PostImg from "../../../../assets/sfatHalevPostImage.jpeg";
import { User, PostImage } from "../../types/types";
import './Posts.css';

interface PostsProps {
  posts: PostImage[];
  users: User[];
}

const generateRandomDateWithin48Hours = (): Date => {
  const now = new Date();
  const hours48 = 48 * 60 * 60 * 1000;
  const randomTime = Math.random() * hours48;
  return new Date(now.getTime() - randomTime);
};

const formatTimeDifference = (date: Date): string => {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(hours / 24);
  const remainingHours = hours % 24;

  if (days > 0) {
    return `${days} day${days > 1 ? 's' : ''} ${remainingHours} hr${remainingHours > 1 ? 's' : ''} ago`;
  } else {
    return `${hours} hr${hours > 1 ? 's' : ''} ago`;
  }
};

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
            //date={new Date(user.registered.date).toLocaleTimeString()}
            date={formatTimeDifference(generateRandomDateWithin48Hours())}
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