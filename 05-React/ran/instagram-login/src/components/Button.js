import React from 'react';
import './Button.css'; // ניצור קובץ CSS עבור עיצוב הכפתור

const Button = ({ type = 'button', onClick, children }) => {
  return (
    <button type={type} onClick={onClick} className="custom-button">
      {children}
    </button>
  );
};

export default Button;
