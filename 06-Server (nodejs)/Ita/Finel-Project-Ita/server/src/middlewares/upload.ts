import multer from 'multer'; //ניהול העלאת קבצים
import path from 'path';//ניתובים
import fs from 'fs'; //מודול לניהול קבצים

// מגדיר את נתיב הבסיס לתיקיית ההעלאות: תיקייה בשם uploads במיקום יחסי לשורש השרת.
const BASE_UPLOAD_DIR = path.join(__dirname, '..', '..', 'uploads');

// יצירת תקייה אם לא קיימת
const createUploadDir = () => {
  if (!fs.existsSync(BASE_UPLOAD_DIR)) {
    fs.mkdirSync(BASE_UPLOAD_DIR, { recursive: true });
  }
};

createUploadDir();

//הגדרות איחסון
const storage = multer.diskStorage({
  destination: (req, file, cb) => { //הגדרת תקיית היעד
    cb(null, BASE_UPLOAD_DIR);
  },
  filename: (req, file, cb) => {
    // קידומת על סמך סוג הקובץ
    const prefix = req.originalUrl.includes('invoice') ? 'invoice-' : 'profile-';
    
    const lastDotIndex = file.originalname.lastIndexOf('.');
    const fileName = file.originalname.slice(0, lastDotIndex);
    const fileExtension = file.originalname.slice(lastDotIndex);
    const fileFullName = `${prefix}${fileName}-${Math.trunc(Date.now() / 100)}${fileExtension}`;
    cb(null, fileFullName);
  }
});

// Profile picture upload configuration
export const uploadProfilePicture = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowedMimes = ['image/jpeg', 'image/png', 'image/gif'];  //הגבלת סוג הקובץ
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only JPG, PNG and GIF files are allowed for profile pictures!'));
    }
  },
  limits: {
    fileSize: 2 * 1024 * 1024 // 2MB
  }
});

// 
export const uploadInvoice = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed for invoices!'));
    }
  },
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB
  }
});

// קבלת נתיב בשביל שליחה למס הנתונים
export const getDbFilePath = (filename: string): string => {
  return `/uploads/${filename}`;
};

// קבלת נתיב מוחלט
export const getAbsoluteFilePath = (dbPath: string): string => {
  const relativePath = dbPath.replace('/uploads/', '');
  return path.join(__dirname, '..', '..', 'uploads', relativePath);
};

// אופציה למחיקת קובץ
export const deleteFile = async (dbPath: string): Promise<void> => {
  try {
    const absolutePath = getAbsoluteFilePath(dbPath);
    await fs.promises.unlink(absolutePath);
    console.log('File deleted successfully:', absolutePath);
  } catch (err) {
    console.error('Error deleting file:', err);
    throw err;
  }
};

// קבלת קובץ כ-Base64
export const getFileAsBase64 = async (dbPath: string): Promise<string | null> => {
  try {
    const absolutePath = getAbsoluteFilePath(dbPath);
    const buffer = await fs.promises.readFile(absolutePath);
    const mimeType = path.extname(dbPath).toLowerCase() === '.pdf' 
      ? 'application/pdf' 
      : 'image/jpeg';
    return `data:${mimeType};base64,${buffer.toString('base64')}`;
  } catch (err) {
    console.error('Error reading file:', err);
    return null;
  }
};

// מחזיר Buffer של קובץ 
export const getFileBuffer = async (dbPath: string): Promise<Buffer | null> => {
  try {
    const absolutePath = getAbsoluteFilePath(dbPath);
    return await fs.promises.readFile(absolutePath);
  } catch (err) {
    console.error('Error reading file:', err);
    return null;
  }
};