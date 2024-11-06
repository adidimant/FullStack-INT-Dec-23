import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import postsRouter from './controllers/posts.router';
import { rateLimitMiddleware } from './middlewares/rate-limit';
import dotenv from 'dotenv';
import usersRouter from './controllers/users.router';

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
app.use('/uploads', express.static("./uploads"));

// app.use(rateLimitMiddleware);
app.use(platformLogMiddleware);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:5173' // Allow requests from your frontend
}));

app.use('/api/posts', authMiddleware, postsRouter);
app.use('/api/users', usersRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});