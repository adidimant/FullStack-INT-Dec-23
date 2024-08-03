import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import Register from './pages/register/Register';
import './App.css';
import ForgetPassword from './pages/forget-password/ForgetPassword';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path='*' element={<></>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
