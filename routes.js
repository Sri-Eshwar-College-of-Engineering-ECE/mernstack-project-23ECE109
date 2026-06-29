const express = require('express');
const { signupUser, loginUser, getEnrolledCourses } = require('./controllers');
const router = express.Router();

// Signup route
router.post('/signup', signupUser);

// Login route
router.post('/login', loginUser);

// Get enrolled courses route
router.get('/courses', getEnrolledCourses);

module.exports = router;