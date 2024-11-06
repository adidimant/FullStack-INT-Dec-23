import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      //cb(null, './views/assets'); // Specify the upload folder
      if (!file) {
        return;
      }
      cb(null, `./uploads/`); // Specify the upload folder
    },
    filename: (req, file, cb) => {
      if (!file) {
        return;
      }
      const lastDotIndex = file.originalname.lastIndexOf('.');

      const fileName = file.originalname.slice(0, lastDotIndex);
      const fileExtension = file.originalname.slice(lastDotIndex);

      /*
      example:
      file.originalname:   beautiful-eyes.png
      desired:   beautiful-eyes-12937861923.png
      */

      const fileFullName = fileName + Math.trunc(Date.now() /100) + fileExtension;
      (req as any).fileName = fileFullName;

      cb(null, fileFullName); // Append timestamp to file name
    }
});

  // Create the multer instance
const upload = multer({ storage });

export default(upload);