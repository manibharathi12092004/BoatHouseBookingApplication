import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import './AdminPage.css';
import { GiCrossMark } from "react-icons/gi";
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
                <Link to={`/edit-user/${user.id}`} className="edit-icon">
                  <AiFillEdit />
                </Link>
                <AiFillDelete 
                  onClick={() => handleDelete(user.id)} 
                  className="delete-icon" 
                  />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>  
  );
};

export default AdminPage;
