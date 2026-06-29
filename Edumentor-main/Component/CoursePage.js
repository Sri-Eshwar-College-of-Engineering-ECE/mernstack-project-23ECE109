import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CourseOverview.css";

const courseslist = [
  { 
    title: "Web Development", 
    weeks: [
      { week: 1, topic: "Introduction to HTML & CSS", assignment: "Create a simple webpage with HTML and CSS." },
      { week: 2, topic: "Responsive Web Design", assignment: "Make your webpage responsive using media queries." },
      { week: 3, topic: "JavaScript Fundamentals", assignment: "Write JavaScript functions to manipulate the DOM." },
      { week: 4, topic: "Web APIs and Fetching Data", assignment: "Fetch data from a public API and display it." },
      { week: 5, topic: "Backend Development with Node.js", assignment: "Create a basic REST API using Node.js and Express." },
      { week: 6, topic: "React.js for Frontend Development", assignment: "Build a simple React app with components and state management." },
      { week: 7, topic: "Full-Stack Development Concepts", assignment: "Integrate frontend and backend to create a full-stack application." },
      { week: 8, topic: "Deploying and Hosting Web Applications", assignment: "Deploy your full-stack project on a cloud platform." }
    ]
  },
  { 
    title: "Data Science", 
    weeks: [
      { week: 1, topic: "Introduction to Data Science and Python", assignment: "Write Python scripts for basic data operations." },
      { week: 2, topic: "Data Preprocessing and Cleaning", assignment: "Clean and preprocess a given dataset." },
      { week: 3, topic: "Exploratory Data Analysis (EDA)", assignment: "Perform EDA on a dataset using Pandas and Matplotlib." },
      { week: 4, topic: "Statistical Modeling", assignment: "Build a statistical model and analyze its accuracy." },
      { week: 5, topic: "Machine Learning Algorithms", assignment: "Implement a simple machine learning model using Scikit-learn." },
      { week: 6, topic: "Data Visualization with Python", assignment: "Create visualizations using Matplotlib and Seaborn." },
      { week: 7, topic: "Model Evaluation and Optimization", assignment: "Optimize an ML model and evaluate its performance." },
      { week: 8, topic: "Working with Big Data", assignment: "Process a large dataset using Spark or Hadoop." }
    ]
  }
];

const storeCoursesInLocalStorage = () => {
  const existingCourses = JSON.parse(localStorage.getItem('courseslist')) || [];

  if (existingCourses.length === 0) {
    localStorage.setItem('courseslist', JSON.stringify(courseslist));
  }
};

const CourseOverview = () => {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);
  const course = courseslist.find((c) => c.title === decodedTitle);

  useEffect(() => {
    storeCoursesInLocalStorage();
  }, []);

  if (!course) return <h2>Course not found</h2>;

  return (
    <div className="course-overview-container">
      <div className="course-overview-card">
        <h2>{course.title}</h2>
        <h3>Syllabus</h3>
        <ul>
          {course.weeks.map((week) => (
            <li key={week.week}>
              <strong>Week {week.week}: </strong>{week.topic}
            </li>
          ))}
        </ul>
        <h3>Assignments</h3>
        <ul>
          {course.weeks.map((week) => (
            <li key={week.week}>
              <strong>Week {week.week}: </strong>{week.assignment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseOverview;
