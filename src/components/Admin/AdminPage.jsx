import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';
import { GiCrossMark } from 'react-icons/gi';
import './AdminPage.css';

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [boatData, setBoatData] = useState([]);
  const [newBoat, setNewBoat] = useState({
    name: '',
    description: '',
    image: '',
    price: '',
    location: '',
    type: '',
    capacity: '',
    features: '',
    extra_images: '' // Updated field name
  });
  const [editingBoat, setEditingBoat] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    if (!isAdmin) {
      navigate('/admin-login');
    }

    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/users/');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    const fetchBoatData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/boatdata/');
        setBoatData(response.data);
      } catch (error) {
        console.error('Error fetching boat data:', error);
      }
    };

    fetchUsers();
    fetchBoatData();
  }, [navigate]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/users/${id}/`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleBoatDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/boatdata/${id}/`);
      setBoatData(boatData.filter(boat => boat.id !== id));
    } catch (error) {
      console.error('Error deleting boat:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/admin-login');
  };

  const handleInputChange = (e) => {
    setNewBoat({ ...newBoat, [e.target.name]: e.target.value });
  };

  const addBoat = () => {
    const boatToAdd = {
      ...newBoat,
      features: newBoat.features.split(',').map(f => f.trim()),
      extra_images: newBoat.extra_images.split(',').map(img => img.trim()) // Updated field name
    };

    axios.post('http://localhost:8000/api/boatdata/', boatToAdd)
      .then(response => {
        setBoatData([...boatData, response.data]);
        setNewBoat({
          name: '',
          description: '',
          image: '',
          price: '',
          location: '',
          type: '',
          capacity: '',
          features: '',
          extra_images: '' // Updated field name
        });
      })
      .catch(error => console.error('Error adding boat:', error));
  };

  const editBoat = (id) => {
    const boatToEdit = boatData.find(boat => boat.id === id);
    setEditingBoat(boatToEdit);
    setNewBoat({
      name: boatToEdit.name,
      description: boatToEdit.description,
      image: boatToEdit.image,
      price: boatToEdit.price,
      location: boatToEdit.location,
      type: boatToEdit.type,
      capacity: boatToEdit.capacity,
      features: boatToEdit.features.join(', '),
      extra_images: boatToEdit.extra_images.join(', ') // Updated field name
    });
  };

  const updateBoat = () => {
    const updatedBoat = {
      ...newBoat,
      features: newBoat.features.split(',').map(f => f.trim()),
      extra_images: newBoat.extra_images.split(',').map(img => img.trim()) // Updated field name
    };

    axios.put(`http://localhost:8000/api/boatdata/${editingBoat.id}/`, updatedBoat)
      .then(response => {
        setBoatData(boatData.map(boat => (boat.id === editingBoat.id ? response.data : boat)));
        setEditingBoat(null);
        setNewBoat({
          name: '',
          description: '',
          image: '',
          price: '',
          location: '',
          type: '',
          capacity: '',
          features: '',
          extra_images: '' // Updated field name
        });
      })
      .catch(error => console.error('Error updating boat:', error));
  };

  return (
    <div id="aa1">
      <Link to="/" onClick={handleLogout}>
        <GiCrossMark className="cross6" />
      </Link>
      <div id="admin">
        <h1>Admin Page</h1>
        <h2>Users</h2>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <AiFillDelete
                    onClick={() => handleDelete(user.id)}
                    className="delete-icon"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="admin-buttons">
          <Link to="/user-booked-details">
            <button className="nav-button">User Booked Details</button>
          </Link>
          <Link to="/boat-booked-details">
            <button className="nav-button">Boat Booked Details</button>
          </Link>
        </div>

        {/* List of Boats */}
        <div className="boat-list1">
          <h1>Boat Data</h1>
          <div className="boat-cards1">
            {boatData.map(boat => (
              <div key={boat.id} className="boat-card1">
                <h4>{boat.name}</h4>
                <p>{boat.description}</p>
                <button onClick={() => editBoat(boat.id)}>Edit</button>
                <AiFillDelete onClick={() => handleBoatDelete(boat.id)} className="delete-icon" />
              </div>
            ))}
          </div>
        </div>

        {/* CRUD Operations for Boat Data */}
        <div className="crud-section">
          <h3>{editingBoat ? 'Edit Boat' : 'Add New Boat'}</h3>
          <input type="text" name="name" placeholder="Name" value={newBoat.name} onChange={handleInputChange} />
          <input type="text" name="description" placeholder="Description" value={newBoat.description} onChange={handleInputChange} />
          <input type="text" name="image" placeholder="Image URL" value={newBoat.image} onChange={handleInputChange} />
          <input type="text" name="price" placeholder="Price" value={newBoat.price} onChange={handleInputChange} />
          <input type="text" name="location" placeholder="Location" value={newBoat.location} onChange={handleInputChange} />
          <input type="text" name="type" placeholder="Type" value={newBoat.type} onChange={handleInputChange} />
          <input type="number" name="capacity" placeholder="Capacity" value={newBoat.capacity} onChange={handleInputChange} />
          <input type="text" name="features" placeholder="Features (comma separated)" value={newBoat.features} onChange={handleInputChange} />
          <input type="text" name="extra_images" placeholder="Extra Images URLs (comma separated)" value={newBoat.extra_images} onChange={handleInputChange} />

          <button onClick={editingBoat ? updateBoat : addBoat}>
            {editingBoat ? 'Update Boat' : 'Add Boat'}
          </button>
          
          {editingBoat && <button onClick={() => setEditingBoat(null)}>Cancel Edit</button>}
        </div>

      </div>
    </div>
  );
};

export default AdminPage;
