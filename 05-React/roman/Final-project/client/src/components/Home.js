import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GuitarContext } from '../context/GuitarContext';
import { AuthContext } from '../context/AuthContext';
import GuitarList from './GuitarList';

const Home = () => {
  const { guitars, fetchGuitars } = useContext(GuitarContext);
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchGuitars();
  }, [fetchGuitars]);

  const handleAddGuitarClick = () => {
    navigate('/add-edit-guitar'); // Navigate to add guitar form
  };

  const handleGuitarClick = (id) => {
    navigate(`/guitars/${id}`); // Navigate to guitar details page
  };

  return (
    <div className='main'>
      <h1>Welcome to GuitarHub</h1>
      {isAuthenticated && (
        <button onClick={handleAddGuitarClick}>Add Guitar</button>
      )}
      <GuitarList guitars={guitars} handleGuitarClick={handleGuitarClick} />
    </div>
  );
};

export default Home;
