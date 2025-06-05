import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const Dashboard = () => {
  const [message, setMessage] = useState('Chargement...');
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const res = await api.get('/dashboard', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMessage(`Bienvenue sur le Dashboard, ${res.data.email} 👋`);
      } catch (err) {
        setMessage('Accès refusé. Veuillez vous reconnecter.');
        localStorage.removeItem('token');
        setTimeout(() => navigate('/login'), 2000);
      }
    };

    checkAuth();
  }, [navigate]);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>{message}</h2>
    </div>
  );
};

export default Dashboard;
