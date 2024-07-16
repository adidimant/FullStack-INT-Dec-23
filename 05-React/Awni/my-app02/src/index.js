import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import './Project01/companies.css';
import './Project01/Home.css';
import './Project01/NavBar.css';
import './Project01/CompanyBox.css';
import './Project01/CompaniesInfo.css';
import './Project01/TradingSchedule.css';
import './Project01/ContactUs.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);


