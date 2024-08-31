import { memo, useMemo } from "react";
import { Link } from "react-router-dom";
import AuthForm from "../../components/auth-form/AuthForm";
import FormInput from "../../components/form-input/FormInput";
import Button from "../../../../components/button/Button";
import FormSeperator from "../../components/form-separator/FormSeperator";
import { useThemeContext } from "../../../../contexts/theme-context";
import "./ForgotPasswordForm.css";
import '../../../../contexts/theme-style.css'

function ForgtoPasswordForm() {
  const { theme } = useThemeContext();
	const isDark = useMemo(() => theme === 'dark', [theme]);
  
  const inputStyle = useMemo(()=>{
    return ({
      backgroundColor: isDark ? '#000000':'#ffffff',
      color: isDark ? '#ffffff':'#000000'
    })
  },[isDark])
  return (
    <AuthForm className={isDark ? 'forgot-pwd-form dark' : 'forgot-pwd-form light'} height="535px">
      <div className={isDark ? 'header dark' : 'header light'}>Trouble loggin in?</div>
      <div className={isDark ? 'description dark' : 'description light'}>
        Enter your email, phone, or username and we'll send you a link to get back into your
        account.
      </div>
      <FormInput
        type="text"
        name="emailOrPhoneOrUsername"
        htmlFor="emailOrPhoneOrUsername"
        id="emailOrPhoneOrUsername"
        text="Email, Phone, or Username"
      />
      <Button
        name="submit-login-link"
        className= {isDark ? 'submit-login-link-btn dark' : 'submit-login-link-btn light'}
        width="100%"
        text="Send login link"
        onClick={() => {}}
      />
      <Link to="/forgot-pwd" className={isDark ? 'cant-reset-pwd-link dark' : 'cant-reset-pwd-link light'} style={inputStyle}>
        Can't reset your password?
      </Link>
      <FormSeperator />
      <Link to="/register" className="create-new-account-link" style={inputStyle}>
        Create new account
      </Link>
      <Link to="/" className= {'back-to-login-link'} style={inputStyle} >
        Back to login
      </Link>
    </AuthForm>
  );
}

export default memo(ForgtoPasswordForm);
