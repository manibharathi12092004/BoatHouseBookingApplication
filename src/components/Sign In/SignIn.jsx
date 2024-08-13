import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './SignIn.css';
import { signIn } from '../Redux/authActions';
import { GiCrossMark } from "react-icons/gi";

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage('');

    try {
      const response = await axios.get('http://localhost:8000/api/users/');
      const users = response.data;

      const user = users.find(u => u.email === email && u.password === password);

      if (user) {
        localStorage.setItem('userEmail', email); // Store user email in localStorage
        localStorage.setItem('authToken', 'dummy-token'); // Store dummy token in localStorage
        dispatch(signIn(email, 'dummy-token')); 
        alert('Sign In Successful!');
        navigate('/');
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('There was an error!', error);
      setErrorMessage('Failed to Sign In');
    }
  };

  return (
    <div>
      <Link to="/">
        <GiCrossMark className="cross11" />
      </Link>
      <div id="h1">
        <div>
          <h1>Sign In</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div id="h2">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div id="h3">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Log In</button>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </form>
        <br />
        <label> Don't Have An Account ? </label>
        <Link to="/sign-up">
          <button type="submit2">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
