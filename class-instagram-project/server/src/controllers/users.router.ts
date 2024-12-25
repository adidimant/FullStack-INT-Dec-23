import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import Utils from '../services/utils.service';
import upload from '../middlewares/upload';
import { UserModel } from '../models/user.model';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { authMiddleware } from '../middlewares/authMiddleware';
import { ACTIVE_USERS_SESSIONS_AND_TOKENS } from '../services/sessions.management.service';

const saltRounds = 10; // for bcrypt salt rounds, can be also env variable
const usersRouter = express.Router();


const expirationTime = `${process.env.ACCESS_TOKEN_EXPIRATION_TIME || 30000}ms`

const generateAccessToken = (payload: object): string => {
  const accessToken = jwt.sign({ ...payload, iat: Date.now() }, process.env.ACCESS_TOKEN_SECRET as string, { expiresIn: expirationTime });
  return accessToken;
};

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
      res.status(201).send("User registered succesfully!");
    }
    return;
  }

  const userId = uuidv4();

  let fileName = (req as any).fileName;
  if (!fileName) {
    fileName = 'default_profile.jpg';
  }

  const createdDate = new Date();

  // test empty password
  // test very long password
  // test undefined password
  // test null password

  if (!password) {
    res.status(400).send("invalid password provided");
    return;
  }

  let hashedPassword;

  try {
    hashedPassword = await bcrypt.hash(password, saltRounds);
  } catch(err) {
    res.status(500).send("Internal server error");
    return;
  }

  const newUser = new UserModel({
    userId,
    username,
    email,
    createdDate,
    password: hashedPassword,
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

usersRouter.post('/login', Utils.validateRequiredParams(['emailOrUsername', 'password']), async (req, res) => {
  const { emailOrUsername, password } = req.body;

  let user;
  if (emailOrUsername.includes('@')) {
    user = await UserModel.findOne({ email: emailOrUsername });
  } else {
    user = await UserModel.findOne({ username: emailOrUsername });
  }

  let passwordVerified;
  
  try {
    passwordVerified = await bcrypt.compare(password, user?.password);
  } catch (err) {
    res.status(500).send("Internal server error");
  }

  if (user && passwordVerified) {
    const payload = { email: user.email, userId: user.userId, username: user.username, birthdate: user.birthdate, firstName: user.firstName, lastName: user.lastName };
    const accessToken = generateAccessToken(payload);
    const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET as string); // specifically in instagram, we won't define refreshToken expiration - to enable the user to be logged-in forever
    // create a token, ecoding the user details (email, username, userId, fullName)
    // respond the token to the client side in the body, with 200

    const tokens = { accessToken, refreshToken };

    ACTIVE_USERS_SESSIONS_AND_TOKENS[(user.userId as string)] = { ...tokens, lastActivity: Date.now() };
    res.json(tokens);
    return;
  }

  // tokenSecret: ifb3cyb2iy42vwoi57y3ui33$_C%4g28cyuiq5h4ivu4yib7y5i743

  res.status(404).send("Bad combination of email and password");
});


// GET `/token` API providing a new accessToken
usersRouter.get('/token', (req, res) => {
  const authorizationHeader = req.headers.authorization; // 'Bearer <refresh-token>'
  if (typeof authorizationHeader == 'string') {
    const refreshToken = authorizationHeader.split(' ')?.[1];
    if (refreshToken) {
      try {
        const userData = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET as string);
        if (typeof userData == 'object') {
          const session = ACTIVE_USERS_SESSIONS_AND_TOKENS[userData.userId];
          // Checking if there's an active session for the user AND the accessToken that is allowed in this session is really the accessToken that was provided in the request
          if (session && session.refreshToken == refreshToken) {
            const accessToken = generateAccessToken(userData);
            session.accessToken = accessToken;
            res.json({ accessToken });
            return;
          }
        }
      } catch (err) {}
    }
  }
  res.status(401).send("Unauthorized! please log in!");
});

usersRouter.post('/logout', authMiddleware, (req, res) => {
  const userData = (req as any).userData;
  const userId = userData.userId;

  // making sure the server is no longer treating the user accessToken & refreshToken as valid
  delete ACTIVE_USERS_SESSIONS_AND_TOKENS[userId];

  res.send('Logged out successfully');
});

usersRouter.post('/update-profile', authMiddleware, async (req,res) => {
  //TODO - implement if we have time
});

export default usersRouter;
