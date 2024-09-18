import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import postsRouter from './controllers/posts.router'; // Import postsRouter
import { rateLimitMiddleware } from './middlewares/rate-limit'; // Import your rate-limit middleware

const app = express();
const port = 3000;

// Middleware to log user agent
const platformLogMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const userAgent = req.headers["user-agent"];
  console.log('userAgent: ', userAgent);
  next();
};

// Simple authentication middleware
const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const num = Math.random() * 100;
  if (num > 1) {
    next();
  } else {
    res.status(401).send('Unauthorized! Please log in!');
  }
};

app.use(rateLimitMiddleware); // Apply rate limiting middleware
app.use(platformLogMiddleware); // Log platform info

app.use(express.json()); // Parse JSON
app.use(cors({ origin: 'http://localhost:5173' })); // Allow CORS for your frontend

app.use('/api/posts', authMiddleware, postsRouter); // Use postsRouter for `/api/posts` routes

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
