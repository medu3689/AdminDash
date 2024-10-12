// Logs.jsx
import React from 'react';

const Logs = () => {
  const logs = [
    { id: 1, message: 'User logged in', timestamp: '2024-10-08 10:00:00' },
    { id: 2, message: 'Data updated successfully', timestamp: '2024-10-08 10:05:00' },
    { id: 3, message: 'Error fetching data', timestamp: '2024-10-08 10:10:00' },
  ];

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-lg font-bold mb-2">System Logs</h2>
      <ul>
        {logs.map((log) => (
          <li key={log.id} className="border-b py-2">
            <span className="text-gray-600">{log.timestamp}:</span> {log.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Logs;
