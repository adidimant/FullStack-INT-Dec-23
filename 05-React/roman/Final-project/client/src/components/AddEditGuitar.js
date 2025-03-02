import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../utils/axiosConfig';

const AddEditGuitar = () => {
  const [guitar, setGuitar] = useState({
    name: '',
    description: '',
    categories: [],
    image: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { id } = useParams(); // To detect if it's an edit (based on the id param)

  useEffect(() => {
    if (id) {
      // Fetch existing guitar details for editing
      const fetchGuitar = async () => {
        try {
          const response = await axios.get(`/guitars/${id}`);
          setGuitar(response.data); // Populate form with guitar data
        } catch (error) {
          console.error('Error fetching guitar details:', error);
          setError('Failed to load guitar details');
        }
      };
      fetchGuitar();
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGuitar((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setGuitar((prevState) => ({
      ...prevState,
      categories: value ? [value] : [], // Set selected category (only one category is allowed)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        // Editing existing guitar
        await axios.put(`/guitars/${id}`, guitar, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
      } else {
        // Adding new guitar
        await axios.post('/guitars', guitar, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
      }
      navigate('/'); // Redirect to home after successful submit
    } catch (error) {
      console.error('Error saving guitar:', error);
      setError('Failed to save guitar');
    }
  };

  return (
    <div className="add-edit-guitar">
      <h2>{id ? 'Edit Guitar' : 'Add New Guitar'}</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={guitar.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={guitar.description}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="categories">Category:</label>
          <select
            id="categories"
            name="categories"
            value={guitar.categories[0] || ''}
            onChange={handleCategoryChange}
            required
          >
            <option value="">Select Category</option>
            <option value="Electric">Electric</option>
            <option value="Bass">Bass</option>
            <option value="Classical">Classical</option>
            <option value="Acoustic">Acoustic</option>
          </select>
        </div>

        <div>
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={guitar.image}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">{id ? 'Update Guitar' : 'Add Guitar'}</button>
      </form>
    </div>
  );
};

export default AddEditGuitar;
