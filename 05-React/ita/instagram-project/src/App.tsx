import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import Register from './pages/register/Register';
import ForgotPassword from './pages/Password/ForgotPassword';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter> 
                <Routes> 
                    <Route path="/" element={<LoginPage/>} /> 
                    <Route path="/login" element={<LoginPage/>} /> 
                    <Route path="/register" element={<Register/>} /> 
                    <Route path="/ForgotPassword" element={<ForgotPassword/> } /> 
                    <Route path='*' element={<></>}  />
                </Routes> 
      </BrowserRouter> 
    </>
  )
}

export default App
