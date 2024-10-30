import { Route, Routes } from "react-router-dom";
import AuthNavbar from "./auth-navbar/AuthNavbar";
import LogIn from "./log-in-page/LogIn";
import SignUp from "./sign-up-page/SignUp";
import ForgotPwd from "./forgot-pwd-page/ForgotPwd";

export default function Auth() {
  return (
    <section id="auth">
      <AuthNavbar />
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-pwd" element={<ForgotPwd />} />
        <Route path="*" element={<div>nothing here</div>} />
      </Routes>
    </section>
  );
}
