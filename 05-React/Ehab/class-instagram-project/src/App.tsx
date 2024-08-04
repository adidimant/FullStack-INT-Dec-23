import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import Register from './pages/register/Register';
import Reset from './pages/reset password/Reset';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter> 
                <Routes> 
                    <Route path="/" element={<LoginPage/>} /> 
                    <Route path="/login" element={<LoginPage/>} /> 
                    <Route path="/register" element={<Register/>} /> 
                    <Route path="/reset-password" element={<Reset/>} /> 
                    <Route path='*' element={<></>}  />
                </Routes> 
      </BrowserRouter> 
    </>
  )
}

export default App
