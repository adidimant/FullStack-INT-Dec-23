
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SideBar from './Pages/SideBar/SideBar'
import Home from './Pages/Home/Home'
import ThemeProvider from './context/theme-context'
import NewInvoice from './Pages/NewInvoice/NewInvoice';
import LoginPage from './Pages/Login/Login';
import Register from './Pages/Register/Register'
import { useUserContext } from './context/User-Context'
import AuthProvider from './context/Auth-context'
import UpdateDetails from './Pages/UpdateDetails/UpdateDetails'
import IncomeData from './Pages/IncomeData/IncomeData'
import ExpenseData from './Pages/ExpenseData/ExpenseData'
import { useEffect, useState } from 'react'
import ForgotPasswordPage from './Pages/ForgotPasswordPage/ForgotPasswordPage'


function App() {
  const { userData } = useUserContext()

  const [isLoggedIn, setIsLoggedIn] = useState(window.localStorage.getItem('isLoggedIn') == 'true');
  useEffect(() => {
    setIsLoggedIn(window.localStorage.getItem('isLoggedIn') == 'true');
  }, [userData.isLoggedIn]);

  return (
    <>
    <AuthProvider>
      <ThemeProvider>
      <BrowserRouter>
            {!isLoggedIn ? (
              <>
              <Routes> 
              <Route path="/" element={<LoginPage/>} /> 
              <Route path="/login" element={<LoginPage/>} /> 
              <Route path="/register" element={<Register/>} /> 
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route path='*' element={<></>}  />
            </Routes>
              </> )
              : <div className="app-container">
              <SideBar />
              <div className="main-content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/new-invoice" element={<NewInvoice />} />
                  <Route path="/update-details" element={<UpdateDetails />} />
                  <Route path="/Income-data" element={<IncomeData />} />
                  <Route path="/Expense-data" element={<ExpenseData />} />
                </Routes>
              </div>
              
            </div>}
          
      </BrowserRouter>
      </ThemeProvider>
      </AuthProvider>
    </>
  )
}

export default App
