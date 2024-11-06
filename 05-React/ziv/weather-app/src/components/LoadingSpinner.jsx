
/*components/LoadingSpinner.jsx

Displays a loading spinner animation to enhance user experience during data fetch.
Styled with LoadingSpinner.css for a clean and simple spinner animation.*/

import React from 'react';
import '../styles/LoadingSpinner.css';

const LoadingSpinner = () => (
  <div className="loading-spinner">
    <div className="spinner"></div>
    <p>Loading...</p>
  </div>
);

export default LoadingSpinner;
