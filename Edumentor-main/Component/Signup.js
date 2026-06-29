import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); 
  const navigate = useNavigate(); 

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/signup', { email, password });
      alert(response.data.message);
      navigate('/login');
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Account Already Exist..Please Login');
    }
  };

  return (
    <div className="signup">
      <div className="signup-card">
        <h2><center>Signup</center></h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <Form onSubmit={handleSignup}>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </Form.Group>
          <Button variant="primary" type="submit">Signup</Button>
        </Form>
      </div>
    </div>
  );
}

export default Signup;
