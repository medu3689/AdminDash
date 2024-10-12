// SystemHealth.jsx
import React from 'react';

const SystemHealth = () => {
  const [healthData, setHealthData] = React.useState({
    cpuUsage: '25%',
    memoryUsage: '50%',
    diskSpace: '80%',
  });

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-lg font-bold mb-2">System Health</h2>
      <ul>
        <li>CPU Usage: <span className="font-semibold">{healthData.cpuUsage}</span></li>
        <li>Memory Usage: <span className="font-semibold">{healthData.memoryUsage}</span></li>
        <li>Disk Space: <span className="font-semibold">{healthData.diskSpace}</span></li>
      </ul>
    </div>
  );
};

export default SystemHealth;
