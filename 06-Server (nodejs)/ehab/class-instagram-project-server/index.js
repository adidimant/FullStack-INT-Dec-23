import express from 'express';
import cors from 'cors';
import postsRouter from './controllers/posts.router.js';
import { rateLimitingMiddleware } from './guards/rateLimiting.js';

const app = express();
const port = 3000;

const platformLogMiddleware = (req, res, next) => {
  const userAgent = req.headers["user-agent"];
  //console.log('userAgent: ', userAgent);
  next();
};

const authMiddleware = (req, res, next) => {
  next();
  return;
  /*const num = Math.random()*100;
  if (num > 50) {
    next();
    return;
  }
  res.status(401).send('Unauthorized! please log in!');*/
};

//app.use(rateLimitingMiddleware);
app.use(platformLogMiddleware);

app.use(express.json());
app.use(cors());
app.use(cors({
  origin: 'http://localhost:5173' // Allow requests from your frontend
}));

app.use('/api/posts', authMiddleware, postsRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});