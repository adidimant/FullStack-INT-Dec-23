import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import { AuthContext } from '../context/AuthContext';

const NavBar = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">Home</Link>
      {isAuthenticated ? (
        <>
          <Link to="/profile">Profile</Link>
          <Logout />
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
};

export default NavBar;
