import React from "react";
import { useParams, Link } from "react-router-dom";
import "./CourseOverview.css";

const courseslist = [
    { 
      title: "Web Development", 
      overview: "This comprehensive Web Development course covers everything from basic HTML/CSS to advanced JavaScript and full-stack web development using Node.js and React. You'll learn how to build responsive websites, work with APIs, and deploy applications. The course also includes practical projects, preparing you to develop real-world applications and solutions. By the end, you'll be able to build your own fully functional web apps.", 
      mentor: "John Doe, Senior Web Developer with over 10 years of experience in building web applications for leading tech companies. John has worked on large-scale projects and is passionate about teaching modern web technologies.",
      syllabus: `
        - Introduction to HTML & CSS
        - Responsive Web Design
        - JavaScript Fundamentals
        - Web APIs and Fetching Data
        - Backend Development with Node.js
        - React.js for Frontend Development
        - Full-Stack Development Concepts
        - Deploying and Hosting Web Applications
      `,
      assignments: "Assignment 1, Assignment 2"
    },
    { 
      title: "Data Science", 
      overview: "In this Data Science course, you will master data analysis, statistical modeling, and machine learning. You'll explore topics like data cleaning, visualization, exploratory data analysis (EDA), and build predictive models using Python and R. You'll also gain hands-on experience working with real datasets and learn how to interpret and communicate findings effectively. The course is designed to turn you into a data-driven decision maker.", 
      mentor: "Jane Smith, Data Scientist with 8 years of experience in predictive modeling, machine learning, and big data analysis. Jane has worked with top companies in finance and healthcare, using data to drive insights and optimize business strategies.",
      syllabus: `
        - Introduction to Data Science and Python
        - Data Preprocessing and Cleaning
        - Exploratory Data Analysis (EDA)
        - Statistical Modeling
        - Machine Learning Algorithms
        - Data Visualization with Python
        - Model Evaluation and Optimization
        - Working with Big Data
      `,
      assignments: "Assignment 1, Assignment 2"
    },
    { 
      title: "Digital Marketing", 
      overview: "This Digital Marketing course will take you through the key components of online marketing including search engine optimization (SEO), social media marketing, email marketing, content marketing, and Google Analytics. You will learn how to create and manage effective online marketing campaigns, measure their success, and adjust strategies based on data insights. The course includes real-world case studies to help you apply your skills in the industry.", 
      mentor: "Michael Johnson, Digital Marketing Expert with over 12 years of experience in creating successful online campaigns. Michael has worked with several global brands, optimizing their marketing strategies and driving substantial online growth.",
      syllabus: `
        - Introduction to Digital Marketing
        - SEO Fundamentals and Strategy
        - Social Media Marketing
        - Email Marketing Campaigns
        - Content Marketing and Strategy
        - Google Analytics and Metrics
        - Paid Advertising (Google Ads, Facebook Ads)
        - Creating a Marketing Plan
      `,
      assignments: "Assignment 1, Assignment 2"
    },
    { 
      title: "Graphic Design", 
      overview: "This course will teach you the core principles of graphic design, including color theory, typography, layout design, and visual hierarchy. You'll gain proficiency in design tools such as Adobe Photoshop and Illustrator. Throughout the course, you will create a portfolio of designs for branding, advertisements, and digital content. You'll also learn how to craft compelling visuals for both web and print mediums, developing a keen eye for design aesthetics.", 
      mentor: "Alice Williams, Experienced Graphic Designer and Creative Director with a background in branding, advertising, and UI/UX design. Alice has designed for top marketing firms and led design teams for international companies.",
      syllabus: `
        - Introduction to Graphic Design Principles
        - Typography and Layout Design
        - Color Theory in Design
        - Branding and Identity Design
        - Adobe Photoshop and Illustrator Tools
        - Web and Print Design Best Practices
        - Portfolio Building and Design Showcase
        - Creative Thinking and Problem Solving
      `,
      assignments: "Assignment 1, Assignment 2"
    },
    { 
      title: "C Programming", 
      overview: "This course introduces you to C, one of the most powerful and widely used programming languages. You will learn the syntax and structure of C, including how to work with variables, loops, functions, and arrays. Additionally, you’ll dive into more advanced topics such as memory management, pointers, and file handling. The hands-on projects in the course will help you build a strong foundation in programming, setting you up for success in any field of computer science.", 
      mentor: "Robert Brown, Software Engineer with a passion for teaching C programming. Robert has over 15 years of experience in systems programming, including embedded systems, and has mentored hundreds of students in learning foundational programming.",
      syllabus: `
        - Introduction to C Programming
        - Variables, Data Types, and Operators
        - Control Structures (if, for, while)
        - Functions and Recursion
        - Arrays and Pointers
        - Memory Management
        - File Handling in C
        - Advanced C Topics (Structures, Linked Lists)
      `,
      assignments: "Assignment 1, Assignment 2"
    },
    { 
      title: "Python Programming", 
      overview: "Python is one of the most versatile languages in the world of programming. This course will teach you Python from the basics to advanced concepts. You'll learn how to handle data, write functions, build applications, and automate tasks. The course also covers object-oriented programming, web development with Django, and working with databases. By the end of this course, you'll be able to create web apps, machine learning models, and automation scripts.", 
      mentor: "Sarah Lee, Python Developer with a focus on data science and machine learning. Sarah has worked with various tech startups and has experience using Python in fields like data analysis, web development, and AI.",
      syllabus: `
        - Introduction to Python and Setup
        - Variables, Data Structures, and Control Flow
        - Functions and Modules
        - Object-Oriented Programming in Python
        - Web Development with Django
        - Database Connectivity with Python
        - Automation with Python Scripts
        - Introduction to Machine Learning
      `,
      assignments: "Assignment 1, Assignment 2"
    },
    { 
      title: "C++", 
      overview: "C++ is a powerful language that is used in system-level programming, game development, and performance-critical applications. This course will teach you the fundamental concepts of object-oriented programming, memory management, and low-level operations. You'll also work on building applications using advanced features like templates and exception handling. By the end of the course, you’ll have a deep understanding of how C++ works and how to apply it to real-world projects.", 
      mentor: "David Carter, C++ Expert with over 20 years of experience in developing high-performance applications, including games and enterprise systems. David has a deep understanding of C++ memory management and system architecture.",
      syllabus: `
        - Introduction to C++ and Setup
        - Variables, Functions, and Loops
        - Object-Oriented Programming Concepts
        - Memory Management and Pointers
        - C++ Advanced Features (Templates, Exception Handling)
        - Working with Data Structures in C++
        - Building a C++ Project
        - Optimization Techniques in C++
      `,
      assignments: "Assignment 1, Assignment 2"
    },
    { 
      title: "SQL", 
      overview: "SQL (Structured Query Language) is the standard language used to interact with databases. This course will teach you how to write complex queries, join multiple tables, and manage databases efficiently. You'll also explore advanced SQL concepts such as indexing, transactions, and stored procedures. The course will help you gain the skills needed to work with relational databases, making you an expert in managing data and building efficient database systems.", 
      mentor: "Emily Davis, Database Administrator with over 10 years of experience in managing large-scale SQL databases. Emily has worked in various industries, including finance and e-commerce, and specializes in database optimization and query performance.",
      syllabus: `
        - Introduction to SQL and Databases
        - SQL Query Basics (SELECT, WHERE, JOIN)
        - Grouping, Sorting, and Filtering Data
        - Advanced SQL Queries (Subqueries, Joins)
        - Database Design and Normalization
        - Transactions and Indexing
        - Stored Procedures and Triggers
        - SQL Performance Optimization
      `,
      assignments: "Assignment 1, Assignment 2"
    },
    { 
      title: "Data Structure and Algorithms", 
      overview: "This course covers essential data structures such as arrays, stacks, queues, linked lists, trees, and graphs. You'll also learn important algorithms for searching, sorting, and optimization. Through hands-on projects, you'll develop your problem-solving skills and learn how to apply these structures and algorithms to optimize solutions for real-world challenges. This course is perfect for anyone preparing for coding interviews and software development roles.", 
      mentor: "Brian Miller, Senior Software Engineer with 12 years of experience in algorithm design and problem-solving. Brian has a background in working on large-scale systems and has helped countless students prepare for technical interviews at top companies.",
      syllabus: `
        - Introduction to Data Structures
        - Arrays, Linked Lists, Stacks, and Queues
        - Trees, Graphs, and Heaps
        - Sorting Algorithms (QuickSort, MergeSort)
        - Searching Algorithms (Binary Search)
        - Dynamic Programming
        - Graph Algorithms (BFS, DFS, Dijkstra's)
        - Interview-Style Coding Challenges
      `,
      assignments: "Assignment 1, Assignment 2"
    },
  ];
  
  const storeCoursesInLocalStorage = () => {
    const existingCourses = JSON.parse(localStorage.getItem('courseslist')) || [];
  
    if (existingCourses.length === 0) {
      localStorage.setItem('courseslist', JSON.stringify(courseslist));
    }
  };

  const CourseOverview = () => {
    const { title } = useParams();
    const course = courseslist.find((c) => c.title === decodeURIComponent(title));
  
    if (!course) return <h2>Course not found</h2>;
  
    return (
      <div className="course-overview-container">
        <div className="course-overview-card">
          <h2>{course.title} - Overview</h2>
          <p>{course.overview}</p>
          
          <h3>Mentor</h3>
          <p>{course.mentor}</p>
  
          <h3>Syllabus</h3>
          <pre>{course.syllabus}</pre>
  
          <Link to={`/course/${encodeURIComponent(course.title)}`}>
            <button className="back-button">Back to Course Details</button>
          </Link>
        </div>
      </div>
    );
  };
  

export default CourseOverview;
