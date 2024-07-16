import React from 'react';
import { Link } from 'react-router-dom';


export default function NavBar() {
    return (
        <nav className='navbar'>
            <ul>
                <li>
                    <CustomLink to={'/'}>Home</CustomLink>
                    <CustomLink to={'/companies'}>Companies</CustomLink>
                    <CustomLink to={'/Companiesinfo'}>Companies Info</CustomLink>
                    <CustomLink to={'/ContactUs'}>Contact Us</CustomLink>
                </li>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children }) {
    return (
        <Link to={to}>{children}</Link>
    )
}