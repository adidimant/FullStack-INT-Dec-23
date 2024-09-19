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
    }
    catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
});
postsRouter.put('/', (req, res) => {
    const { title, content, imageUrl, authorId, date, music } = req.body;
    res.send(`The post with content: "${content}" has been successfully updated`);
});
postsRouter.post('/:id', (req, res) => {
    const { id } = req.params;
    const { title, content, imageUrl } = req.body;
    res.send(`Create post with ID ${id}`);
});
postsRouter.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Delete post with ID ${id}`);
});
export default postsRouter;
