import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
// import { rateLimitMiddleware } from './middlewares/rate-limit';
import dotenv from 'dotenv';
import usersRouter from './controllers/users.router';
import receiptsRouter from './controllers/receipts.router';
import varianceRouter from './controllers/variance.router'
import { authMiddleware } from './middlewares/authMiddleware';
import * as mysql from 'mysql2';
import path from "path";



dotenv.config();
const app = express();
const port = process.env.PORT || 3001;


export const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : undefined,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

 
async function checkDatabaseConnection() {
  try {
    const connection = await pool.promise().getConnection(); // Get a connection from the pool
    console.log('MySQL is connected!');
    connection.release(); // Release the connection back to the pool
  } catch (error) {
    console.error('Failed to connect to MySQL:', error);
  }
}

checkDatabaseConnection();


export const promisePool = pool.promise();

const platformLogMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const userAgent = req.headers["user-agent"];
  console.log('userAgent: ', userAgent);
  next();
};

// app.set('view engine', 'ejs');
app.use('/public', express.static("./views/assets"));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



// app.use(rateLimitMiddleware);
app.use(platformLogMiddleware);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:5173' // Allow requests from your frontend
}));

app.use('/api/receipts', authMiddleware, receiptsRouter);
app.use('/api/users', usersRouter);
app.use('/api/variance', varianceRouter);

(async function initialize() {
  await checkDatabaseConnection();
  app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
  });
})();