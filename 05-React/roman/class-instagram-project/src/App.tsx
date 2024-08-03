import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import Register from './pages/register/Register';
import ResetPass from './pages/resetPass/ResetPass';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter> 
                <Routes> 
                    <Route path="/" element={<LoginPage/>} /> 
                    <Route path="/register" element={<Register/>} /> 
                    <Route path="/resetpass" element={<ResetPass/>} /> 
                    <Route path='*' element={<></>}  />
                </Routes> 
      </BrowserRouter> 
    </>
  )
}

export default App
