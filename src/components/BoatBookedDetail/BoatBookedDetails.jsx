import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BoatBookedDetails.css';
import { GiCrossMark } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const BoatBookedDetails = () => {
  const [boats, setBoats] = useState([]);

  useEffect(() => {
    const fetchBoats = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/boats/');
        setBoats(response.data);
      } catch (error) {
        console.error('Error fetching boats:', error);
      }
    };

    fetchBoats();
  }, []);

  return (
    <div>
      <div className="cc2">
        <Link to="/admin">
          <GiCrossMark className="cross67" />
        </Link>
      </div>  
      <div id="boat-booked-details">
        <h1>Boat Booked Details</h1>
        <table className="boat-booked-table">
          <thead>
            <tr>
              <th>Boat Name</th>
              <th>Price</th>
              <th>Location</th>
              <th>User Email</th> 
            </tr>
          </thead>
          <tbody>
            {boats.map(boat => (
              <tr key={boat.boat_id}>
                <td>{boat.name}</td>
                <td>{boat.price}</td>
                <td>{boat.location}</td>
                <td>{boat.user_email || 'N/A'}</td> 
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BoatBookedDetails;
