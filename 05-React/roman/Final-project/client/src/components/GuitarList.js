import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GuitarContext } from '../context/GuitarContext';

const GuitarList = () => {
  const { guitars, fetchGuitars } = useContext(GuitarContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchGuitars();
  }, [fetchGuitars]);

  const handleGuitarClick = (id) => {
    navigate(`/guitars/${id}`);
  };

  return (
    <div>
      <h1>Guitar List</h1>
      <ul>
        {guitars.map((guitar) => (
          <li key={guitar._id} onClick={() => handleGuitarClick(guitar._id)} style={{ cursor: 'pointer' }}>
            <img src={guitar.image} alt={guitar.name}  />
            {guitar.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GuitarList;
