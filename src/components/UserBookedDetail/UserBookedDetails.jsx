import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserBookedDetails.css';
import { GiCrossMark } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const UserBookedDetails = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/bookings/');
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div id="cc1">
      <Link to="/admin">
        <GiCrossMark className="cross66" />
      </Link>
      <div id="user-booked-details">
        <h1>User Booked Details</h1>
        <table className="user-booked-table">
          <thead>
            <tr>
              <th>User Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Date</th>
              <th>Persons</th>
              <th>Rooms</th>
              <th>Food</th>
              <th>Days</th>
              <th>Boat Name</th> 
            </tr>
          </thead>
          <tbody>
            {bookings.map(booking => (
              <tr key={booking.id}>
                <td>{booking.name}</td>
                <td>{booking.email}</td>
                <td>{booking.age}</td>
                <td>{booking.date}</td>
                <td>{booking.persons}</td>
                <td>{booking.rooms}</td>
                <td>{booking.food}</td>
                <td>{booking.days}</td>
                <td>{booking.boat_name}</td> 
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserBookedDetails;
