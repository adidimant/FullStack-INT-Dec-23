import express from 'express';
import cors from 'cors';
//import mongoose, { mongo } from 'mongoose';
import mongoose from 'mongoose';
import postsRouter from './controllers/posts.router';
import { rateLimitMiddleware } from './middlewares/rate-limit';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = 3000;

//mongoose.connect('my-url').then(() => {
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/';
mongoose.connect(mongoURI).then(() => {
  console.log("MongoDB is connected!");
}).catch((err) => console.error(err));

const platformLogMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const userAgent = req.headers["user-agent"];
  console.log('userAgent: ', userAgent);
  next();
};

const authMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const num = Math.random()*100;
  if (num > 1) {
    next();
    return;
  }
  res.status(401).send('Unauthorized! please log in!');
};

app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/public', express.static("./views/assets"));

app.get('/', (req, res) => {
  // Create an error on every page.
  throw new Error('Something went wrong!');
});

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack); // Log the error
  res.status(500).render('failed'); // Render the 'failed' view for status 500 errors
});

/*const errorHandler: express.ErrorRequestHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('failed');
};

app.use(errorHandler);*/

app.use(rateLimitMiddleware);
app.use(platformLogMiddleware);

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173' // Allow requests from your frontend
}));

app.use('/api/posts', authMiddleware, postsRouter);


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});