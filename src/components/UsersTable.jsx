import React, { useEffect, useState } from 'react';
import api from '../Api';
import { Link } from 'react-router-dom';
import '../App.css';

const UsersTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get('/users?page=2');
        setUsers(response.data.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td><img src={user.avatar} alt={user.first_name} /></td>
              <td>
                <Link to={`/users/${user.id}`}>
                  {user.first_name} {user.last_name}
                </Link>
              </td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
