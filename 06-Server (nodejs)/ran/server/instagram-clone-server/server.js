const express = require('express');
const postsRouter = require('./routes/postsRouter');
const rateLimiter = require('./guards/rateLimiter');
const app = express();
const port = 3000;

// Use the rate limiting middleware globally
app.use(rateLimiter);

// Middleware to parse JSON request bodies
app.use(express.json());

// ניתוב לנתיב הבסיסי (/) - ברירת מחדל
app.get('/', (req, res) => {
    res.send('Welcome to the Express server!');
});

// Use the postsRouter for any routes starting with /posts
app.use('/posts', postsRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});