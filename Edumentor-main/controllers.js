const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// In-memory user and course storage for demonstration
const users = {};
const enrolledCourses = [];

// Signup User
const signupUser = (req, res) => {
  const { email, password } = req.body;

  // Check if user already exists
  if (users[email]) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Hash the password and store user data
  const hashedPassword = bcrypt.hashSync(password, 8);
  users[email] = { email, password: hashedPassword };

  return res.status(201).json({ message: 'User registered successfully' });
};

// Login User
const loginUser = (req, res) => {
  const { email, password } = req.body;

  // Retrieve user data
  const user = users[email];
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Generate a JWT token
  const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
    expiresIn: 86400, // expires in 24 hours
  });

  return res.status(200).json({ token });
};

// Get Enrolled Courses
const getEnrolledCourses = (req, res) => {
  // For simplicity, returning hardcoded courses.
  // In a production app, you would typically fetch this from a database.
  return res.status(200).json(enrolledCourses);
};

module.exports = { signupUser, loginUser, getEnrolledCourses };