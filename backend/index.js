require('dotenv').config();
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/user');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myDatabase')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

// Real-time username availability check
app.get('/check-username/:username', async (req, res) => {
  try {
    const { username } = req.params;
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.json({ exists: true });
    }
    res.json({ exists: false });
  } catch (error) {
    console.error('Error checking username:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Endpoint for user signup with password validation
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  // Password validation: At least 8 characters, one special character, and one capital letter
  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
  if (!passwordRegex.test(password)) {
    return res.status(400).json({ message: 'Password must be at least 8 characters long, contain at least one special character, and one uppercase letter.' });
  }

  // Check if user already exists by email or username
  const existingEmail = await User.findOne({ email });
  const existingUsername = await User.findOne({ username });
  if (existingEmail) {
    return res.status(400).json({ message: 'Email already registered' });
  }
  if (existingUsername) {
    return res.status(400).json({ message: 'Username already taken' });
  }

  // Hash the password and store the user
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Endpoint for user login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Find the user by email
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }

  // Check the password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }

  // Generate JWT (token expires in 1 hour)
  try {
    const token = jwt.sign({ id: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error('Error generating JWT:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
