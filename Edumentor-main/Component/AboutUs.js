import React from 'react';
import './AboutUs.css'; 

const AboutUs = () => (
  <div className="about-page">
    <div className="about-image">
      <center><img src='\about.jpg' alt="About Us" /></center>
    </div>

    <div className="about-container">
      <h2>About Us</h2>
      <p>EduMentor is dedicated to guiding students towards a successful career by connecting them with industry experts and providing valuable educational resources.</p>
      
      <div className="features">
        <h3>Why Choose EduMentor?</h3>
        <ul>
          <li>🔹 Personalized career guidance from experienced mentors.</li>
          <li>🔹 Access to expert-curated study materials and resources.</li>
          <li>🔹 Live webinars and interactive workshops.</li>
          <li>🔹 Assistance with college and job applications.</li>
          <li>🔹 Networking opportunities with professionals in various fields.</li>
        </ul>
      </div>
    </div>
  </div>
);

export default AboutUs;
