const express = require('express');
const router = express.Router();   // ✅ this line is missing in your file

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const auth = require('../middleware/authMiddleware');

// Register
router.post('/register', async (req, res) => {
  // your register logic
});

// Login
router.post('/login', async (req, res) => {
  // your login logic
});

// Get user
router.get('/me', auth, async (req, res) => {
  // your get user logic
});

// ✅ important line
module.exports = router;
