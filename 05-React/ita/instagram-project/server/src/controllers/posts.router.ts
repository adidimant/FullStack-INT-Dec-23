import express from 'express';
import axios from 'axios';
import Utils from '../services/utils.service';
import { Post } from "../models/post.model";
import { v4 as uuidv4 } from 'uuid';
const postsRouter = express.Router();

postsRouter.get('/', async (req, res) => {
  console.log(`New request from ip: ${req.ip}, method: ${req.method}, endpoint: ${req.url}. headers: ${JSON.stringify(req.headers)}`);
  let { results } = req.query;
  const parsedResults = Utils.convertQueryToNumber(results, 5);

  if (!parsedResults || parsedResults > 100) {
    res.status(400).send("`results` query param must be a number and up to 100.");
    return;
  }
  try {
    const response = await axios.get('https://randomuser.me/api/?results=' + parsedResults); // Fetch posts from the API.
    const data = response.data;
    res.json(data.results);
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).render('error-500');
  }
});

postsRouter.get('/:postId', async (req, res) => {
  const { postId } = req.params;
  // get from database the post data by postId
  // if not found:
  res.status(404).render('not-found');
});

postsRouter.put('/upload', async (req, res) => {
  try {
    const { text, author } = req.body;

    if (!text ) {
      return res.status(400).send('Text content are required.');
    }

    const postId = uuidv4();

    const newPost = new Post({
      postId,
      textContent: text,
    });

    await newPost.save();

    res.status(201).send({ message: 'Post created successfully', postId });
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).send('Internal server error');
  }
});

export default postsRouter;
