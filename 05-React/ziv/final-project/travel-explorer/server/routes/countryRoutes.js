import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Countries API!' });
});

export default router;

/*
הקוד מגדיר את countryRoutes.js עבור נתיב בסיסי של API שמחזיר הודעת ברוך הבא.

מה הקוד עושה:
express.Router():

יוצר אובייקט router שמנהל את הנתיבים הקשורים למדינות (Countries).
הגדרת נתיב GET:

/:
מחזיר תגובה בפורמט JSON עם הודעת ברוך הבא: { message: 'Welcome to the Countries API!' }.
export default:

מייצא את ה-router כך שניתן להשתמש בו בנתיבים אחרים של השרת.
מה הקוד עושה בפועל:
הקוד מגדיר נתיב GET בסיסי עבור API שמחזיר הודעה פשוטה כאשר הלקוח מבצע בקשה לנתיב /.


*/