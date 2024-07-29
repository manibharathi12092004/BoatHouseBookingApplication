
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';
import { GiCrossMark } from 'react-icons/gi';
import './AdminPage.css';

const AdminPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/users/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div id="aa1">
      <Link to="/">
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
      </div>
    </div>
  );
};

export default AdminPage;
