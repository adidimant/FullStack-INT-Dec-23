import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import commercialRouter from './routers/commercials-router';

dotenv.config();
const app = express();
const port = 3001;

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/';

mongoose.connect(mongoURI).then(() => {
  console.log("MongoDB is connected!");
}).catch((err) => console.error(err));

/* Commercial Engine Server */

const platformLogMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const userAgent = req.headers["user-agent"];
  console.log('userAgent: ', userAgent);
  next();
};

app.use(platformLogMiddleware);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:5173' // Allow requests from your frontend
}));

app.use('/commercials', commercialRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});