import { memo, ReactNode } from "react";
import InstagramTextLogo from "../../../../assets/instagram-text-logo.png";
import "./AuthForm.css";

interface AuthFormProps {
  className?: string;
  height?: string;
  children?: ReactNode;
}

function AuthForm({ className, children, height }: AuthFormProps) {
  const styleObj = {
    ...(height && { height: height }),
  };
  return (
    <form className={`auth-form ${className || ""}`} style={styleObj}>
      <div className="instagram-text-logo-container">
        <img src={InstagramTextLogo} alt="instagram text logo" />
      </div>
      {children}
    </form>
  );
}

export default memo(AuthForm);
