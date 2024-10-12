import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { DarkModeContext } from "../context/darkModeContext"; // Correct path
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Import profile icon

const AdminProfile = () => {
  const { darkMode } = useContext(DarkModeContext);
  const navigate = useNavigate(); // Initialize useNavigate

  const admin = {
    username: 'admin',
    email: 'admin@example.com',
    role: 'Administrator',
    createdAt: '2024-01-01',
  };

  // Functions to handle button clicks
  const handleManageUsers = () => {
    navigate('/users'); // Navigate to the users page
  };

  const handleViewLogs = () => {
    navigate('/logs'); // Navigate to the logs page
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} min-h-screen flex items-center justify-center`}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md">
         {/* Profile Picture Icon */}
         <div className="flex justify-center mb-4">
          <AccountCircleIcon className="text-indigo-600" style={{ fontSize: '80px' }} />
        </div>
        <h1 className="text-3xl font-bold text-center mb-6 bg-purple-600 text-white">Admin Profile</h1>

       

        <div className="profile-info space-y-4">
          <div className="flex justify-between">
            <span className="font-semibold">Username:</span>
            <span>{admin.username}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Email:</span>
            <span>{admin.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Role:</span>
            <span>{admin.role}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Member Since:</span>
            <span>{admin.createdAt}</span>
          </div>
        </div>
        <div className="mt-8 flex justify-between space-x-4">
          <button 
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
            onClick={handleManageUsers}
          >
            Manage Users
          </button>
          <button 
            className="bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300 ease-in-out"
            onClick={handleViewLogs}
          >
            View Logs
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
