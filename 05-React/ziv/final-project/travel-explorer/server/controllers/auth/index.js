export { register } from './register.controller.js';
export { login } from './login.controller.js';
export { verifyToken } from './verify.controller.js';

/*
הקובץ משמש כנקודת יצוא מרכזית (barrel file) עבור פונקציות הקשורות לאימות משתמשים (Authentication).

פונקציות מיוצאות:
register:

מיובאת מ-register.controller.js.
אחראית לרישום משתמש חדש.
login:

מיובאת מ-login.controller.js.
מטפלת בתהליך התחברות של משתמש קיים.
verifyToken:

מיובאת מ-verify.controller.js.
בודקת את תקינות ה-Token (JWT או אמצעי אימות אחר).
מטרה:
לארגן ולרכז את הפונקציות הקשורות לאימות במקום אחד.
להקל על הייבוא בקבצים אחרים על ידי גישה מרוכזת לפונקציות.
*/