// src/pages/logout/Logout.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear admin session (this might include clearing tokens from local storage, cookies, etc.)
    localStorage.removeItem('admin'); // Example of clearing admin data
    // Redirect to login page
    navigate('/login');
  };

  React.useEffect(() => {
    handleLogout();
  }, []);

  return null; // You can also return a loading spinner if you'd like
};

export default Logout;
