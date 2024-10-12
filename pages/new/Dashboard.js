// src/pages/dashboard/Dashboard.js

import React from "react";
import ImageUploadForm from "./ImageUploadForm";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {/* Include the ImageUploadForm here */}
      <ImageUploadForm />
      {/* You can add other dashboard components below */}
    </div>
  );
};

export default Dashboard;
