import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './SignUp.css';
import { sign_Up } from '../Redux/authActions'; 

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3001/users', { name, email, password });
      dispatch(sign_Up(email, 'dummy-token'));
      alert('Sign Up Successful!');
      navigate('/sign-in');
    } catch (error) {
      console.error('There was an error!', error);
      alert('Failed to Sign Up');
    }
  };

  return (
    <div id="h11">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div id="h14">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div id="h12">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div id="h13">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default SignUp;
