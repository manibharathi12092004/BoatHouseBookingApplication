import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Bookingform.css';

const Bookingform = () => {
    const location = useLocation();
    const { boat } = location.state || {};
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [date, setDate] = useState('');
    const [persons, setPersons] = useState('');
    const [rooms, setRooms] = useState('');
    const [food, setFood] = useState('veg');
    const [days, setDays] = useState('');
    const navigate = useNavigate();

    const getCurrentDate = () => {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0'); 
        const dd = String(today.getDate()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd}`;
    };

    if (!boat) {
        return <div>Loading...</div>;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const bookingDetails = { 
            name, 
            email, 
            age, 
            date, 
            persons, 
            rooms, 
            food, 
            days, 
            boat_id: boat.id,
            boat_name: boat.name 
        };
        const boatDetails = { 
            id: boat.id,
            name: boat.name,
            price: boat.price,
            location: boat.location, 
            user_email: email
        };


        axios.post('http://localhost:8000/api/bookings/', bookingDetails)
            .then(response => {
                console.log("Booking details:", response.data);
                alert('Booking confirmed.Payment details will be send through Email or Whatsapp');
                return axios.post('http://localhost:8000/api/boats/', boatDetails);
            })
            .then(boatResponse => {
                console.log("Boat details stored:", boatResponse.data);
                navigate('/');
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Failed to confirm booking. Please try again.');
            });
    };

    return (
        <div className="booking-form-container">
            <h1>Booking for {boat.name}</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <label>
                    Age:
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
                </label>
                <label>
                    Date:
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} min={getCurrentDate()} required />
                </label>
                <label>
                    Number of Persons:
                    <input type="number" value={persons} onChange={(e) => setPersons(e.target.value)} required />
                </label>
                <label>
                    Number of Rooms:
                    <input type="number" value={rooms} onChange={(e) => setRooms(e.target.value)} required />
                </label>
                <label>
                    Food Preference:
                    <select value={food} onChange={(e) => setFood(e.target.value)} required>
                        <option value="veg">Veg</option>
                        <option value="non-veg">Non-Veg</option>
                    </select>
                </label>
                <label>
                    Number of Days Staying:
                    <input type="number" value={days} onChange={(e) => setDays(e.target.value)} required />
                </label>
                <button type="submit">Confirm Booking</button>
                <button type="button" onClick={() => navigate(-1)}>Cancel</button>
            </form>
        </div>
    );
};

export default Bookingform;
