
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
const HomePage = () => {
  return (
    <div id="home">
      <div id="home1">

        <Link to='/'>
          <button>Home</button>
        </Link>
      </div>
      <div id="home2">
        <Link to='/Sign-in'>
          <button>Sign In</button>
        </Link>
      </div>  
      <div id="home3">
        <Link to='/Sign-up'>
          <button>Sign Up</button>
        </Link>
      </div>    
    </div>
  );
};

export default HomePage;
