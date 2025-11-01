const express = require('express');
const router = express.Router();
const Note = require('../models/Note');
const auth = require('../middleware/authMiddleware');

// Create note
router.post('/', auth, async (req, res) => {
  res.send('Note created');
});

// Get notes
router.get('/', auth, async (req, res) => {
  res.send('Notes fetched');
});

// ✅ important line at end
module.exports = router;
