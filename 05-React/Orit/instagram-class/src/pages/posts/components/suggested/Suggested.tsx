import { ReactNode, memo } from "react";
import { User } from "../../types/types";
import "./Suggested.css";

interface SuggestedProps {
  users: User[];
}

const MAX_SUGGESTED = 5;

function shuffleArray<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5);
}

function Suggested({ users }: SuggestedProps): ReactNode {
  const limitUsers = shuffleArray(users.slice(0, MAX_SUGGESTED));

  return (
    <div className="suggested-container">
      {limitUsers.map((user, index) => (
          <div className="content-container">
              <div key={index} className="content">
                  <img src={user.picture.thumbnail} alt={`${user.name.first} ${user.name.last}`} />
              </div>
              <div className="suggested-text">Suggested for you</div>
          </div>
      ))}
    </div>
  );
}

export default memo(Suggested);
