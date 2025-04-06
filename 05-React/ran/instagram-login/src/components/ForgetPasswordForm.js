import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import Link from './Link';
import './ForgetPasswordForm.css';

const ForgetPasswordForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Password reset request for:', email);
    // כאן אפשר להוסיף את הלוגיקה לאיפוס סיסמה (קריאת API וכו')
  };

  return (
    <div className="forget-password-form-container">
      <h2>Reset Your Password</h2>
      <p>Enter your email address to receive password reset instructions.</p>
      <form onSubmit={handleSubmit} className="forget-password-form">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit">Send Reset Link</Button>
      </form>
      <div className="back-to-login">
        <Link href="/login">Back to Login</Link>
      </div>
    </div>
  );
};

export default ForgetPasswordForm;
