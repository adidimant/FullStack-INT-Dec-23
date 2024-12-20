import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './pages/auth-pages/login/LoginPage';
import Register from './pages/auth-pages/register/Register';
import ForgotPasswordPage from './pages/auth-pages/forgot-password/ForgotPasswordPage';
import ThemeProvider from './contexts/theme-context';
import { useState } from 'react';
import AuthPageNavbar from './pages/auth-pages/components/auth-page-navbar/AuthPageNavbar';
import PostsPage from './pages/logged-in-pages/posts-page/PostsPage';
import ModeButton from './components/modeButton/ModeButton';
import CreatePostPage from './pages/logged-in-pages/posts-page/CreatePostPage/CreatePostPage';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <>
      <ThemeProvider>
      <ModeButton  />
        <button style={{ zIndex: 3000, position: 'absolute' }} onClick={() => setIsLoggedIn(!isLoggedIn)}>Log {isLoggedIn ? 'Out' : 'In'}!!!!!!</button>
        <BrowserRouter>
                {!isLoggedIn ? (
                <>
                  <AuthPageNavbar />
                  <Routes>
                      <Route path="/" element={<LoginPage/>} />
                      <Route path="/login" element={<LoginPage/>} />
                      <Route path="/register" element={<Register/>} />
                      <Route path="/posts" element={<></>} />
                      <Route path="/forgot-password" element={<ForgotPasswordPage/>} />
                      <Route path='*' element={<></>}  />
                  </Routes>
                </>)
                : <Routes>
                    <Route path="/posts" element={<PostsPage/>} />
                    <Route path="/CreatePost" element={<CreatePostPage/>} />
                    <Route path='*' element={<div style={{ marginLeft: '300px' }}>Not supported yet, <Link to={'/posts'}>Posts page</Link></div>}  />
                </Routes>
                }

        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
