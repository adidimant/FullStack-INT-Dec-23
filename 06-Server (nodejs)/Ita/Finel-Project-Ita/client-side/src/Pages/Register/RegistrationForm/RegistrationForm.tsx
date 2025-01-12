import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import Box from '../../../components/Box/Box';
import { useNavigate } from 'react-router-dom';
import "./RegistrationForm.css";
import { validateEmail, validatePassword } from '../../../utils';

const axiosUser = axios.create({
  baseURL: 'http://localhost:3001/api/users',
  timeout: 5000,
});

interface ServerError {
  error: string;
}

const TIMER_DURATION = 300; 

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [CompanyName, setCompanyName] = useState('');
  const [CompanyNumber, setCompanyNumber] = useState('');
  const [Address, setAddress] = useState('');
  const [City, setCity] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [canResend, setCanResend] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setCanResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [timeLeft]);


  const validateFields = useCallback((): string | null => {
    if (!validateEmail(email)) return 'כתובת דוא״ל לא תקינה';
    if (!validatePassword(password)) return 'הסיסמה חייבת להכיל לפחות 5 תווים, אות גדולה, אות קטנה, מספר ותו מיוחד';
    if (password !== confirmPassword) return 'הסיסמאות אינן תואמות';
    if (!fullName || !email || !password || !CompanyName || !CompanyNumber) {
      return 'אחד השדות החיוניים חסר!';
    }
    return null;
  }, [email, password, confirmPassword, fullName, CompanyName, CompanyNumber]);

  const handleEmailSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await axiosUser.post('/send-code', { email });
      setStep(2);
      setTimeLeft(TIMER_DURATION);
      setCanResend(false);
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.data) {
        setError((err.response.data as ServerError).error);
      } else {
        setError('שליחת הקוד נכשלה');
      }
    } finally {
      setLoading(false);
    }
  }, [email, setStep, setTimeLeft, setCanResend, setError, setLoading]);

  const handleCodeVerification = useCallback(async (e: React.FormEvent) => {
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
        setError((err.response.data as ServerError).error);
      } else {
        setError('אימות הקוד נכשל');
      }
    } finally {
      setLoading(false);
    }
  }, [email, code, setStep, setLoading, setError]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };


  const handleFinalSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const validationError = validateFields();
    if (validationError) {
    setError(validationError);
    setLoading(false);
    return;
  }

   
  const formData = new FormData();
  formData.append('email', email);
  formData.append('fullName', fullName);
  formData.append('password', password);
  formData.append('companyName', CompanyName); 
  formData.append('companyNumber', CompanyNumber);
  formData.append('address', Address);
  formData.append('city', City);
  
  if (image instanceof File) { 
    formData.append('profilePic', image);
  }



  try {
    const result = await axiosUser.post('/complete-registration', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
      if (result.status == 201) {
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      setSuccess(true); 
    }
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.data) {
        setError((err.response.data as ServerError).error);
      } else {
        setError('הרישום נכשל');
      }
    } finally {
      setLoading(false);
    }
  }, [email, fullName, password, CompanyName, CompanyNumber, Address, City, image, setSuccess, setLoading, setError, navigate, validateFields]);

  return (
    <Box className="reg-box">
      <div className="form-title">{step === 1 ? 'בואו נתחיל' : step === 2 ? 'אימות קוד' : 'הגדרות חשבון'}</div>
      {error && (
        <Alert severity="error">
          <span>{error}</span>
        </Alert> 
      )}

      {success ? (
        <Alert severity="success">
          <p>החשבון נוצר בהצלחה!</p>
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
              />
              <Button
                name="sendCode"
                text={loading ? <CircularProgress size="20px" color="inherit" /> : 'שלח קוד'}
                onClick={handleEmailSubmit}
                className="bthReg"
              />
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleCodeVerification} dir="rtl">
              <Input
                type="text"
                id="code"
                title="קוד אימות"
                placeholder="הזן קוד בן 6 ספרות"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                isRequired
              />
              <Button
                name="verifyCode"
                text={loading ? <CircularProgress size="20px" color="inherit"/> : 'אמת קוד'}
                onClick={handleCodeVerification}
                className="bthReg"
              />
            </form>
          )}

          {step === 3 && (
            <form onSubmit={handleFinalSubmit} dir="rtl">
              <Input
                type="text"
                id="fullName"
                title="שם מלא"
                placeholder="הזן את שמך המלא"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                isRequired
              />
              <Input
                type="text"
                id="Company/business_name"
                title="שם חברה/עסק"
                placeholder="הזן את שם החרב/עסק"
                value={CompanyName}
                onChange={(e) => setCompanyName(e.target.value)}
                isRequired
              />
              <Input
                type="text"
                id="Company/business_number"
                title="מספר חברה/עסק"
                placeholder="הזן את מספר החרב/עסק"
                value={CompanyNumber}
                onChange={(e) => setCompanyNumber(e.target.value)}
                isRequired
              />
              <Input
                type="text"
                id="Address"
                title="כתובת"
                placeholder="הזן רחוב ומספר דירה"
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <Input
                type="text"
                id="City"
                title="עיר"
                placeholder="הזן עיר"
                value={City}
                onChange={(e) => setCity(e.target.value)}
              />
              <Input
                type="file"
                id="profilePic"
                title="לוגו חברה/עסק"
                placeholder="הוסף תמונה"
                onChange={handleFileChange}
              />
              <Input
                type="password"
                id="password"
                title="סיסמה"
                placeholder="צור סיסמה"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isRequired
              />
              <Input
                type="password"
                id="confirmPassword"
                title="אישור סיסמה"
                placeholder="אשר את הסיסמה"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                isRequired
              />
              <Button
                name="createAccount"
                text={loading ? <CircularProgress size="20px" color="inherit"/> : 'צור חשבון'}
                onClick={handleFinalSubmit}
                className="bthReg"
              />
            </form>
          )}
        </>
      )}
    </Box>
  );
};

export default RegistrationForm;
