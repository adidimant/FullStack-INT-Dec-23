import express from 'express';
import cors from 'cors';
import mongoose, { mongo } from 'mongoose';
import postsRouter from './controllers/posts.router';
import { rateLimitMiddleware } from './middlewares/rate-limit';

const app = express();
const port = 3000;

mongoose.connect('mongodb+srv://itaraskin1234:qTKuKqQdHYh7Miyr@ita-instagram-project.2rubd.mongodb.net/?retryWrites=true&w=majority&appName=ita-instagram-project').then(() => {
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