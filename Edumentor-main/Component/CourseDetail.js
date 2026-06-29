import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./CourseDetail.css";

const coursesList = [
  { title: "Web Development", description: "Learn full-stack web development.", duration: "3 months" },
  { title: "Data Science", description: "Explore Machine Learning and Analytics.", duration: "4 months" },
  { title: "Digital Marketing", description: "Master SEO, SEM, and Social Media strategies.", duration: "2 months" },
  { title: "Graphic Design", description: "Learn graphic design principles and tools.", duration: "3 months" },
  { title: "C Programming", description: "Master C programming fundamentals.", duration: "2 months" },
  { title: "Python Programming", description: "Explore Python programming and its applications.", duration: "3 months" },
  { title: "C++", description: "Learn C++ programming and object-oriented concepts.", duration: "3 months" },
  { title: "SQL", description: "Learn database management using SQL.", duration: "2 months" },
  { title: "Data Structure and Algorithms", description: "Master DSA for better problem solving and coding interviews.", duration: "4 months" },
];

const CourseDetail = () => {
  const { title } = useParams();
  const course = coursesList.find((c) => c.title === decodeURIComponent(title));

  const [enrolled, setEnrolled] = useState(false);

  useEffect(() => {
    const enrolledCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    if (enrolledCourses.some((c) => c.title === course.title)) {
      setEnrolled(true);
    }
  }, [course.title]);

  const handleEnroll = () => {
    const storedCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
  
    const newCourse = { title: course.title, description: course.description, duration: course.duration };
  
    if (!storedCourses.some((c) => c.title === newCourse.title)) {
      const updatedCourses = [...storedCourses, newCourse];
      localStorage.setItem("enrolledCourses", JSON.stringify(updatedCourses));
      setEnrolled(true);
    }
  };
  
  if (!course) return <h2>Course not found</h2>;

  return (
    <div className="course-detail-container">
      <div className="course-detail-card">
        <h2>{course.title}</h2>
        <p>{course.description}</p>
        <p><strong>Duration:</strong> {course.duration}</p>

        {enrolled ? (
          <button className="enroll-button" disabled>Enrolled</button>
        ) : (
          <button className="enroll-button" onClick={handleEnroll}>Enroll Now</button>
        )}

        <Link to={`/course-overview/${encodeURIComponent(course.title)}`}>
          <button className="overview-button">Course Overview</button>
        </Link>

        <Link to="/Courses">
          <button className="back-button">Back to Courses</button>
        </Link>
      </div>
    </div>
  );
};

export default CourseDetail;
