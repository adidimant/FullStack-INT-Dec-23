import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import './App.css';
import RegisterPage from './pages/register/RegisterPage';

function App() {
  return (
    <>
      <BrowserRouter> 
                <Routes> 
                    <Route path="/" element={<LoginPage/>} /> 
                    <Route path="/register" element={<RegisterPage/>} /> 
                    <Route path='*' element={<div>404 Not Found</div>}  />
                </Routes> 
      </BrowserRouter> 
    </>
  )
}

export default App
