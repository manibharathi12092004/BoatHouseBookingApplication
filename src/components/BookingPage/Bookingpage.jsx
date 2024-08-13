import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Bookingpage.css';
import { GiCrossMark } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Bookingpage = () => {
    const [bookings, setBookings] = useState([]);
    const [userEmail, setUserEmail] = useState(null);

    useEffect(() => {
        const storedEmail = localStorage.getItem('userEmail');
        if (storedEmail) {
            setUserEmail(storedEmail);
        }
    }, []);

    useEffect(() => {
        if (userEmail) {
            axios.get('http://localhost:8000/api/bookings/')
                .then(response => {
                    const data = response.data;
                    const userBookings = data.filter(booking => booking.email === userEmail);
                    setBookings(userBookings);
                })
                .catch(error => {
                    console.error('Error fetching bookings:', error);
                });
        }
    }, [userEmail]);

    return (
        <div>    
            <div className="cc3">
                <Link to="/">
                    <GiCrossMark className="cross68" />
                </Link>
            </div>  
            <div className="booking-page-container">
                <h1>Your Bookings</h1>
                <div className="booking-grid">
                    {bookings.length > 0 ? (
                        bookings.map(booking => (
                            <div key={booking.id} className="booking-card">
                                <h2>{booking.boat_name}</h2>
                                <p>Date: {booking.date}</p>
                                <p>Days: {booking.days}</p>
                                <p>Persons: {booking.persons}</p>
                                <p>Rooms: {booking.rooms}</p>
                                <p>Food: {booking.food}</p>
                            </div>
                        ))
                    ) : (
                        <p>No bookings found.</p>
                    )}
                </div>
            </div>
        </div>    
    );
};

export default Bookingpage;
