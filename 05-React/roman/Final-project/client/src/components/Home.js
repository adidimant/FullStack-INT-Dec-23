import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GuitarContext } from '../context/GuitarContext';
import { AuthContext } from '../context/AuthContext';

const Home = () => {
  const { guitars, fetchGuitars } = useContext(GuitarContext);
  const { isAuthenticated } = useContext(AuthContext);
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchGuitars();
  }, [fetchGuitars]);

  const categories = [...new Set(guitars.map(guitar => guitar.categories).flat())]; // Get unique categories

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleAddGuitarClick = () => {
    navigate('/add-edit-guitar'); // Navigate to add guitar form
  };

  const handleGuitarClick = (id) => {
    navigate(`/guitars/${id}`); // Navigate to guitar details page
  };

  const filteredGuitars = selectedCategory
    ? guitars.filter(guitar => guitar.categories.includes(selectedCategory))
    : guitars;

  return (
    <div>
      <h1>Welcome to GuitarHub</h1>
      {isAuthenticated && (
        <button onClick={handleAddGuitarClick}>Add Guitar</button>
      )}
      <div>
        <h2>Categories</h2>
        {categories.map(category => (
          <button key={category} onClick={() => handleCategoryClick(category)}>
            {category}
          </button>
        ))}
      </div>
      <div>
        <h2>Guitar List</h2>
        <ul>
          {filteredGuitars.map(guitar => (
            <li key={guitar._id} onClick={() => handleGuitarClick(guitar._id)} style={{ cursor: 'pointer' }}>
              <img src={guitar.image} alt={guitar.name} style={{ width: '100px', height: '100px', marginRight: '10px' }} />
              {guitar.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
