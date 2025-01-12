import validator from 'validator';

export const validateRegistration = (req, res, next) => {
  const { name, email, password } = req.body;
  const errors = [];

  // אימות שם
  if (!name || typeof name !== 'string') {
    errors.push('Name is required');
  } else if (name.length < 2 || name.length > 50) {
    errors.push('Name must be between 2 and 50 characters');
  }

  // אימות מייל
  if (!email || typeof email !== 'string') {
    errors.push('Email is required');
  } else if (!validator.isEmail(email)) {
    errors.push('Please provide a valid email address');
  }

  // אימות סיסמה
  if (!password || typeof password !== 'string') {
    errors.push('Password is required');
  } else if (password.length < 8) {
    errors.push('Password must be at least 8 characters long');
  }

  if (errors.length > 0) {
    return res.status(400).json({ 
      message: 'Validation failed', 
      errors 
    });
  }

  next();
};

export const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  const errors = [];

  // אימות מייל
  if (!email || typeof email !== 'string') {
    errors.push('Email is required');
  } else if (!validator.isEmail(email)) {
    errors.push('Please provide a valid email address');
  }

  // אימות סיסמה
  if (!password || typeof password !== 'string') {
    errors.push('Password is required');
  }

  if (errors.length > 0) {
    return res.status(400).json({ 
      message: 'Validation failed', 
      errors 
    });
  }

  next();
};

/*

הקטע קוד הזה עוסק ב-validations (אימות) של נתונים שמתקבלים בבקשות HTTP, ובודק אם הנתונים שמתקבלים בגוף הבקשה (body) עבור הרשמה או התחברות תואמים את הדרישות.

הסבר על הקוד:
validateRegistration:

מבצע אימות על פרטי ההרשמה:
שם: חייב להיות מיתר (string) באורך בין 2 ל-50 תווים.
אימייל: חייב להיות מיתר תקני של אימייל (נבדק עם validator.isEmail).
סיסמה: חייבת להיות מיתר באורך מינימלי של 8 תווים.
אם יש שגיאות, תוחזר תשובת שגיאה עם רשימת השגיאות.
אם הכל תקין, הפונקציה מעבירה את הבקשה לשלב הבא בעיבוד (באמצעות next()).
validateLogin:

מבצע אימות על פרטי ההתחברות:
אימייל: חייב להיות מיתר תקני של אימייל.
סיסמה: חייבת להיות מיתר (ללא הגבלה על האורך).
אם יש שגיאות, תוחזר תשובת שגיאה עם רשימת השגיאות.
אם הכל תקין, הפונקציה מעבירה את הבקשה לשלב הבא בעיבוד.
מה עושה הקוד:
הקוד בודק אם הנתונים שמתקבלים בבקשות הרשמה והתחברות הם תקינים ומכילים את הערכים הנדרשים, ואם לא, הוא מחזיר תשובת שגיאה עם פרטי השגיאה. אם כל הנתונים תקינים, הוא מעביר את הבקשה לשלב הבא בעיבוד.



*/