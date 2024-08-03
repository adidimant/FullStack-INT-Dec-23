import express from 'express';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Utils from '../services/utils.service';
import { PostModel } from '../models/post.model';
const postsRouter = express.Router();

postsRouter.get('/', async (req, res) => {
  console.log(`New request from ip: ${req.ip}, method: ${req.method}, endpoint: ${req.url}. headers: ${JSON.stringify(req.headers)}`);
  let { results, fetchingFromAPI } = req.query;
  const parsedResults = Utils.convertQueryToNumber(results, 5);

  if (!parsedResults || parsedResults > 100) {
    res.status(400).send("`results` query param must be a number and up to 100.");
    return;
  }
  try {
    if(fetchingFromAPI == 'false'){
      const dbResponse = await PostModel.find({}); // Get all data from DB.
      console.log('dbResponse:',dbResponse);
      res.json(dbResponse);
      return;
    }
    // throw new Error("request timed out");
    const response = await axios.get('https://randomuser.me/api/?results=' + parsedResults); // Fetch posts from the API.
    const data = response.data;
    res.json(data.results);
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).contentType('html').render('error-500');
  }
});

postsRouter.get('/:postId', async (req, res) => {
  const { postId } = req.params;
  try {
    const post = await PostModel.findOne({ id: postId });
  
    if (post) {
      res.json(post);
      return;
    }
    res.status(404).render('not-found');
  } catch(err) {
    console.error('Error finding a post in the db: ', err);
    res.status(500).send('Error finding the post: ' + postId);
  }
});

postsRouter.put('/create', async (req, res) => {
  const { description, location, userId } = req.body;

  if (!userId || !description) {
    res.status(400).send('One of the required parameters (userId, text) is missing');
    return;
  }

  const postId = uuidv4();

  try {
    const post = new PostModel({
      id: postId,
      userId,
      location,
      description,
      imgUrl: '/public/1.png',
      createdDate: new Date(),
    });
  
    await post.save();

    res.status(201).json({ message: 'Post uploaded successfully!', postId });
  } catch(err) {
    console.error('Error creating a post in the db: ', err);
    res.status(500).send('Error uploading the new post.');
  }
});

export default postsRouter;
