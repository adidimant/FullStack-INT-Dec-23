import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css'

function Layout (){
    return(
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/companies">Companies</Link> </li>
                </ul>
            </nav>
        </div>
    );
}

export default Layout;