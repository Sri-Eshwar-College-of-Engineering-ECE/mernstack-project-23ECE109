import React from 'react';
import './Contact.css'; 

const Contact = () => (
  <div className="contact-container">
    <h2>Contact Us</h2>
    <p>Feel free to reach out to us at support@edumentor.com.</p>
    <p>Alternatively, you can use the form below to send us a message:</p>

    <form className="contact-form">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" placeholder="Your Name" required />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" placeholder="Your Email" required />

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" rows="4" placeholder="Your Message" required></textarea>

      <button type="submit">Send Message</button>
    </form>
  </div>
);

export default Contact;