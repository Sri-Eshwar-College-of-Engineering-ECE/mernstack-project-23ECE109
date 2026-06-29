import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Card } from 'react-bootstrap';
import './Login.css';

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    setErrorMessage('');
  
    try {
      const response = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setIsLoggedIn(true);
        navigate('/courses');
      } else {
        setErrorMessage(data.error || 'Invalid credentials');
      }
    } catch (error) {
      setErrorMessage('Error connecting to server');
    }
  };
  
  return (
    <div className="login-container">
      <Card className="login-card">
        <Card.Body>
          <h2 className="text-center"><center>Login</center></h2>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <Form onSubmit={handleLogin}>
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
            <Button variant="primary" type="submit" className="w-100 mt-3">Login</Button>
          </Form>
          <p className="text-center mt-3">
            Don't have an account? <a href="/signup">Signup</a>
          </p>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;