import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import validator from 'validator';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters long'],
    maxlength: [50, 'Name cannot exceed 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    trim: true,
    validate: [validator.isEmail, 'Please provide a valid email']
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: [8, 'Password must be at least 8 characters long'],
    select: false
  },
  avatar: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Hash סיסמא לפני השמירה
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// השווה את שיטת הסיסמה
userSchema.methods.comparePassword = async function(candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    throw new Error(error);
  }
};

const User = mongoose.model('User', userSchema);

export default User;


/*
הקוד מגדיר מודל User ב-Mongoose עבור משתמשים במערכת. המודל כולל את השדות הבאים:

name:

סוג: מיתר (String).
דרוש: כן (required).
אורך מינימלי: 2 תווים.
אורך מקסימלי: 50 תווים.
תיאור: שם המשתמש.
טרימינג (הסרת רווחים מיותרים).
email:

סוג: מיתר (String).
דרוש: כן (required).
ייחודיות: כן (unique).
נמוך לאותיות (lowercase).
טרימינג (הסרת רווחים מיותרים).
אימות: חייב להיות כתובת דוא"ל תקינה.
תיאור: כתובת הדוא"ל של המשתמש.
password:

סוג: מיתר (String).
דרוש: כן (required).
אורך מינימלי: 8 תווים.
לא נבחר לשדר (select: false) - לא יוחזר בתשובות ברירת המחדל.
תיאור: סיסמת המשתמש.
avatar:

סוג: מיתר (String).
ברירת מחדל: מיתר ריק.
תיאור: כתובת URL לתמונה (אם יש).
createdAt:

סוג: תאריך (Date).
ברירת מחדל: זמן יצירת המשתמש.
לוגיקת הקוד:
הצפנת הסיסמה:

לפני שמירה של משתמש חדש או עדכון סיסמה, הקוד מבצע הצפנה של הסיסמה באמצעות bcrypt (כשהיא שונתה).
מתבצע שימוש ב-salt על מנת להוסיף שכבת אבטחה נוספת להצפנה.
השוואת סיסמאות:

מתודה comparePassword מאפשרת להשוות את הסיסמה שהוזנה לסיסמה המוצפנת שנשמרה בבסיס הנתונים.
מה הקוד עושה:
הקוד מגדיר מודל למשתמשים במערכת, עם אפשרות להצפין את הסיסמה לפני שמירה בבסיס הנתונים ולבצע השוואה בין סיסמה שהוזנה לסיסמה המוצפנת.
*/