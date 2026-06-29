import React from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';

const coursesList = [
  { 
    title: "Web Development", 
    image: "https://miro.medium.com/v2/resize:fit:1200/0*M4bxiCIjcTK-2Xr6.jpeg"
  },
  { 
    title: "Data Science",
    image: "https://www.iimtindia.net/Blog/wp-content/uploads/2021/06/Data-Science.jpg"
  },
  {
    title: "Digital Marketing",
    image: "https://onlinegurukul.org/storage/uploads/1658492516-dm.jpeg"
  },
  { 
    title: "Graphic Design",
    image: "http://www.kordahitechnologies.com/sites/default/files/Graphic-designing.png"
  },
  {
    title: "C Programming",
    image: "http://www.ictacademy.in/pages/assets/base/img/content/stock/cprogram.jpg"
  },
  {
    title: "Python Programming",
    image: "https://static.skillshare.com/uploads/video/thumbnails/c073470e95824079bc93e74d1bd5bdb5/original"
  },
  {
    title: "C++",
    image: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230304231205/C-Language2.png"
  },
  {
    title: "SQL",
    image: "https://miro.medium.com/v2/resize:fit:1200/1*VDoCtgMoTijXbq1P73PuFg.jpeg"
  },
  {
    title: "Data Structure and Algorithms",
    image: "http://www.thinknexttraining.com/images/data-structues-and-algorithms-mob.jpg"
  },
  // Add other courses here...
];
const Courses = () => (
  <div className="courses-container">
    <h2>Courses</h2>
    <p>Explore our courses designed to boost your skills and knowledge.</p>

    <div className="courses-list">
      {coursesList.map((course, index) => (
        <div className="course-card" key={index}>
          {course.image && <img src={course.image} alt={course.title} className="course-image" />}
          <h3>{course.title}</h3>
          
          {/* Link to the course details */}
          <Link to={`/course/${encodeURIComponent(course.title)}`}>
            <button className="enroll-button">View Details</button>
          </Link>
        </div>
      ))}
    </div>

    {/* My Courses Button */}
    <div className="my-courses-button-container">
  <Link to="/my-courses">
    <button className="my-courses-button">
      <i className="fas fa-shopping-basket"></i> {/* Basket icon */}
      My Courses
    </button>
  </Link>
</div>

  </div>
);

export default Courses;
