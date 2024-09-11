import express from 'express';
import cors from 'cors';
import postsRouter from './controllers/posts.router.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5174' // Allow requests from your frontend
}));

app.use('/api/posts', postsRouter);

app.get('/redirect-google', (req, res) => {
  res.redirect('https://www.google.com');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});