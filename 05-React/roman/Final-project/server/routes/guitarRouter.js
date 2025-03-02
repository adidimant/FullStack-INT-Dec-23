const express = require('express');
const Guitar = require('../models/Guitar');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Get all guitars (accessible to unauthenticated users)
router.get('/', async (req, res) => {
  const guitars = await Guitar.find();
  res.json(guitars);
});

// Get guitar by ID (accessible to unauthenticated users)
router.get('/:id', async (req, res) => {
  const guitar = await Guitar.findById(req.params.id);
  if (!guitar) {
    return res.status(404).json({ success: false, message: 'Guitar not found' });
  }
  res.json(guitar);
});

// Add a new guitar (protected)
router.post('/', protect, async (req, res) => {
  const { name, description, categories, image } = req.body;
  const guitar = new Guitar({
    name,
    description,
    categories,
    image,
    user: req.user._id,
  });
  try {
    const createdGuitar = await guitar.save();
    res.status(201).json(createdGuitar);
  } catch (error) {
    res.status(400).json({ success: false, error: 'Error adding guitar' });
  }
});

// Update a guitar (protected)
router.put('/:id', protect, async (req, res) => {
  const { name, description, categories, image } = req.body;
  const guitar = await Guitar.findById(req.params.id);
  if (guitar.user.toString() !== req.user._id.toString()) {
    return res.status(401).json({ success: false, message: 'Not authorized' });
  }

  if (guitar) {
    guitar.name = name;
    guitar.description = description;
    guitar.categories = categories;
    guitar.image = image;
    const updatedGuitar = await guitar.save();
    res.json(updatedGuitar);
  } else {
    res.status(404).json({ success: false, message: 'Guitar not found' });
  }
});

// Delete a guitar (protected)
router.delete('/:id', protect, async (req, res) => {
  const guitar = await Guitar.findById(req.params.id);
  if (guitar.user.toString() !== req.user._id.toString()) {
    return res.status(401).json({ success: false, message: 'Not authorized' });
  }

  if (guitar) {
    await Guitar.deleteOne({ _id: req.params.id });
    res.json({ success: true, message: 'Guitar removed' });
  } else {
    res.status(404).json({ success: false, message: 'Guitar not found' });
  }
});

module.exports = router;
