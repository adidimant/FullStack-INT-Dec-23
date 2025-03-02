import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GuitarContext } from '../context/GuitarContext';
import { AuthContext } from '../context/AuthContext';

const GuitarList = () => {
  const { guitars = [], fetchGuitars } = useContext(GuitarContext);
  const { isAuthenticated } = useContext(AuthContext);
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (guitars.length === 0 && fetchGuitars) {
      fetchGuitars();
    }
  }, [guitars, fetchGuitars]);

  const categories = ['All', ...new Set(guitars.flatMap(guitar => guitar.categories || []))];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === 'All' ? '' : category);
  };

  const handleAddGuitarClick = () => {
    navigate('/add-edit-guitar'); 
  };

  const handleGuitarClick = (id) => {
    navigate(`/guitars/${id}`);
  };

  const filteredGuitars = selectedCategory
    ? guitars.filter(guitar => (guitar.categories || []).includes(selectedCategory))
    : guitars;

  return (
    <div className='guitar-list'>
      <h2>Categories</h2>
      {categories.map(category => (
        <button key={category} onClick={() => handleCategoryClick(category)}>
          {category}
        </button>
      ))}

      <h2>Guitars</h2>
      {isAuthenticated && (
        <button onClick={handleAddGuitarClick}>Add New Guitar</button> 
      )}

      <ul>
        {filteredGuitars.length > 0 ? (
          filteredGuitars.map(guitar => (
            <li key={guitar._id} onClick={() => handleGuitarClick(guitar._id)} style={{ cursor: 'pointer' }}>
              <img src={guitar.image} alt={guitar.name} style={{ marginRight: '10px' }} />
              {guitar.name}
            </li>
          ))
        ) : (
          <p>No guitars available</p>
        )}
      </ul>
    </div>
  );
};

export default GuitarList;
