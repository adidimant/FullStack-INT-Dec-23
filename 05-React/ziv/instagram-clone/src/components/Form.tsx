import React from 'react';

type FormProps = {
  children: React.ReactNode;
  onSubmit?: (e: React.FormEvent) => void;
};

const Form: React.FC<FormProps> = ({ children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
