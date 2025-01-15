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

  return (
    <GuitarContext.Provider value={{ guitars, fetchGuitars }}>
      {children}
    </GuitarContext.Provider>
  );
};

export { GuitarContext, GuitarProvider };
