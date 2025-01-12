import rateLimit from 'express-rate-limit';

export const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later'
});

/*
הקטע קוד הזה מגדיר מגבלה על מספר הבקשות שניתן לשלוח לשרת בפרק זמן מסוים, כדי למנוע התקפות DoS (Denial of Service) או שימוש מופרז במשאבים.

הסבר:
express-rate-limit - מודול שמספק את הפונקציה להגביל את מספר הבקשות.
windowMs: 15 * 60 * 1000 - הגדרת פרק הזמן שבו תתבצע המגבלה, במקרה הזה 15 דקות (15 * 60 שניות * 1000 מילישניות).
max: 100 - הגבלת מספר הבקשות המותרות מכל כתובת IP בתוך פרק הזמן שנקבע. במקרה הזה, כל כתובת IP יכולה לשלוח עד 100 בקשות ב-15 דקות.
message: 'Too many requests from this IP, please try again later' - ההודעה שתוחזר אם כתובת IP חורגת מהמגבלה.
מה עושה הקוד:
הקוד מגדיר את המגבלה על בקשות HTTP מכל כתובת IP, כך שאם כתובת IP שולחת יותר מ-100 בקשות ב-15 דקות, היא תקבל את ההודעה שהבקשות מוגבלות ותצטרך להמתין עד שתוכל לשלוח בקשות נוספות.
*/