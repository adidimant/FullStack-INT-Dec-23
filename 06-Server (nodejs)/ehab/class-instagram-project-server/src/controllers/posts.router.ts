import express, { NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';
import Utils from '../services/utils.service';
import { PostModel } from '../models/post.model';
import upload from '../middlewares/upload';
import fs from 'fs';

const postsRouter = express.Router();

postsRouter.get('/', async (req, res) => {
  console.log(`New request from ip: ${req.ip}, method: ${req.method}, endpoint: ${req.url}. headers: ${JSON.stringify(req.headers)}`);
  let { results, oldestPostCreatedDate } = req.query;
  const parsedResults = Utils.convertQueryToNumber(results, 5);

  if (!parsedResults || parsedResults > 100) {
    res.status(400).send("`results` query param must be a number and up to 100.");
    return;
  }

  /*
    conditions:
    1) Limit results to 100
    2) Order by createdDate (last one is the oldest)
    3) createdDate is smaller than oldestPostCreatedDate
  */

  try {
    const conditions = {} as any;
    if (oldestPostCreatedDate) {
      conditions.createdDate = { $lt: new Date(oldestPostCreatedDate as string) }
    }
    const dbResponse = await PostModel.find(conditions)
  .sort({ createdDate: 'desc' })  // Ascending order, so the oldest entries come last
  .limit(parsedResults);

    res.json(dbResponse);
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

postsRouter.put('/create', upload.single('image'), async (req, res) => {
  const { description, location, userId } = req.body;

  const postId = uuidv4();

  const fileName = (req as any).fileName;

  try {
    const post = new PostModel({
      id: postId,
      userId,
      location,
      description,
      imgUrl: `/uploads/${fileName}`,
      createdDate: new Date(),
    });
  
    await post.save();

    res.status(201).json({ message: 'Post uploaded successfully!', postId });
  } catch(err) {
    console.error('Error creating a post in the db: ', err);
    res.status(500).send('Error uploading the new post.');
  }
});

// DELETE http://localhost:3000/api/posts/bdfuydfbsii34ufbehrb
postsRouter.delete('/:postId', async (req, res) => {
  const { postId } = req.params;

  const userId = '<DELETOR-USER-ID>';

  // delete post from db, with checking that this user really owns this post:
  const deletedPost = await PostModel.findOneAndDelete({ id: postId, userId });
  
  if (deletedPost) {
    const { imgUrl } = deletedPost;
    const filePath = `${__dirname}${imgUrl}`; // __dirname => the same path of the project package.json
    
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error(`Error removing file: ${err}`);
        return;
      }
    
      console.log(`File ${filePath} has been successfully removed.`);
    });
  
    res.send("Post deleted succesfully!");
    return;
  }

  res.status(403).send("Post deletion is forbidden!");
});


export default postsRouter;
