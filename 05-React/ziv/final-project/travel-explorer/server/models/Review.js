import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  authorName: {
    type: String,
    required: true
  },
  isAnonymous: {
    type: Boolean,
    default: false
  },
  state: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true,
    maxlength: 1000
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  photoUrl: {
    type: String
  },
  likes: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Review', reviewSchema);

/*

הקוד מגדיר מודל של סקימה (schema) למידע על ביקורות במונגוDB, באמצעות Mongoose, שהוא ספריית ODM (Object Data Modeling) עבור MongoDB ב-Node.js. המודל כולל את השדות הבאים:

authorName:

סוג: מיתר (String).
דרוש: כן (required).
תיאור: שם המחבר של הביקורת.
isAnonymous:

סוג: בוליאני (Boolean).
ברירת מחדל: false.
תיאור: אם הביקורת אנונימית או לא.
state:

סוג: מיתר (String).
דרוש: כן (required).
תיאור: מצב הביקורת (כמו "מאושר", "ממתין לאישור" וכו').
content:

סוג: מיתר (String).
דרוש: כן (required).
תיאור: התוכן של הביקורת.
מגבלת אורך: עד 1000 תווים.
rating:

סוג: מספר (Number).
דרוש: כן (required).
טווח: 1 עד 5.
תיאור: דירוג הביקורת (מ-1 עד 5).
photoUrl:

סוג: מיתר (String).
תיאור: כתובת URL לתמונה שצורפה עם הביקורת (אם יש).
likes:

סוג: מספר (Number).
ברירת מחדל: 0.
תיאור: מספר הלייקים לביקורת.
createdAt:

סוג: תאריך (Date).
ברירת מחדל: זמן יצירת הביקורת (כשהיא נוצרה).
מה הקוד עושה:
הקוד יוצר מודל בשם Review שמייצג ביקורת במערכת. הוא מאפשר לאחסן את המידע המפורט על הביקורת, כולל פרטי המחבר, התוכן, הדירוג, תמונה מצורפת, ומידע על הלייקים והמצב של הביקורת.

*/