import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import Utils from '../services/utils.service';
import upload from '../middlewares/upload';
import { UserModel } from '../models/user.model';
import jwt from 'jsonwebtoken';
const usersRouter = express.Router();

const expirationTime = `${process.env.ACCESS_TOKEN_EXPIRATION_TIME || 30000}ms`

/*
Endpoints plan:
1) PUT /register
2) POST /login // here we'll send email & pass
3) POST /update
4) GET /user
5) DELETE /:userId (less priority in course)
*/

usersRouter.put('/register', upload.single('profilePic'), async (req, res) => {
  const { username, email, password, firstName, lastName, birthdate, country, city } = req.body;

  // check user not exist already for this mail
  const user = await UserModel.findOne({
    $or: [{ email }, { username }]
  });
  if (user) {
    if (user.username == username) {
      res.status(400).send("username already exist");
    } else {
      res.status(201).send("User created!");
    }
    return;
  }

  const userId = uuidv4();

  let fileName = (req as any).fileName;
  if (!fileName) {
    fileName = 'default_profile.jpg';
  }

  const createdDate = new Date();

  const newUser = new UserModel({
    userId,
    username,
    email,
    createdDate,
    password,
    firstName,
    lastName,
    birthdate,
    country,
    city,
    profilePicUrl: `/uploads/${fileName}`,
  });

  await newUser.save();
  res.status(201).send("User registered succesfully!");
});

// POST /api/users/login

usersRouter.post('/login', Utils.validateRequiredParams(['email', 'password']), async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email, password });

  if (user) {
    const payload = { email, userId: user.userId, username: user.username, birthdate: user.birthdate, firstName: user.firstName, lastName: user.lastName, iat: Date.now() };
    const accessToken = jwt.sign(payload, '<MY-SECRET>', { expiresIn: expirationTime });
    // create a token, ecoding the user details (email, username, userId, fullName)
    // respond the token to the client side in the body, with 200

    res.json({ accessToken });
    return;
  }

  // tokenSecret: ifb3cyb2iy42vwoi57y3ui33$_C%4g28cyuiq5h4ivu4yib7y5i743

  res.status(404).send("Bad combination of email and password");
});

export default usersRouter;
