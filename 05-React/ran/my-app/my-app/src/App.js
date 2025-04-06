import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CompanyPage from './components/CompanyPage';
import NotFound from './components/NotFound';
import company from './data/companyData';

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<CompanyPage company={company} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
