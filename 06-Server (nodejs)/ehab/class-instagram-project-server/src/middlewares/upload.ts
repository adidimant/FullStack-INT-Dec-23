import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';


const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      //cb(null, './views/assets'); // Specify the upload folder
      cb(null, './uploads'); // Specify the upload folder
    },
    filename: (req, file, cb) => {
      cb(null, Math.trunc(Date.now() /100) + '-' + file.originalname); // Append timestamp to file name
    }
});

// Create GridFS storage engine
/*const storage = new GridFsStorage({
    url: mongoURI,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        const filename = Math.trunc(Date.now() / 100) + '-' + file.originalname;
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads', // Collection where files will be stored in MongoDB
        };
        resolve(fileInfo);
      });
    },
  });*/

  // Create the multer instance
const upload = multer({ storage });

export default(upload);