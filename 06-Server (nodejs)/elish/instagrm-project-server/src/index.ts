import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import postsRouter from './controllers/posts.router';
//import { rateLimitMiddleware } from '../src/middlewares/rate-limit';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = 3000;

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
app.use('/public', express.static("./views/assets"));

//app.use(rateLimitMiddleware);
app.use(platformLogMiddleware);

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173' // Allow requests from your frontend
}));

app.use('/api/posts', authMiddleware, postsRouter);

app.use('/server',(req, res)=>{
  res.status(500).render('status-500');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});