import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../utils/axiosConfig';

const GuitarDetails = () => {
  const { id } = useParams();
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

  if (!guitar) return <div>Loading...</div>;

  return (
    <div>
      <h1>{guitar.name}</h1>
      <p>{guitar.description}</p>
      <p>Categories: {guitar.categories.join(', ')}</p>
      {guitar.image && <img src={guitar.image} alt={guitar.name} />}
    </div>
  );
};

export default GuitarDetails;
