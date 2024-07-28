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
      <h1>Your Profile</h1>
      {profile ? (
        <div className="profile-details">
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
        <div>
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
