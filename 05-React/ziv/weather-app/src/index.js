/* index.js

Entry point that renders the App component wrapped with WeatherProvider to provide context to the app.*/

import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the new client API
import App from './App';
import { WeatherProvider } from './context/WeatherContext';
import './styles/App.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot
root.render(
  <WeatherProvider>
    <App />
  </WeatherProvider>
);
