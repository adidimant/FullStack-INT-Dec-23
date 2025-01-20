import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GuitarList = ({ guitars = [], fetchGuitars, handleGuitarClick }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();


  const categories = guitars.length > 0 ? ['All', ...new Set(guitars.map(guitar => guitar.categories).flat())] : []; // Include "All" in categories

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === 'All' ? '' : category); // Reset filter if "All" is selected
  };

  const filteredGuitars = selectedCategory
    ? guitars.filter(guitar => guitar.categories.includes(selectedCategory))
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
      <ul>
        {filteredGuitars.map(guitar => (
          <li key={guitar._id} onClick={() => handleGuitarClick(guitar._id)} style={{ cursor: 'pointer' }}>
            <img src={guitar.image} alt={guitar.name} style={{ marginRight: '10px' }} />
            {guitar.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GuitarList;
