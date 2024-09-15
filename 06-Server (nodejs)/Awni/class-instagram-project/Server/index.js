
import express from 'express';
import cors from 'cors';
import postsRouter from './controllers/posts.router.js';
import rateLimit from 'express-rate-limit';
import { createRateLimiter } from './guards/rateLimiter.js';



const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173' // Allow requests from your frontend
}));

app.use('/api/posts', postsRouter);

app.listen(port, () => {
    console.log('server is listening on port', port);
});


/**
 2) Implement express middlewear for rate-limiting by IP and by user-agent (put the middlewear under the 'guards' folder and import from there)
it means you should track after requests from the same IPs and the same userAgent over time windows.
The relevant time windows (left side is seconds right side is request amount):
{ 1: 5, 5: 8, 10: 12, 20: 15, 30: 18, 60: 20, 1800: 150, 3600: 300 }
 */

const rateLimiter = createRateLimiter({ // Create a rate limiter with the specified time windows.// צור מגביל קצב עם חלונות הזמן שצוינו
    windows: {
        1: 5,
        5: 8,
        10: 12,
        20: 15,
        30: 18,
        60: 20,
        1800: 150,
        3600: 300
    }
});

app.use(rateLimit({
    windowMs: 1000, // 1 second
    max: 5, // limit each IP to 5 requests per windowMs 
    handler: (req, res) => {
        res.status(429).json({ message: 'Too many requests, please try again later.' });
    }
}));

app.use(rateLimiter);



