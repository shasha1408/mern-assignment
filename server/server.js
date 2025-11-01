require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect Database
connectDB(process.env.MONGO_URI);

// ✅ Use routes (make sure these files exist)
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

// Default route
app.get('/', (req, res) => {
  res.send('API running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
