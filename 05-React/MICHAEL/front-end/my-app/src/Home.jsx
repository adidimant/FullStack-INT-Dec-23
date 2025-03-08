import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import './Home.css';
import Wheater from './Wheater';

function Home() {
  const navigate = useNavigate();

  return (
    <div className='father-div'>
      <h1 className='h1Home'>Weather App</h1>
      <div className="planet">
        <div className="satellite"></div>
      </div>
      
      <button className='buttonNav' onClick={() => navigate("/weather")}>Go to Weather Page</button>
      
      <Routes>
        <Route path="/weather" element={<Wheater />} />
      </Routes>

      <p className="ptext">ReactJs project by Michael Ashkenazi - INT fullStack course 2023</p>
    </div>
  );
}

export default Home;