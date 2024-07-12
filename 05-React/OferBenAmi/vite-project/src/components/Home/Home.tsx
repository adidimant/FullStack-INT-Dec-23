import { ReactNode } from "react";
import { Link } from 'react-router-dom';
import './Home.scss'

export default function Home():ReactNode {
    return(
        <>
            <h1>This is the Home Page</h1>
            <div className="link-div">
                <button><Link to='/Companies'>Companies</Link></button>
                <button><Link to='/About'>About</Link></button>
            </div>
        </>
    )
}
