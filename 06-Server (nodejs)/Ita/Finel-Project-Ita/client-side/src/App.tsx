
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SideBar from './Pages/SideBar/SideBar'
import Home from './Pages/Home/Home'
import ThemeProvider from './context/theme-context'
import NewInvoice from './Pages/NewInvoice/NewInvoice';
import LoginPage from './Pages/Login/Login';
import { useState } from 'react'
import Register from './Pages/Register/Register'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <ThemeProvider>
      <button style={{ zIndex: 3000, position: 'absolute' }} onClick={() => setIsLoggedIn(!isLoggedIn)}>Log {isLoggedIn ? 'Out' : 'In'}!!!!!!</button>
      <BrowserRouter>
            {!isLoggedIn ? (
              <>
              <Routes> 
              <Route path="/" element={<LoginPage/>} /> 
              <Route path="/login" element={<LoginPage/>} /> 
              <Route path="/register" element={<Register/>} /> 
              {/* <Route path="/forgot-password" element={<ForgotPasswordPage/>} />  */}
              <Route path='*' element={<></>}  />
            </Routes>
              </> )
              : <div className="app-container">
              <SideBar />
              <div className="main-content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/new-invoice" element={<NewInvoice />} />
                </Routes>
              </div>
              
            </div>}
          
      </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
