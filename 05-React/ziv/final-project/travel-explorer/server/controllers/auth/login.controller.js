import jwt from 'jsonwebtoken';
import User from '../../models/User.js';
import { logger } from '../../utils/logger.js';

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email and select password field
    const user = await User.findOne({ email: email.toLowerCase() }).select('+password');
    if (!user) {
      return res.status(401).json({ message: 'User does not exist' });
    }

    // Compare the passwords
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'User does not exists' });
    }

    // Create JWT token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    // Respond with the user and token
    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar
      }
    });
  } catch (error) {
    logger.error('Login error:', error);
    res.status(500).json({ message: 'Server error during login' });
  }
};
