import jwt from 'jsonwebtoken';
import { logger } from '../../utils/logger.js';

export const verifyToken = async (req, res) => {
  try {
    const { token } = req.body;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ valid: true, userId: decoded.userId });
  } catch (error) {
    logger.error('Token verification error:', error);
    res.json({ valid: false });
  }
};