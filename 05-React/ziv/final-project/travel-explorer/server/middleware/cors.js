import cors from 'cors';
import { logger } from '../utils/logger.js';

// Allow connections from any client IP
const allowedOrigins = [
  'http://localhost:5503',
  'http://127.0.0.1:5503',
  /^http:\/\/10\.0\.0\.\d+:5503$/,  // Allow any IP in the 10.0.0.x subnet
  'http://127.0.0.1:5504',
  'http://localhost:5504'
];

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);

    // Check if origin is allowed
    const isAllowed = allowedOrigins.some(allowed => 
      typeof allowed === 'string' 
        ? allowed === origin
        : allowed.test(origin)
    );

    if (isAllowed) {
      callback(null, true);
    } else {
      console.warn(`Blocked request from unauthorized origin: ${origin}`);
      callback(null, false); // Block request without throwing an error
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Content-Range', 'X-Content-Range']
};

export const configureCors = (app) => {
  app.use(cors(corsOptions));
  app.options('*', cors(corsOptions));
  
  // Handle CORS errors gracefully
  app.use((err, req, res, next) => {
    if (err.name === 'CORSError') {
      logger.error('CORS Error:', err);
      res.status(403).json({ message: 'Access denied due to CORS policy' }); // Custom error message
    } else {
      next(err);
    }
  });
};

export default cors(corsOptions);
