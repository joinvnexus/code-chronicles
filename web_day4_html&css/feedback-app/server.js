const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

// dotenv config
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/feedback_app';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const feedbackRoutes = require('./routes/feedback');
app.use('/api/feedback', feedbackRoutes);

// Serve index.html for root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve feedback list
app.get('/feedbacks', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'feedbacks.html'));
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
})

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));