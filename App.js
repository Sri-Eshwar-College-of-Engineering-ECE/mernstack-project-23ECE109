import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Home from './Component/Home';
import Navbar from "./Component/Navbar";
import AboutUs from './Component/AboutUs';
import Courses from './Component/Courses';
import Contact from './Component/Contact';
import Login from './Component/Login';
import Signup from './Component/Signup';
import CourseDetail from "./Component/CourseDetail";
import CourseOverview from './Component/CourseOverview';
import MyCourses from './Component/MyCourses';
import CoursePage from './Component/CoursePage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/courses" element={isLoggedIn ? <Courses /> : <Navigate to="/login" />} />
          <Route path="/course/:title" element={isLoggedIn ? <CourseDetail /> : <Navigate to="/login" />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/course/:title" element={<CourseDetail />} />
        
        {/* Route for Course Overview */}
        <Route path="/course-overview/:title" element={<CourseOverview />} />
        <Route path="/my-courses" element={<MyCourses />} />
        <Route path="/course-page/:title" element={<CoursePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;