import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../../models/User.js';
import { logger } from '../../utils/logger.js';

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Hash password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const user = new User({
      name,
      email: email.toLowerCase(),
      password: hashedPassword
    });

    // Save the user
    await user.save();

    // Create a JWT token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    // Respond with the user and token
    res.status(201).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar || null
      }
    });
  } catch (error) {
    logger.error('Registration error:', error);
    res.status(500).json({ message: 'Server error during registration', error: error.message });
  }
};
