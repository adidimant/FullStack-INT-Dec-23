import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../utils/axiosConfig';
import { AuthContext } from '../context/AuthContext';

const GuitarDetails = () => {
  const { id } = useParams();
  const { isAuthenticated, user } = useContext(AuthContext);
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

  const handleDeleteGuitarClick = async () => {
    try {
      const response = await axios.delete(`/guitars/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      navigate('/'); // Redirect to home or another page after successful delete
    } catch (error) {
      console.error('Error deleting guitar:', error);
      alert('Failed to delete guitar');
    }
  };
  

  if (!guitar) return <div>Loading...</div>;



  return (
    <div className='guitar-detail'>
      <div className='text-container'>
        <p>Name: <span>{guitar.name}</span></p>
        <p>Description: <span>{guitar.description}</span></p>
        <p className="categories">Categories: <span>{guitar.categories?.join(', ')}</span></p>
      </div>
      {guitar.image && <img src={guitar.image} alt={guitar.name} />}

      {/* Debugging information */}
      {isAuthenticated && user && guitar.user && (
        <p>Authenticated User ID: {user._id} | Guitar Owner ID: {guitar.user}</p>
      )}

      {/* Show Edit and Delete buttons only if the user is authenticated and owns the guitar */}
      {isAuthenticated && (
        <div>
          <button onClick={handleEditGuitarClick}>Edit Guitar</button>
          <button onClick={handleDeleteGuitarClick} style={{ backgroundColor: 'red', color: 'white' }}>Delete Guitar</button>
        </div>
      )}
    </div>
  );
};

export default GuitarDetails;
