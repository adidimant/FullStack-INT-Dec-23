import { memo, useEffect, useState } from 'react';
import profile from '../../assets/20240211_113017.jpg';
import Story from './Story';
import {RandomApiResult} from '../../type';
import './Stories.css';

function Stories(){
	const [userData, setUserData] = useState([]);

	useEffect( () => {
		fetch("https://randomuser.me/api/?results=7")
		.then(response  => response.json())
		.then(data => setUserData(data.results))
	},[])

    return(
        <div className='Stories'>
            <Story userName='elisheva gado' profilePic={profile}/>
            {userData ? userData.map((user: RandomApiResult , index: number)=> {
                return <Story key={index} userName={user.name.first} profilePic={ user.picture.thumbnail}/>
            }): <></>}
        </div>
    );
}

export default memo(Stories);