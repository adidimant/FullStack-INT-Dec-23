import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './pages/auth-pages/login/LoginPage';
import Register from './pages/auth-pages/register/Register';
import ForgotPasswordPage from './pages/auth-pages/forgot-password/ForgotPasswordPage';
import ThemeProvider from './contexts/theme-context';
import AuthPageNavbar from './pages/auth-pages/components/auth-page-navbar/AuthPageNavbar';
import PostsPage from './pages/logged-in-pages/posts-page/PostsPage';
import ModeButton from './components/modeButton/ModeButton';
import { useUserContext } from './contexts/User-Context';
import './App.css';
import AuthProvider from './contexts/Auth-Context';
import { useEffect, useState } from 'react';


function App() {
  const { userData } = useUserContext();

  const [isLoggedIn, setIsLoggedIn] = useState(window.localStorage.getItem('isLoggedIn') == 'true');
  useEffect(() => {
    setIsLoggedIn(window.localStorage.getItem('isLoggedIn') == 'true');
  }, [userData.isLoggedIn]);
  
  return (
    <>
      <AuthProvider>
        <ThemeProvider>
        <ModeButton  />
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
                        <Route path="/" element={<PostsPage/>} /> 
                        <Route path="/posts" element={<PostsPage/>} /> 
                        <Route path='*' element={<div style={{ marginLeft: '300px' }}>Not supported yet, <Link to={'/posts'}>Posts page</Link></div>}  />
                  </Routes>
                  }
                    
          </BrowserRouter> 
        </ThemeProvider>
      </AuthProvider>
    </>
  )
}

export default App
