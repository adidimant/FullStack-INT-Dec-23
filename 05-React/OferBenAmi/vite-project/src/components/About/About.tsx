import { ReactNode } from "react";
import { Link } from 'react-router-dom';
import './About.scss'

export default function About():ReactNode {
    return(
        <>
            <h1>This is the About Page</h1>
            <div className="link-div">
                <button><Link to='/'>Home</Link></button>
                <button><Link to='/Companies'>Companies</Link></button>
            </div>
        </>
    )
}
