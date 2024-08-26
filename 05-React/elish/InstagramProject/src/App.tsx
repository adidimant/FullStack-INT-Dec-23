import { BrowserRouter, Route, Routes , Link} from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import ForgotPassword from './pages/forgotPassword/ForgotPassword';
import Register from "./pages/register/Register"
import PostsPage from './pages/postPage/PostsPage';
import { useState } from 'react';
import {useTheme} from './ThemeContext';
//import NightlightIcon from '@mui/icons-material/Nightlight';
//import LightModeIcon from '@mui/icons-material/LightMode';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { theme, ToggleTheme } = useTheme();

  return (
    <>
        <button style={{ zIndex: 3000, position: 'absolute' }} onClick={() => setIsLoggedIn(!isLoggedIn)}>Log {isLoggedIn? 'Out' : 'In'}!!</button>
        <button style={{ marginLeft:100} } onClick={ToggleTheme}>Mode</button>
        <BrowserRouter>
          {!isLoggedIn ? (
              <Routes>
                  <Route path='/' element={<LoginPage/>}/>
                  <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
                  <Route path='/Register' element={<Register/>}/>
                  <Route path="/posts" element={<></>} />
                  <Route path='*' element={<></>}/>
              </Routes>
          )
          : <Routes>
                 <Route path="/posts" element={<PostsPage/>} /> 
                 <Route path='*' element={<div style={{ marginLeft: '300px' }}>Not supported yet, <Link to={'/posts'}>Posts page</Link></div>}  />
            </Routes>
          }
        </BrowserRouter>
    </>
  )
}

export default App;
