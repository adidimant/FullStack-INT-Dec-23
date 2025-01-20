import React, { createContext, useState, useCallback } from 'react';
import axios from '../utils/axiosConfig';

const GuitarContext = createContext();

const GuitarProvider = ({ children }) => {
  const [guitars, setGuitars] = useState([]);

  const fetchGuitars = useCallback(async () => {
    try {
      const response = await axios.get('/guitars');
      setGuitars(response.data);
    } catch (error) {
      console.error("Error fetching guitars:", error);
    }
  }, []);

  const addGuitar = useCallback(async (guitar) => {
    try {
      const token = localStorage.getItem('token'); // Replace with your token retrieval method
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const response = await axios.post('/guitars', guitar, config);
      setGuitars((prevGuitars) => [...prevGuitars, response.data]);
    } catch (error) {
      console.error("Error adding guitar:", error);
    }
  }, []);
  

  const updateGuitar = useCallback(async (updatedGuitar) => {
    try {
      await axios.put(`/guitars/${updatedGuitar.id}`, updatedGuitar);
      setGuitars((prevGuitars) =>
        prevGuitars.map((guitar) =>
          guitar.id === updatedGuitar.id ? updatedGuitar : guitar
        )
      );
    } catch (error) {
      console.error("Error updating guitar:", error);
    }
  }, []);

  return (
    <GuitarContext.Provider value={{ guitars, fetchGuitars, addGuitar, updateGuitar }}>
      {children}
    </GuitarContext.Provider>
  );
};

export { GuitarContext, GuitarProvider };
