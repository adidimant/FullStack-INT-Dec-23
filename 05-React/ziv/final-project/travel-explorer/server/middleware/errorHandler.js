import { logger } from '../utils/logger.js';

export const errorHandler = (err, req, res, next) => {
  logger.error('Unhandled error:', err);

  // פרטי בקשת יומן עבור ניפוי באגים
  logger.debug('Request details:', {
    method: req.method,
    path: req.path,
    body: req.body,
    query: req.query,
    params: req.params,
    headers: {
      ...req.headers,
      authorization: req.headers.authorization ? '[REDACTED]' : undefined
    }
  });

  // טפל בשגיאות אימות נמייה
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      message: 'Validation failed',
      errors: Object.values(err.errors).map(e => e.message)
    });
  }

  // טיפול בשגיאות MongoDB
  if (err.name === 'MongoError' || err.name === 'MongoServerError') {
    if (err.code === 11000) {
      return res.status(400).json({
        message: 'Duplicate key error',
        field: Object.keys(err.keyPattern)[0]
      });
    }
  }

  // תגובת ברירת מחדל לשגיאה
  res.status(err.status || 500).json({
    message: err.message || 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && {
      stack: err.stack,
      details: err
    })
  });
};

/*

מטפל בשגיאות של MongoDB (כולל שגיאות של מפתח כפול), שגיאות של אימות (ValidationError), ומספק תשובה עם פרטי השגיאה במקרה של שגיאות כלליות.
*/