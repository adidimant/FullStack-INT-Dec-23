import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './pages/auth-pages/login/LoginPage';
import Register from './pages/auth-pages/register/Register';
import ForgotPasswordPage from './pages/auth-pages/forgot-password/ForgotPasswordPage';
import './App.css';
import AuthPageNavbar from './pages/auth-pages/components/auth-page-navbar/AuthPageNavbar';
import Posts from '../src/pages/posts/Posts';

function App() {
  
  return (
    <>
      <BrowserRouter> 
              <>
                
                <Routes> 
                    <Route path="/" element={<LoginPage/>} /> 
                    <Route path="/login" element={<LoginPage/>} /> 
                    <Route path="/register" element={<Register/>} />  
                    <Route path="/forgot-password" element={<ForgotPasswordPage/>} />
                    <Route path='*' element={<></>}  />
                </Routes>
              </>
              <Routes> 
                  <Route path="/posts" element={<Posts/>} />
                  <Route path='*' element={<div style={{ marginLeft: '300px' }}>Not supported yet, <Link to={'/posts'}>Posts page</Link></div>}  />
              </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App
