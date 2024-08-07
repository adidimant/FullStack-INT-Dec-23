import { memo, useEffect, useState } from "react";
import AuthSideBar from "./components/auth-sidebar/AuthSideBar";
import Post from "./components/post/Post";
import userNameRandom from './api';
import { ResultType, ApiResult } from './types'
import "./Posts.css";

function Posts() {
    const [results, setResults] = useState<ResultType[]>([]);

    useEffect(() => {
    const fetchData = async () => {
        try {
            // const response = await fetch(`https://randomuser.me/api/?results=50`);
            // const data = await response.json();
            const apiData: { results: ApiResult[] } = userNameRandom;;
                const transformedResults: ResultType[] = apiData.results.map((result) => ({
                    username: result.login.username,
                    music: 'Default Music',
                    profilImg: result.picture.thumbnail
                }));
                setResults(transformedResults);
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    };

    fetchData();
    }, []);

    return (
        <div className="posts-page-container">
            <AuthSideBar />
            <div className="main"> 
                <div className="posts-box">
                {results.map((result, index) => (
                        <Post key={index} data={result} />
                    ))}
            </div>
            </div>
            
            
        </div>
    )
}

export default memo(Posts)