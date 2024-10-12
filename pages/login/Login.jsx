// src/pages/login/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Replace with your login logic (API call)
    try {
      // Example: Replace with actual API request
      const response = await fakeLogin(email, password);
      if (response.success) {
        navigate('/admin-profile'); // Change to desired route
      } else {
        setError(response.message); // Set error message
      }
    } catch (err) {
      setError('Login failed. Please try again.'); // Handle errors
    }
  };

  // Fake login function (replace this with your actual API call)
  const fakeLogin = (email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === 'admin@example.com' && password === 'password') {
          resolve({ success: true });
        } else {
          resolve({ success: false, message: 'Invalid credentials' });
        }
      }, 1000);
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-indigo-500"
            />
          </div>
          {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
          <button type="submit" className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-500 transition duration-200">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
