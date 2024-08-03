import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Register from "./SignUPComponent/Register";
import LoginNavBar from "./components/LoginNavBar";
import LoginForms from "./components/LoginForms";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <LoginNavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginForms />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}




export default App;

