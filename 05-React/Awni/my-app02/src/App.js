import Companies from './Project01/companies';
import React from 'react';
import Home from './Project01/Home';
import NavBar from './Project01/NavBar';
import CompaniesInfo from './Project01/CompaniesInfo';
import ContactUs from './Project01/ContactUs';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <NavBar/>
      <div className='container-app'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/CompaniesInfo" element={<CompaniesInfo />} />
            <Route path="/ContactUs" element={<ContactUs/>} />
          </Routes>
      </div>
    </>
  );
}

export default App;
