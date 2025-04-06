import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Home = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>Welcome {user.isLoggedIn ? `${user.firstName} ${user.lastName}` : 'Guest'}</h1>
      <p>{user.isLoggedIn ? `Email: ${user.email}` : 'Please log in.'}</p>
    </div>
  );
};

export default Home;
