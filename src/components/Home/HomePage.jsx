import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sign_Out } from '../Redux/authActions';
import './HomePage.css';

const HomePage = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(sign_Out());
    alert('You have signed out successfully!');
    navigate('/');
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div id="home">
      <nav className="navbar">
        {auth.isAuthenticated ? (
          <div className="dropdown">
            <button className="nav-button" onClick={toggleDropdown}>
              Profile
            </button>
            {showDropdown && (
              <div className="dropdown-content">
                <Link to='/profile' className="dropdown-item">Profile</Link>
                <button className="dropdown-item" onClick={handleSignOut}>Sign Out</button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link to='/sign-in'>
              <button className="nav-button">Sign In</button>
            </Link>
          </>
        )}
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
