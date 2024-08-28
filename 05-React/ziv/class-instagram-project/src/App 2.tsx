import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/login/RegisterPage';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter> 
                <Routes> 
                    <Route path="/" element={<LoginPage/>} /> 
                    <Route path="/register" element={<RegisterPage/>} /> 
                    <Route path='*' element={<></>}  />
                </Routes> 
      </BrowserRouter> 
    </>
  )
}

export default App


