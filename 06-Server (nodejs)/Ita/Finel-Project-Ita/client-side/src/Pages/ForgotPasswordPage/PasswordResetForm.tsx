import React, { useState, memo, useCallback } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import Box from '../../components/Box/Box';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { validatePassword } from '../../utils';
import '../Register/RegistrationForm/RegistrationForm.css'

const axiosUser = axios.create({
  baseURL: 'http://localhost:3001/api/users',
  timeout: 5000,
});

function PasswordResetForm() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleEmailSubmit = useCallback(async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axiosUser.post('/check-email', { email });
      if (response.status === 200) {
        setStep(2);
      }
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.data) { //בדיקה האם השגיאה היא מאקסיוס, מחזיר true. + אם אובייקט השגיאה מכיל מידע. זאת שגיאה מותאמת אישית
        setError(err.response.data.error);
      } else {
        setError('בדיקת הדוא״ל נכשלה');
      }
    } finally {
      setLoading(false);
    }
  }, [email]);

  const handleCodeVerification = useCallback(async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (code.length !== 6) {
      setError('יש להזין קוד בן 6 ספרות');
      setLoading(false);
      return;
    }

    try {
      await axiosUser.post('/verify-code', { email, code });
      setStep(3);
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.data) {
        setError(err.response.data.error);
      } else {
        setError('אימות הקוד נכשל');
      }
    } finally {
      setLoading(false);
    }
  }, [email, code]);

  const handlePasswordReset = useCallback(async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!validatePassword(password)) {
      setError('הסיסמה חייבת להכיל לפחות 5 תווים, אות גדולה, אות קטנה, מספר ותו מיוחד');
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError('הסיסמאות אינן תואמות');
      setLoading(false);
      return;
    }

    try {
      const response = await axiosUser.post('/reset-password', { email, password });
      if (response.status === 200) {
        setSuccess(true);
        setTimeout(() => navigate('/login'), 3000);
      }
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.data) {
        setError(err.response.data.error);
      } else {
        setError('שחזור הסיסמה נכשל');
      }
    } finally {
      setLoading(false);
    }
  }, [email, password, confirmPassword, navigate]);

  return (
    <Box className="password-reset-box">
      <div className="form-title">
        {step === 1 ? 'שחזור סיסמה' : step === 2 ? 'אימות קוד' : 'הגדרת סיסמה חדשה'}
      </div>

      {error && <Alert severity="error"><span>{error}</span></Alert>}

      {success ? (
        <Alert severity="success">
          <p>הסיסמה שוחזרה בהצלחה!</p>
          <p>מועבר לדף ההתחברות...</p>
        </Alert>
      ) : (
        <>
          {step === 1 && (
            <form onSubmit={handleEmailSubmit}>
              <Input
                type="email"
                id="email"
                title="דוא״ל"
                placeholder="הזן את כתובת הדוא״ל שלך"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isRequired
                disabled={loading}
              />
              <Button
                name="sendCode"
                text={loading ? <CircularProgress size="20px" color="inherit" /> : 'בדוק דוא״ל'}
                onClick={handleEmailSubmit}
                className="bthReg"
                disabled={loading}
              />
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleCodeVerification}>
              <Input
                type="text"
                id="code"
                title="קוד אימות"
                placeholder="הזן קוד בן 6 ספרות"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                isRequired
                disabled={loading}
              />
              <Button
                name="verifyCode"
                text={loading ? <CircularProgress size="20px" color="inherit" /> : 'אמת קוד'}
                onClick={handleCodeVerification}
                className="bthReg"
                disabled={loading}
              />
            </form>
          )}

          {step === 3 && (
            <form onSubmit={handlePasswordReset}>
              <Input
                type="password"
                id="password"
                title="סיסמה חדשה"
                placeholder="צור סיסמה חדשה"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isRequired
                disabled={loading}
              />
              <Input
                type="password"
                id="confirmPassword"
                title="אישור סיסמה"
                placeholder="אשר את הסיסמה החדשה"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                isRequired
                disabled={loading}
              />
              <Button
                name="passwordRenewal"
                text={loading ? <CircularProgress size="20px" color="inherit" /> : 'שחזר סיסמה'}
                onClick={handlePasswordReset}
                className="bthReg"
                disabled={loading}
              />
            </form>
          )}
        </>
      )}
    </Box>
  );
};

export default memo(PasswordResetForm);
