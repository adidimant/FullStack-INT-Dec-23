import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, type = 'button', className }) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
