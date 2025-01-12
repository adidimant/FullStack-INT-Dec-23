import { pool } from './src/index';

async function createTables() {
    try {
        const poolPromise = pool.promise();
  
        // 
        await poolPromise.query(`
            CREATE TABLE IF NOT EXISTS verification_codes (
                email VARCHAR(255) PRIMARY KEY,
                code VARCHAR(6) NOT NULL,
                createdDate DATETIME NOT NULL
            );
        `);
  
        //
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
  
        await poolPromise.query(`
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
  
        await poolPromise.query(`
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
        process.exit(1); // סיום התהליך עם קוד שגיאה
    }
  };

  createTables();
  
  