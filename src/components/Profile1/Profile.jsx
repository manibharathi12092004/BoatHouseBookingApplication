import React from 'react';
import { useSelector } from 'react-redux';
import './Profile.css';
import { Link } from 'react-router-dom';
import { GiCrossMark } from "react-icons/gi";

const Profile = () => {
  const profile = useSelector((state) => state.auth.profile);

  return (
    <div className="profile-container">
      <Link to="/">
        <GiCrossMark className="cross4" />
      </Link>
      {profile ? (
        <div className="profile-details">
          <h1>Your Profile</h1>
          <div className="usser-container">
            <img src="/img/user2.jpg" alt="User Icon" className="usser" />
          </div>
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Phone:</strong> {profile.phone}</p>
          <p><strong>Address:</strong> {profile.address}</p>
          <p><strong>Bio:</strong> {profile.bio}</p>
          <Link to="/setup-profile">
            <button className="edit-button">Edit Profile</button>
          </Link>
        </div>
      ) : (
        <div className="profile-container2">
          <h1>Your Profile</h1>
          <p>No profile found. Please set up your profile.</p>
          <Link to="/setup-profile">
            <button className="edit-button">Profile Set Up</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Profile;
