import React, { memo } from "react";
import { useUserContext } from "../contexts/islogin-context/IsLogin";
import { Posts } from "../pages/logged-in-pages/posts-page/components/Post-Info/PostInfo";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import AuthPageNavbar from "../pages/auth-pages/components/auth-page-navbar/AuthPageNavbar";
import LoginPage from "../pages/auth-pages/login/LoginPage";
import Register from '../pages/auth-pages/register/Register';
import ForgotPasswordPage from "../pages/auth-pages/forgot-password/ForgotPasswordPage";
import { PostsContext } from "../pages/logged-in-pages/PostsContext";
import PostsPage from "../pages/logged-in-pages/posts-page/PostsPage";
import Profile from "../pages/logged-in-pages/profile/Profile";
import SinglePostPage from "../pages/logged-in-pages/single-postpage/SinglePostPage";
import LoginBtn from "./LoginBtn";

function MainAppContent() {
    const { isLoggedIn } = useUserContext(); // Get the login state from context
    const [posts, setPosts] = React.useState<Posts[]>([]);



    return (
        <>
            <LoginBtn />
            <BrowserRouter>
                {!isLoggedIn ? (
                    <>
                        <AuthPageNavbar />
                        <Routes>
                            <Route path="/" element={<LoginPage />} />
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                            <Route path="*" element={<Navigate to="/" />} />
                        </Routes>
                    </>
                ) : (
                    <PostsContext.Provider value={{ posts, setPosts }}>
                        <Routes>
                            <Route path="/posts" element={<PostsPage />} />
                            <Route path="/posts/profile" element={<Profile />} />
                            <Route path="/posts/post/:postId" element={<SinglePostPage />} />
                            <Route path="*" element={<div style={{ marginLeft: '300px', height: '50px' }}>Not supported yet, <Link to={'/posts'}>Posts page</Link></div>} />
                        </Routes>
                    </PostsContext.Provider>
                )}
            </BrowserRouter>
        </>
    );
}

export default memo(MainAppContent);