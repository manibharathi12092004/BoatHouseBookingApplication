import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './BoatShowcase.css';

const BoatShowcase = () => {
    const [boats, setBoats] = useState([]);
    const [filteredBoats, setFilteredBoats] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:8000/api/boatdata/')
            .then(response => response.json())
            .then(data => {
                setBoats(data);
                setFilteredBoats(data);
            });
    }, []);


    useEffect(() => {
        const filtered = boats.filter(boat =>
            boat.location.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredBoats(filtered);
    }, [searchTerm, boats]);

    const handleCardClick = (id) => {
        navigate(`/boat/${id}`);
    };

    return (
        <div className="boat-showcase-container">
            <h1>Boat House</h1>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search by location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
            </div>
            <div className="boat-grid">
                {filteredBoats.map(boat => (
                    <div key={boat.id} className="boat-card" onClick={() => handleCardClick(boat.id)}>
                        <img src={boat.image} alt={boat.name} className="boat-image" />
                        <h2>{boat.name}</h2>
                        <p>{boat.description}</p>
                        <p className="boat-price">{boat.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BoatShowcase;
