import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/AuthPages/login/LoginPage";
import RegisterPage from "./pages/AuthPages/register/RegisterPage";
import ForgotPasswordPage from "./pages/AuthPages/ForgotPassword/ForgotPasswordPage";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-pwd" element={<ForgotPasswordPage />} />
          <Route path="*" element={<></>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
