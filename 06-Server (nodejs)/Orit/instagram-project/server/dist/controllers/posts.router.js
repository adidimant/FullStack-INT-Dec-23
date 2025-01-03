import express from 'express';
import axios from 'axios';
const postsRouter = express.Router();
postsRouter.get('/', async (req, res) => {
    console.log(`New request from ip: ${req.ip}, method: ${req.method}, endpoint: ${req.url}, headers: ${JSON.stringify(req.headers)}`);
    const { results } = req.query;
    // Parse the `results` query parameter to a number
    const numResults = parseInt(results || '1', 10); // Default to 1 result if not provided
    if (numResults > 100) {
        res.status(400).send("`results` query param must be up to 100.");
        return;
    }
    try {
        const response = await axios.get(`https://randomuser.me/api/?results=${numResults}`); // Fetch posts from the API.
        const data = response.data;
        res.json(data.results);
    }
    catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
});
export default postsRouter;
