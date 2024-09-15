//3) Create a single Post page, the page should be focused about one specific post,
// with more details, you should transfer to this page the content of the posts it presents (using prop of the data)

import express from 'express';
import axios from 'axios';

const postsRouter = express.Router();

postsRouter.get('/', async (req, res) => {
    console.log(`New request from ip: ${req.ip}, method: ${req.method}, endpoint: ${req.url}. headers: ${JSON.stringify(req.headers)}`);
    const { results } = req.query;
    if (results > 100) {
      res.status(400).send("`results` query param must be up to 100.");
      return;
    }
    try {
      const response = await axios.get('https://randomuser.me/api/?results=' + results); // Fetch posts from the API.
      const data = response.data;
      res.json(data.results);
    } catch (err) {
      console.error('Error fetching data:', err);
      res.status(500).json({ error: 'Failed to fetch posts' });
    }
  });
  
  
postsRouter.get('/:postId', async (req, res) => {
    console.log(`New request from ip: ${req.ip}, method: ${req.method}, endpoint: ${req.url}. headers: ${JSON.stringify(req.headers)}`); // Log the request details to the console.
    const { postId } = req.params; // Extract the postId parameter from the request.

    try {
        const response = await axios.get(`https://randomuser.me/api/?results${postId}`); // Fetch the post from the API.
        const data = response.data;
        res.json(data);
    } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ error: 'Failed to fetch post' });
    }
});

export default postsRouter;