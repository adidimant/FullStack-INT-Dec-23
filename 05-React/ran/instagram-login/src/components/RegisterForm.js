import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import Link from './Link';
import './RegisterForm.css';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { email, fullName, username, password });
  };

  return (
    <div className="register-form-container">
      <form onSubmit={handleSubmit} className="register-form">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Sign Up</Button>
      </form>

      <div className="register-links">
        <p>
          Have an account? <Link href="/login">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
