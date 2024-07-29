import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import SignUp from './pages/SignUp/SignUp';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage/>} />
                    <Route path="/signup" element={<SignUp/>} />
                    <Route path='*' element={<></>}  />
                </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
