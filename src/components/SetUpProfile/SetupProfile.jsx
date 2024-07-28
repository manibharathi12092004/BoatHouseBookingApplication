import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setProfile } from '../Redux/authActions';
import { useNavigate } from 'react-router-dom';
import './SetupProfile.css';
import { GiCrossMark } from "react-icons/gi";
import { Link } from 'react-router-dom';

const SetupProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [bio, setBio] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const profileData = { name, email, phone, address, bio };
    dispatch(setProfile(profileData));
    navigate('/profile');
  };

  return (
    <div className="setup-profile-container">
    <Link to="/profile">
        <GiCrossMark className="cross3" />
    </Link>
      <h1>Setup Your Profile</h1>
      <form onSubmit={handleSubmit} className="setup-profile-form">
        <label>
          Name:
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </label>
        <label>
          Email:
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </label>
        <label>
          Phone:
          <input 
            type="tel" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            required 
          />
        </label>
        <label>
          Address:
          <input 
            type="text" 
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
            required 
          />
        </label>
        <label>
          Bio:
          <textarea 
            value={bio} 
            onChange={(e) => setBio(e.target.value)} 
            required 
          />
        </label>
        <button type="submit" className="submit-button">Save Profile</button>
      </form>
    </div>
  );
};

export default SetupProfile;
