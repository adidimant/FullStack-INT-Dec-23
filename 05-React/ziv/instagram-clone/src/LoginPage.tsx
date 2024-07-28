import React from 'react';
import Button from './components/Button';
import Link from './components/Link';
import Form from './components/Form';
import './LoginPage.css'; // We'll create this CSS file next

const LoginPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Instagram</h1>
        <Form onSubmit={handleSubmit}>
          <input type="text" placeholder="Phone number, username, or email" />
          <input type="password" placeholder="Password" />
          <Button type="submit" className="login-button">Log In</Button>
        </Form>
        <div className="separator">OR</div>
        <Button className="login-facebook-button">Log in with Facebook</Button>
        <Link href="#" className="forgot-password-link">Forgot password?</Link>
      </div>
      <div className="signup-container">
        <p>Don't have an account? <Link href="#" className="signup-link">Sign up</Link></p>
      </div>
      <div className="app-links">
        <p>Get the app.</p>
        <div className="app-store-buttons">
          <img src="/path/to/google-play.png" alt="Google Play" />
          <img src="/path/to/app-store.png" alt="App Store" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
