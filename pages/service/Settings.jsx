// Settings.jsx
import React, { useState } from 'react';

const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const toggleNotifications = () => {
    setNotificationsEnabled((prev) => !prev);
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-lg font-bold mb-2">Settings</h2>
      <div className="flex items-center mb-4">
        <label className="mr-2">Enable Notifications</label>
        <input
          type="checkbox"
          checked={notificationsEnabled}
          onChange={toggleNotifications}
          className="cursor-pointer"
        />
      </div>
      <div className="flex items-center">
        <label className="mr-2">Dark Mode</label>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={toggleDarkMode}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Settings;
