import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../Api';
import '../detail.css';

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get(`/users/${id}`);
        setUser(response.data.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [id]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className='user__box'>
      <img src={user.avatar} alt={user.first_name} width="100" />
      <h1 className='user__title'>{user.first_name} {user.last_name}</h1>
      <p className='user__email'>Email: {user.email}</p>
    </div>
  );
};

export default UserDetail;
