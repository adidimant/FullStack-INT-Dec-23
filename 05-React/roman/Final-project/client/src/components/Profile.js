import React, { useState, useEffect } from 'react';
import axios from '../utils/axiosConfig';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('/profile', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchUserProfile();
  }, []);

  if (!user) return <div>Loading...</div>;

  const handleUpdateProfile = async (updatedData) => {
    try {
      const response = await axios.put('/profile', updatedData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setUser(response.data);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className='profile'>
      <h1>Profile</h1>
      <p>Name: <span>{user.name}</span></p>
      <p>Email: <span>{user.email}</span></p>

    </div>
  );
};

export default Profile;
