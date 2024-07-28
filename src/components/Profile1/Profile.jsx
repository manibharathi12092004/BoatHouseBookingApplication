import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sign_Out } from '../Redux/authActions';
import './Profile.css';

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useSelector(state => state.auth.email);

  const handleSignOut = () => {
    dispatch(sign_Out());
    alert('You have signed out successfully!');
    navigate('/');
  };

  return (
    <div id="profile">
      <h1>Profile Page</h1>
      <p>Welcome, {email}!</p>
      <button onClick={handleSignOut} className="sign-out-button">Sign Out</button>
    </div>
  );
};

export default Profile;
