import React from 'react';
import StockGraph from './StockGraph';
import GoogleMap from './GoogleMap';

function CompanyPage({ company }) {
  return (
    <div>
      <h1>{company.name}</h1>
      <h2>Main Employees</h2>
      <ul>
        <li>CEO: {company.ceo}</li>
        <li>CTO: {company.cto}</li>
      </ul>
      <h3>Number of Employees: {company.employees}</h3>
      <h3>Story</h3>
      <p>{company.story}</p>
      
      <h3>Stock Graph</h3>
      <StockGraph symbol="AMZN" />
      
      <h3>Location</h3>
      <GoogleMap location={company.location} />
    </div>
  );
}

export default CompanyPage;
