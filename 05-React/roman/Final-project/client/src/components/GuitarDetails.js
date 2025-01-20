import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../utils/axiosConfig';
import { AuthContext } from '../context/AuthContext';


const GuitarDetails = () => {
  const { id } = useParams();
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const [guitar, setGuitar] = useState(null);

  useEffect(() => {
    const fetchGuitarDetails = async () => {
      try {
        const response = await axios.get(`/guitars/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setGuitar(response.data);
      } catch (error) {
        console.error("Error fetching guitar details:", error);
        alert("Failed to fetch guitar details. Please try again.");
      }
    };

    fetchGuitarDetails();
  }, [id]);

  const handleEditGuitarClick = () => {
    navigate(`/edit-guitar/${id}`);
  };

  if (!guitar) return <div>Loading...</div>;

  return (
    <div className='guitar-detail'>
      <div className='text-container'>
        <p>Name: <span>{guitar.name}</span></p>
        <p>Description: <span>{guitar.description}</span></p>
        <p className="categories">Categories: <span>{guitar.categories.join(', ')}</span></p>
        {/* {isAuthenticated && (
          <button onClick={handleEditGuitarClick}>Edit Guitar</button>
        )} */}
      </div>
      {guitar.image && <img src={guitar.image} alt={guitar.name} />}
    </div>
  );
};

export default GuitarDetails;
