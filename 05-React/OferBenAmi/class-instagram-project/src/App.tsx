import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './pages/auth-pages/login/LoginPage';
import Register from './pages/auth-pages/register/Register';
import ForgotPasswordPage from './pages/auth-pages/forgot-password/ForgotPasswordPage';
import { useState } from 'react';
import AuthPageNavbar from './pages/auth-pages/components/auth-page-navbar/AuthPageNavbar';
import Posts from './pages/post-auth-pages/posts/Posts';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
    <button style={{ zIndex: 3000, position: 'absolute' }} onClick={() => setIsLoggedIn(!isLoggedIn)}>Log in!!!!!!</button>
      <BrowserRouter>
              {!isLoggedIn ? (
              <>
                <AuthPageNavbar />
                <Routes>
                    <Route path="/" element={<LoginPage/>} />
                    <Route path="/login" element={<LoginPage/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/posts" element={<div style={{ marginLeft: '300px' }}>Logged out!</div>} />
                    <Route path="/forgot-password" element={<ForgotPasswordPage/>} />
                    <Route path='*' element={<></>}  />
                </Routes>
              </>)
              : <Routes>
                  <Route path="/posts" element={<Posts />} />
                  <Route path='*' element={<div style={{ marginLeft: '300px' }}>Not supported yet, <Link to={'/posts'}>Posts page</Link></div>}  />
              </Routes>
              }

      </BrowserRouter>
    </>
  )
}

export default App
