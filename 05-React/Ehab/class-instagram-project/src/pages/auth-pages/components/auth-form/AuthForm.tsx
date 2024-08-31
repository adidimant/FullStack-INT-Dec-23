import { memo, ReactNode, useMemo } from "react";
import InstagramTextLogo from "../../../../assets/instagram-text-logo.png";
import { useThemeContext } from "../../../../contexts/theme-context";
import "./AuthForm.css";
import '../../../../contexts/theme-style.css'


interface AuthFormProps {
  className?: string;
  height?: string;
  children?: ReactNode;
}

function AuthForm({ className, children, height }: AuthFormProps) {
  const { theme } = useThemeContext();
	const isDark = useMemo(() => theme === 'dark', [theme]);
  const styleObj = {
    ...(height && { height: height }),
  };
  return (
    //<form className={`auth-form ${className || ""}`} style={styleObj}>
    <form className={isDark ? `auth-form ${className || ""} dark` : `auth-form ${className || ""} light`} style={styleObj}>
      <div className= {isDark ? 'instagram-text-logo-container dark' : 'instagram-text-logo-container light'}>
        <img src={InstagramTextLogo} alt="instagram text logo" />
      </div>
      {children}
    </form>
  );
}

export default memo(AuthForm);
