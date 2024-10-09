
import React from 'react';
import './Home.css';
import NavBar from './NavBar';
import './NavBar.css';
import CompanyLogoOfPageHome from './CompanyLogoOfPageHome';

function Home() {
  return (
    <>
      <NavBar />
      <h1>General information about companies</h1>
      <div className="logos">
        {CompanyLogoOfPageHome.map((logo) => (
          <div key={logo.name} className="logo-item">
            <img src={logo.url} alt={logo.name} className="logo-image" />
            <p>{logo.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;


