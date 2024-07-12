import { ReactNode } from "react";
import { Link } from 'react-router-dom';
import './Companies.scss'

export default function Companies():ReactNode {
    return(
        <>
            <h1>This is the Companies Page</h1>
            <div className="link-div">
                <button><Link to='/'>Home</Link></button>
                <button><Link to='/About'>About</Link></button>

            </div>
        </>
    )
}
