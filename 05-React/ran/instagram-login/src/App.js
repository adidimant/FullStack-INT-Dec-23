import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import ForgetPasswordForm from './components/ForgetPasswordForm';
import PostsPage from './components/PostsPage';
import PostPage from './components/PostPage';
import { ThemeProvider } from './ThemeContext';
import { UserProvider } from './UserContext';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function Home() {
  return (
    <div>
      <h1>Welcome to Instagram</h1>
      <p><Link to="/register">Sign Up</Link> or <Link to="/login">Log In</Link></p>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Router>
          <div className="App">
            <header className="App-header">
              <h1>Instagram</h1>
            </header>
            <ThemeToggle />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/forget-password" element={<ForgetPasswordForm />} />
              <Route path="/posts" element={<PostsPage />} />
              <Route path="/posts/:id" element={<PostPage />} />
            </Routes>
          </div>
        </Router>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
