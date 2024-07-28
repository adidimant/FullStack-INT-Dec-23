import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import './App.css'

function App() {
  

  return (
    <>
      <BrowserRouter> 
                <Routes> 
                    <Route path="/" element={<LoginPage/>} /> 
                    <Route path='*' element={<></>}  />
                </Routes> 
      </BrowserRouter>
    </>
  )
}

export default App
