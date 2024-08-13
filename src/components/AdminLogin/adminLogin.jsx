import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './adminLogin.css';
import { GiCrossMark } from "react-icons/gi";
import { Link } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const response = await axios.get('http://localhost:8000/api/admins/');
      const admins = response.data;

      const admin = admins.find(a => a.email === email && a.password === password);

      if (admin) {
        localStorage.setItem('isAdmin', 'true');
        alert('Admin Login Successful!');
        navigate('/admin');
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('There was an error!', error);
      setErrorMessage('Failed to Login');
    }
  };

  return (
    <div>
      <Link to="/">
        <GiCrossMark className="cross5" />
      </Link>
      <div id="admin-login">
        <h1>Admin Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
