import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './pages/auth-pages/login/LoginPage';
import Register from './pages/auth-pages/register/Register';
import ForgotPasswordPage from './pages/auth-pages/forgot-password/ForgotPasswordPage';
import './App.css';
import { useState } from 'react';
import AuthPageNavbar from './pages/auth-pages/components/auth-page-navbar/AuthPageNavbar';
import PostsPage from './pages/logged-in-pages/posts-page/PostsPage';
import Profile from './pages/logged-in-pages/profile/Profile';
import { PostsContext } from './pages/logged-in-pages/PostsContext'; // Import the PostsContext
import { Posts } from './pages/logged-in-pages/posts-page/components/Post-Info/PostInfo';
import SinglePostPage from './pages/logged-in-pages/single-postpage/SinglePostPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [posts, setPosts] = useState<Posts[]>([]); // Manage posts state at the App level

  return (
    <>
      <button style={{ zIndex: 3000, position: 'absolute' }} onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Log {isLoggedIn ? 'Out' : 'In'}!!!!!!
      </button>
      <BrowserRouter>
        {!isLoggedIn ? (
          <>
            <AuthPageNavbar />
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route path="*" element={<></>} />
            </Routes>
          </>
        ) : (
          <PostsContext.Provider value={{ posts, setPosts }}> {/* Provide the posts state and setPosts function to the PostsContext */}
            <Routes>
              <Route path="/posts" element={<PostsPage />} />
              <Route path="/posts/profile" element={<Profile />} />
              <Route path="/posts/post/:postId" element={<SinglePostPage />} />
              <Route path="*" element={<div style={{ marginLeft: '300px' }}>Not supported yet, <Link to={'/posts'}>Posts page</Link></div>} />
            </Routes>
          </PostsContext.Provider>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;