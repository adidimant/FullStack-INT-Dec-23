import { memo, ReactNode, useEffect, useState } from "react";
import UserSuggested from "./UserSuggested";
import profile from '../../assets/20240211_113017.jpg';
import {RandomApiResult} from '../../type'; 
import './Suggested.css';

function Suggested(): ReactNode{
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=5")
        .then((response) => response.json())
        .then((data) => setUserData(data.results));
    },[])

    return(
        <div className="Suggested">
            <UserSuggested
                profilePic={profile}
                userName="elish"
                fullName="elisheva gado"
                switchOrFllow="switch"
            />
            <div className="suggested-for-you">
                <p>Suggested for you</p>
                <button>See All</button>
            </div>

            {userData.length > 0 ? userData.map((user: RandomApiResult, index: number) =>{
                return <UserSuggested
                            key={index}
                            profilePic={user.picture.thumbnail}
                            userName={user.name.first}
                            fullName={`${user.name.first} ${user.name.last}`}
                            switchOrFllow="fllow"
                        />;
            }): <></>}
        </div>
    );
}

export default memo(Suggested);