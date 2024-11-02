import LogInForm from "./components/login-form/LogInForm";
import PhoneCarousel from "./components/phone-carousel/PhoneCarousel";
import "./logIn.css";

export default function LogIn() {
  return (
    <>
      <section id="login-section">
        <div className="login-left-container">
          <PhoneCarousel />
        </div>
        <div className="login-right-container">
          <LogInForm />
        </div>
      </section>
    </>
  );
}
