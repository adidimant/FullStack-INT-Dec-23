import { BrowserRouter, Route, Routes , Link} from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import ForgotPassword from './pages/forgotPassword/ForgotPassword';
import Register from "./pages/register/Register"
import PostsPage from './pages/postPage/PostsPage';
import { useEffect, useState } from 'react';
import ModeButton from './components/modeButton/ModeButton';
import {useThemeContext} from './contexts/theme-context';
import GoToPost from './pages/postPage/component/post/moreinformation/components/GoToPost';
import './App.css';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {theme} = useThemeContext();

  useEffect( ()=>{
    document.body.className = theme;
  },[theme]);

  return (
    <>
        <button style={{ zIndex: 3000, position: 'absolute' }} onClick={() => setIsLoggedIn(!isLoggedIn)}>Log {isLoggedIn? 'Out' : 'In'}!!</button>
        <div className='modeButton'><ModeButton/></div>
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
                 <Route path="/GoToPost" element={<GoToPost/>}/>
                 <Route path='*' element={<div style={{ marginLeft: '300px' }}>Not supported yet, <Link to={'/posts'}>Posts page</Link></div>}  />
            </Routes>
          }
        </BrowserRouter>
    </>
  )
}

export default App;
