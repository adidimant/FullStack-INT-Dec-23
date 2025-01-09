import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { rateLimitMiddleware } from './middlewares/rate-limit';
import dotenv from 'dotenv';
import usersRouter from './controllers/users.router';
import receiptsRouter from './controllers/receipts.router';
import { authMiddleware } from './middlewares/authMiddleware';
import * as mysql from 'mysql2';
import path from "path";



dotenv.config();
const app = express();
const port = process.env.PORT || 3001;


const pool = mysql.createPool({
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

async function createTables() {
  try {
      const poolPromise = pool.promise();

      // Create verification_codes table
      await poolPromise.query(`
          CREATE TABLE IF NOT EXISTS verification_codes (
              email VARCHAR(255) PRIMARY KEY,
              code VARCHAR(6) NOT NULL,
              createdDate DATETIME NOT NULL
          );
      `);

      // Add other table creation statements here
      await poolPromise.query(`
          CREATE TABLE IF NOT EXISTS users (
              userId VARCHAR(36) PRIMARY KEY,
              email VARCHAR(255) UNIQUE NOT NULL,
              password VARCHAR(255) NOT NULL,
              fullName VARCHAR(255) NOT NULL,
              companyName VARCHAR(255) NOT NULL,
              companyNumber VARCHAR(255) NOT NULL,
              address VARCHAR(255),
              city VARCHAR(255),
              profilePic VARCHAR(255),
              createdDate DATETIME DEFAULT CURRENT_TIMESTAMP
          );
      `);

      await promisePool.query(`
        CREATE TABLE IF NOT EXISTS receipts (
          receiptId VARCHAR(36) PRIMARY KEY,
          userId VARCHAR(36) NOT NULL,
          receiptNumber INT NOT NULL,
          customerName VARCHAR(255) NOT NULL,
          date DATE NOT NULL,
          description TEXT,
          receiptType ENUM('Bank transfer', 'Cash', 'bit', 'paybox', 'Check', 'Credit card') NOT NULL,
          paymentDate DATE NOT NULL,
          amount DECIMAL(10, 2) NOT NULL,
          bank INT,
          branch INT,
          account INT,
          details TEXT,
          footerContent TEXT,
          customerEmail VARCHAR(255),
          createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (userId) REFERENCES users(userId) ON DELETE CASCADE
        );
      `);

      await promisePool.query(`
        CREATE TABLE IF NOT EXISTS expenses (
          expenseId VARCHAR(36) PRIMARY KEY,
          userId VARCHAR(36) NOT NULL,
          expenseNumber INT NOT NULL,
          issueDate DATE NOT NULL,
          invoiceNumber VARCHAR(255) NOT NULL,
          supplierName VARCHAR(255) NOT NULL,
          generalDescription TEXT,
          invoiceImage VARCHAR(255),  -- to store the file path or URL
          createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (userId) REFERENCES users(userId) ON DELETE CASCADE
        );
      `);

      console.log('Tables created successfully!');
  } catch (error) {
      console.error('Error creating tables:', error);
      process.exit(1); // Exit the application if table creation fails
  }
}

export const promisePool = pool.promise();

const platformLogMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const userAgent = req.headers["user-agent"];
  console.log('userAgent: ', userAgent);
  next();
};

app.set('view engine', 'ejs');
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

(async function initialize() {
  await checkDatabaseConnection();
  await createTables(); // Ensure tables are created before starting the server
  app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
  });
})();