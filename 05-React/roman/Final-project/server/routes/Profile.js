const express = require('express');
const User = require('../models/User');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Get user profile
router.get('/', protect, async (req, res) => {
  const user = await User.findById(req.user._id).select('-password');
  if (!user) {
    return res.status(404).json({ success: false, message: 'User not found' });
  }
  res.json(user);
});

// Update user profile
router.put('/', protect, async (req, res) => {
  const { name, email, profilePicture } = req.body;
  const user = await User.findById(req.user._id);
  if (!user) {
    return res.status(404).json({ success: false, message: 'User not found' });
  }

  user.name = name || user.name;
  user.email = email || user.email;
  user.profilePicture = profilePicture || user.profilePicture;
  const updatedUser = await user.save();

  res.json(updatedUser);
});

module.exports = router;
