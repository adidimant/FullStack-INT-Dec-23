import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';       // Make sure it matches exactly: './Home'
import Weather from './Wheater';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for Home */}
        <Route path="/" element={<Home />} />

        {/* Route for Weather */}
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
