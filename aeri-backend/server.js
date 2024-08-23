const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const authMiddleware = require('./middleware/authMiddleware');

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.setTimeout(120000, () => { // 2 minutes timeout
    res.status(503).send('Request timed out');
  });
  next();
});

// Connect to MongoDB
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api/auth', require('./routes/authRoutes'));

// Protected route example
app.get('/protected-route', authMiddleware, (req, res) => {
  res.json({ msg: 'This is a protected route' });
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
