import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import Link from './Link';
import { ThemeContext } from '../ThemeContext';
import './LoginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { state } = useContext(ThemeContext);
  const isDarkMode = state.isDarkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { username, password });
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit} className="login-form">
        <Input
          type="text"
          placeholder="Phone number, username, or email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Log In</Button>
      </form>

      <div className="login-links">
        <Link href="#">Forgot password?</Link>
      </div>

      <div className="separator">OR</div>

      <Button onClick={() => console.log('Log in with Facebook')}>
        Log in with Facebook
      </Button>
    </div>
  );
};

export default LoginForm;
