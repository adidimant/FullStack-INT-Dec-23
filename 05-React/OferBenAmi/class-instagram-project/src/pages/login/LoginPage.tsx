import { ReactNode, memo } from "react";
import LoginMain from "./components/LoginMain";
import Footer from "../generalComponents/Footer/Footer";
import Navbar from "../generalComponents/NavBar/Navbar";
import './LoginPage.css';

function LoginPage(): ReactNode {

  return (
    <div className="login-page-container">
      <Navbar />
      <LoginMain />
      <Footer />
    </div>
  );
}

export default memo(LoginPage);
