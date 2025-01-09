import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Create uploads directory and its subdirectories if they don't exist
const createUploadDirs = () => {
  const dirs = ['./uploads', './uploads/invoices', './uploads/profile-pictures'];
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
};

createUploadDirs();

// Configure storage for different file types
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (!file) return;

    // Determine destination based on upload type
    let uploadPath = './uploads/';
    
    if (req.baseUrl.includes('invoice')) {
      uploadPath += 'invoices/';
    } else if (req.baseUrl.includes('profile')) {
      uploadPath += 'profile-pictures/';
    }

    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    if (!file) return;

    const lastDotIndex = file.originalname.lastIndexOf('.');
    const fileName = file.originalname.slice(0, lastDotIndex);
    const fileExtension = file.originalname.slice(lastDotIndex);
    const fileFullName = `${fileName}-${Math.trunc(Date.now() /100)}${fileExtension}`;
    
    (req as any).fileName = fileFullName;
    cb(null, fileFullName);
  }
});

// File filter to validate file types
const fileFilter = (req: any, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  if (req.baseUrl.includes('invoice')) {
    // Allow only PDFs for invoices
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed for invoices!'));
    }
  } else if (req.baseUrl.includes('profile')) {
    // Allow common image formats for profile pictures
    const allowedMimes = ['image/jpeg', 'image/png', 'image/gif'];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only JPG, PNG and GIF files are allowed for profile pictures!'));
    }
  } else {
    cb(null, true);
  }
};

// Create multer instances for different upload types
export const uploadInvoice = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit for invoices
  }
});

export const uploadProfilePicture = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 2 * 1024 * 1024 // 2MB limit for profile pictures
  }
});