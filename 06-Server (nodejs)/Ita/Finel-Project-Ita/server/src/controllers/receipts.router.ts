import express, { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { promisePool } from '../index'; // Assuming server.ts exports the promise pool
import { uploadInvoice, uploadProfilePicture } from '../middlewares/upload';
import fs from 'fs';
import path from 'path';
import {transporter} from '../controllers/users.router'
import { RowDataPacket } from 'mysql2';


const receiptsRouter = express.Router();

type User = {
  companyName: string;
  companyNumber: string;
  address: string;
  city: string;
  profilePic?: string;
}

type ReceiptData = {
  userId: string;
  customerName: string;
  receiptNumber: number;
  date: string;
  description: string;
  receiptType: string;
  paymentDate: string;
  amount: number;
  bank?: string;
  branch?: string;
  account?: string;
  details?: string;
  footerContent?: string;
  customerEmail?: string;
  emailContent?: string;
  shouldSendEmail: boolean;
}

type UserData = {
  companyName: string;
  companyEmail: string;
};

type RequiredField = keyof Pick<ReceiptData, 'userId' | 'customerName' | 'date' | 'description' | 'receiptType' | 'paymentDate' | 'amount'>;

//מביא מספר אחרון של קבלה לפי משתמשמ
receiptsRouter.get('/next-receipt-number/:userId', async (req: Request, res: Response): Promise<void> => {
  const { userId } = req.params;  // Changed from req.body to req.params
  
  if (!userId) {
      res.status(400).send('User ID is required');
      return;
  }

  try {
      const [rows]: any = await promisePool.query(
          `SELECT MAX(receiptNumber) AS lastReceiptNumber FROM receipts WHERE userId = ?`,
          [userId]
      );
      const lastReceiptNumber = rows[0]?.lastReceiptNumber ?? 2999;
      const companyName = rows[0]?.companyName || null;
      const nextReceiptNumber = lastReceiptNumber + 1;
      
      res.json({ nextReceiptNumber });
  } catch (error) {
      console.error('Error fetching next receipt number:', error);
      res.status(500).send('Error fetching next receipt number.');
  }
});

// שמירת קבלה במסד נתנוים
receiptsRouter.post('/save', async (req, res): Promise<void> => {
  try {
    const {
      userId,
      receiptNumber,
      customerName,
      date,
      description,
      receiptType,
      paymentDate,
      amount,
      bank,
      branch,
      account,
      details,
      footerContent,
      customerEmail
    } = req.body;

    // Validate required fields
    const requiredFields = [
      'userId', 'customerName', 'date', 'description',
      'receiptType', 'paymentDate', 'amount'
    ];
    const missingFields = requiredFields.filter(field => !req.body[field]);

    if (missingFields.length > 0) {
      res.status(400).json({ error: `Missing required fields: ${missingFields.join(', ')}` });
      return;
    }

    // Check if receipt number already exists
    const [rows] = await promisePool.query(
      `SELECT * FROM receipts WHERE userId = ? AND receiptNumber = ?`,
      [userId, receiptNumber]
    );
    if ((rows as any[]).length > 0) {
      res.status(400).json({ error: 'Receipt number already exists' });
      return;
    }

    // Generate a unique receipt ID
    const receiptId = uuidv4();

    // Save the receipt to the database
    await promisePool.query(
      `INSERT INTO receipts (
        receiptId, userId, receiptNumber, customerName, date,
        description, receiptType, paymentDate, amount,
        bank, branch, account, details, footerContent, customerEmail
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        receiptId,
        userId,
        receiptNumber,
        customerName,
        date,
        description,
        receiptType,
        paymentDate,
        amount,
        bank || null,
        branch || null,
        account || null,
        details || null,
        footerContent || null,
        customerEmail || null
      ]
    );

    res.status(201).json({
      message: 'Receipt saved successfully!',
      receiptId,
      receiptNumber
    });
  } catch (error) {
    console.error('Error saving receipt:', error);
    res.status(500).json({ error: 'Failed to save receipt' });
  }
});


// שליחת קבלה במייל ללקוח
receiptsRouter.post('/send-email', uploadInvoice.single('pdf'), async (req: Request, res: Response): Promise<void> => {
  try {
      const { receiptNumber, userId, customerEmail, emailContent } = req.body;

      // Validation
      if (!receiptNumber || !userId || !customerEmail) {
          res.status(400).json({ error: 'Missing required fields: receiptNumber, userId, or customerEmail' });
          return;
      }

      if (!req.file) {
          res.status(400).json({ error: 'PDF file is required' });
          return;
      }

      // Get user data
      const [rows] = await promisePool.query(
          `SELECT companyName, email as companyEmail FROM users WHERE userId = ?`,
          [userId]
      );

      const userData: UserData[] = rows as UserData[];

      if (!userData || userData.length === 0) {
          res.status(404).json({ error: 'User not found' });
          return;
      }

      const { companyName, companyEmail } = userData[0];

      // Get the full path of the uploaded file
      const filePath = req.file.path;

      // Send email with attachment
      await transporter.sendMail({
          from: `${companyName} <${companyEmail}>`,
          to: customerEmail,
          subject: `קבלה מספר ${receiptNumber} - ${companyName}`,
          html: `
              <div dir="rtl">
                  <p>שלום,</p>
                  <p>מצורפת קבלה עבור התשלום שהתקבל.</p>
                  ${emailContent ? `<p>${emailContent}</p>` : ''}
                  <p>בברכה,<br>${companyName}</p>
              </div>
          `,
          attachments: [
              {
                  filename: `receipt_${receiptNumber}.pdf`,
                  content: fs.readFileSync(filePath), // Read file content directly
                  contentType: 'application/pdf',
              }
          ]
      });

      // Clean up: Delete the file after sending
      fs.unlinkSync(filePath);

      res.status(200).json({
          message: 'Email sent successfully',
          receiptNumber,
          customerEmail,
      });
  } catch (error) {
      console.error('Error in /send-email:', error);
      if (req.file && fs.existsSync(req.file.path)) {
          fs.unlinkSync(req.file.path); // Clean up file if email fails
      }
      res.status(500).json({ error: 'An unexpected error occurred. Please try again later.' });
  }
});


















// מביא קבלות\נתוני הכנסה עבור משתמש ספציפי
// In your receiptsRouter.ts
receiptsRouter.get('/user/:userId', async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const [rows]: any = await promisePool.query(`
      SELECT 
        receiptNumber,
        customerName,
        description,
        receiptType as paymentType,
        paymentDate,
        amount,
        date,
        bank,
        branch,
        account,
        details,
        footerContent
      FROM receipts 
      WHERE userId = ? 
      ORDER BY createdAt DESC
    `, [userId]);

    res.json(rows);
  } catch (error) {
    console.error('Error fetching receipts:', error);
    res.status(500).send('Error fetching receipts.');
  }
});

// עידכון קבלה (כנראה שלא צריך בכלל)
receiptsRouter.put('/update/:receiptId', async (req: Request, res: Response) => {
  const { receiptId } = req.params;
  const {
    customerName,
    date,
    description,
    receiptType,
    paymentDate,
    amount,
    bank,
    branch,
    account,
    details,
    footerContent,
    customerEmail,
  } = req.body;

  try {
    const [result]: any = await promisePool.query(
      `UPDATE receipts SET 
        customerName = ?,
        date = ?,
        description = ?,
        receiptType = ?,
        paymentDate = ?,
        amount = ?,
        bank = ?,
        branch = ?,
        account = ?,
        details = ?,
        footerContent = ?,
        customerEmail = ?
      WHERE receiptId = ?`,
      [
        customerName,
        date,
        description,
        receiptType,
        paymentDate,
        amount,
        bank,
        branch,
        account,
        details,
        footerContent,
        customerEmail,
        receiptId,
      ]
    );

    if (result.affectedRows > 0) {
      res.json({ message: 'Receipt updated successfully!' });
    } else {
      res.status(404).send('Receipt not found.');
    }
  } catch (error) {
    console.error('Error updating receipt:', error);
    res.status(500).send('Error updating receipt.');
  }
});


// העלאת נתוני חשבונית ותמונה
receiptsRouter.post('/upload-invoice', uploadProfilePicture.single('invoiceImage'), async (req: Request, res: Response) => {
  const {
    userId,
    issueDate,
    invoiceNumber,
    supplierName,
    generalDescription,
  } = req.body;
  const invoiceImage = req.file?.path; // File path after upload

  try {
    // Fetch the latest expense number for the user
    const [rows]: any = await promisePool.query(
      `SELECT MAX(expenseNumber) AS lastExpenseNumber FROM expenses WHERE userId = ?`,
      [userId]
    );

    const lastExpenseNumber = rows[0]?.lastExpenseNumber || 2999;
    const newExpenseNumber = lastExpenseNumber + 1;

    const expenseId = uuidv4();

    await promisePool.query(
      `INSERT INTO expenses (
        expenseId, userId, expenseNumber, issueDate, invoiceNumber, supplierName, generalDescription, invoiceImage
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        expenseId,
        userId,
        newExpenseNumber,
        issueDate,
        invoiceNumber,
        supplierName,
        generalDescription,
        invoiceImage,
      ]
    );

    res.status(201).json({
      message: 'Invoice uploaded successfully!',
      expenseId,
      expenseNumber: newExpenseNumber,
    });
  } catch (error) {
    console.error('Error uploading invoice:', error);
    res.status(500).send('Error uploading invoice.');
  }
});

// קבלת נתוני הכנסה והוצאה לפי שנה
receiptsRouter.get('/monthly-summary/:year', async (req: Request, res: Response) => {
  const { year } = req.params;

  try {
    const [rows]: any = await promisePool.query(`
      SELECT
        MONTH(paymentDate) AS month,
        SUM(CASE WHEN receiptType IN ('Bank transfer', 'Cash', 'bit', 'paybox', 'Check', 'Credit card') THEN amount ELSE 0 END) AS income,
        SUM(CASE WHEN receiptType = 'Expense' THEN amount ELSE 0 END) AS expenses
      FROM receipts
      WHERE YEAR(paymentDate) = ?
      GROUP BY MONTH(paymentDate)
      ORDER BY MONTH(paymentDate) ASC;
    `, [year]);

    // Convert months to names (if needed)
    const formattedData = rows.map((row: any) => ({
      month: new Date(0, row.month - 1).toLocaleString('en', { month: 'long' }), // Converts month numbers to names
      income: row.income || 0,
      expenses: row.expenses || 0,
    }));

    res.json(formattedData);
  } catch (error) {
    console.error('Error fetching monthly summary:', error);
    res.status(500).send({ error: 'Could not fetch monthly summary' });
  }
});

// קבלת שנת רישום של המשתמש (גם לצורך קלט עם בחירת שנה)
receiptsRouter.get('/registrationYear/:userId', async (req: Request, res: Response): Promise<void> => {
  const { userId } = req.params; // Use req.query for GET requests to pass parameters

  try {
    const [rows]: any = await promisePool.query(
      `SELECT createdDate FROM users WHERE userId = ?`,
      [userId]
    );

    // Check if rows are empty or user not found
    if (!rows || rows.length === 0) {
      res.status(404).json({ message: "No registration year found" });
      return
    }

    // Extract and format the registration year
    const registrationYear = new Date(rows[0].createdDate).getFullYear();

    // Send response with the registration year
    res.status(200).json({ registrationYear });
  } catch (error) {
    console.error("Error fetching registration year:", error);
    res.status(500).json({ message: "Error fetching registration year" });
  }
});




export default receiptsRouter;
