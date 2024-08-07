import { ReactNode, memo } from "react";
import { User } from "../../types/types";
import './Stories.css';

interface StoriesProps {
    users: User[];
}

const MAX_USERS = 5;

function shuffleArray<T>(array: T[]): T[] {
    return array.sort(() => Math.random() - 0.5);
}

//const MAX_USERNAME_LENGTH: number = 12;

function Stories({ users }: StoriesProps): ReactNode {
    
    const limitUsers = shuffleArray(users.slice(0, MAX_USERS));

    /*function truncateUsername(username: string, maxLength: number): string {
        return username.length > maxLength ? `${username.slice(0, 9)}...` : username;
    }*/

    return (
        <div className="stories">
            <div className="stories-container">
                {limitUsers.map((user, index) => (
                    <div className="content-container">
                        <div key={index} className="content">
                            <img src={user.picture.thumbnail} alt={`${user.name.first} ${user.name.last}`} />
                        </div>
                        <div className="username">{user.login.username}</div>
                    </div>
                ))}
            </div>
        </div>
    );
  }
  
  export default memo(Stories);