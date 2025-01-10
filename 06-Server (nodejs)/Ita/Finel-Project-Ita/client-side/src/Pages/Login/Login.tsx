import { memo, useState } from "react";
import "./Login.css";
import Box from "../../components/Box/Box";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { parseJwt, validateEmail } from "../../utils";
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import { useUserContext } from "../../context/User-Context";
import { axiosClient } from "../../axiosClient";
import logo1 from '../../assets/logo1.png'

const validateLoginIdentityField = (value: unknown): boolean => {
    if (!value) {
      return false;
    } 
    return true;
}

function LoginPage() {
    const { dispatch: dispatchUserData } = useUserContext();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault(); // Prevent form default submission
      setLoading(true);
      setError('');
  
      const email = (document.getElementById('email') as HTMLInputElement)?.value.trim();
      const password = (document.getElementById('password') as HTMLInputElement)?.value.trim();
  
      if (!validateLoginIdentityField(email) || !validateEmail(email)) {
          setError('האמייל אינו חוקי!');
          setLoading(false); 
          return;
      }
  
      try {
          const response = await axiosClient.post('/api/users/login', {
              email,
              password,
          });
  
          const accessToken = response?.data?.accessToken;
          if (accessToken) {
              const refreshToken = response.data.refreshToken;
              window.localStorage.setItem('accessToken', accessToken);
              window.localStorage.setItem('refreshToken', refreshToken);
              window.localStorage.setItem('isLoggedIn', 'true');
              const userPayload = parseJwt(accessToken);
  
              const userData = {
                  isLoggedIn: true,
                  email: userPayload.email,
                  fullName: userPayload.fullname,
                  userId: userPayload.userId,
                  companyName: userPayload.companyName,
                  devices: userPayload.devices || [],
              };
  
              dispatchUserData?.(userData);
              setSuccess(true);
              navigate('/'); 
          }
      } catch (err: unknown) {
          setError(`אירעה שגיאה: ${(err as AxiosError).response?.data}`);
      } finally {
          setLoading(false); 
      }
  };
  


    return (
        <>
        <div className="login-page-container">
            <div className="right">
                <form>
                    <Box className="login-box">
                        <div className="title-login-form">שלום לך! שנתחבר?
                                {error && (
                                    <Alert severity="error">
                                        <span>{error}</span>
                                    </Alert>
                                )}
                                {success && (
                                    <Alert severity="success">
                                        <p>התחברת בהצלחה!</p>
                                    </Alert>
                                )}
                        </div>
                        <div><Input type="email" id="email" placeholder="הקלידו את כתובת האימייל" width="400px"/></div>
                        <div><Input type="password" id="password" placeholder="סיסמה" width="400px"/></div>
                        <div><Link to={'/forgot-password'} className="forget-password">הסיסמה נשכחה?</Link></div>
                        <div><Button name="כניסה"
                                text={loading ? <CircularProgress size="20px" color="inherit"/> : 'כניסה'}
                                onClick={handleLogin} 
                                className="bthLogin"/></div>
                        <div className="register-text-link">עדין לא הצטרפת?<Link to={"/register"} className="forget-password">להצטרפות</Link></div>
                    </Box>
                </form>  
            </div>
            <div className="left">
                <div><img src={logo1}/></div>
            </div>

        </div>
        </>
    )
}

export default memo(LoginPage)