import express, { NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';
import Utils from '../services/utils.service';
import { PostModel } from '../models/post.model';
import upload from '../middlewares/upload';
import { UserModel } from '../models/user.model';
const usersRouter = express.Router();

/*
Endpoints plan:
1) PUT /register
2) POST /login // here we'll send email & pass
3) POST /update
4) DELETE /:userId (less priority in course)
*/

usersRouter.put('/register', async (req, res) => {
  // todo - check user not exist already for this mail
  const { username, email, password, firstName, lastName, birthdate, country, city } = req.body;

  const user = await UserModel.findOne([{ email }, { username }]);
  if (user) {
    if (user.username == username) {
      res.status(400).send("username already exist");
    } else {
      res.status(201).send("User created!");
    }
    return;
  }

  const userId = uuidv4();

  const createdDate = new Date();
  const profilePicUrl = '';

  // here = create the user in db, at the end response 201.
});



export default usersRouter;
