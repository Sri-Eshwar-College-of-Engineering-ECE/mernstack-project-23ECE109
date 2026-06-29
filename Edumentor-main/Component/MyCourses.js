import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MyCourses.css"; 

const MyCourses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    console.log("Retrieved Courses from localStorage:", storedCourses); 
    setEnrolledCourses(storedCourses);
  }, []);

  return (
    <div className="my-courses-container">
      <h2>My Courses</h2>

      {enrolledCourses.length === 0 ? (
        <p>No courses enrolled yet.</p>
      ) : (
        <div className="courses-list">
          {enrolledCourses.map((course, index) => (
            <div className="courses-card" key={index}>
              <h3>{course.title}</h3>

              <Link to={`/course-page/${encodeURIComponent(course.title)}`}>
                        <button className="overview-button">GO TO COURSE</button>
                      </Link>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCourses;
