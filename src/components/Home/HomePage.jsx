import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div id="home">
      <nav className="navbar">
        <Link to='/sign-in'>
          <button className="nav-button">Sign In</button>
        </Link>
        <Link to='/sign-up'>
          <button className="nav-button">Sign Up</button>
        </Link>
        <Link to='/admin-login'>
          <button className="nav-button">Admin</button>
        </Link>
      </nav>
      <div id="home-content">
        <h1>Home</h1>
      </div>
    </div>
  );
};

export default HomePage;
