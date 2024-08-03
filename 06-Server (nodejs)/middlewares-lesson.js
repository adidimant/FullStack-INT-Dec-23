import express from 'express';
import cors from 'cors';
import postsRouter from './controllers/posts.router.js';

const app = express();
const port = 3000;

const platformLogMiddleware = (req, res, next) => {
  const userAgent = req.headers["user-agent"];
  console.log('userAgent: ', userAgent);
  next();
};

const authMiddleware = (req, res, next) => {
  const num = Math.random()*100;
  if (num > 50) {
    next();
    return;
  }
  res.status(401).send('Unauthorized! please log in!');
};

app.use(platformLogMiddleware);

app.use('/user/:id', (req, res, next) => {
  console.log('Request URL:', req.originalUrl)
  next()
}, (req, res, next) => {
  console.log('Request Type:', req.method)
  next()
}, userRouter);

app.get('/user/:familyId/:userId', (req, res) => {
  const userId = req.params.userId;
  const familyId = req.params.familyId;
  console.log('userId: ', userId);
  console.log('familyId: ', familyId);
  res.send('sent userId: ' + userId + ', familyId: ' + familyId);
});

// NOTE - when the client calls /user/hasson-family/ehab-hasson/ -> also the "Request URL..." & "Request Type" middlewares will run - because it is starts with /user/some-string

// error handling (global middleware) - for any unhandeled error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173' // Allow requests from your frontend
}));

app.use('/api/posts', authMiddleware, postsRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});