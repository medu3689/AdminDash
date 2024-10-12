// src/pages/dashboard/ImageUploadForm.js

import React, { useState, useEffect } from "react";

const ImageUploadForm = () => {
  const [images, setImages] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = 2000; // 2 seconds

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 5) {
      setErrorMessage("You can upload up to 5 images.");
      return;
    }
    setImages(files);
    setImageUrls(files.map((file) => URL.createObjectURL(file))); // Create URLs for image previews
    setSuccessMessage(""); // Reset success message on new selection
    setErrorMessage(""); // Reset error message on new selection
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      console.log("Images submitted:", images);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate async upload

      setSuccessMessage("Images uploaded successfully!");
      setImages([]); // Clear images after successful upload
      setImageUrls([]);
    } catch (error) {
      setErrorMessage("Failed to upload images. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Automatic slide functionality
  useEffect(() => {
    if (imageUrls.length > 1) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
      }, slideInterval);
      return () => clearInterval(intervalId);
    }
  }, [imageUrls]);

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gray-100">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">Upload Dashboard Images</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Select Images (max 5)</label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-700 border rounded-md p-2"
            />
          </div>

          {imageUrls.length > 0 && (
            <div className="relative h-48 overflow-hidden rounded-md border border-gray-300">
              {imageUrls.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`Preview ${index + 1}`}
                  className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-in-out ${
                    index === currentIndex ? "translate-x-0" : "translate-x-full"
                  }`}
                />
              ))}
            </div>
          )}

          <button
            type="submit"
            className={`w-full py-2 rounded-md text-white transition duration-300 ${isLoading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}`}
            disabled={isLoading}
          >
            {isLoading ? "Uploading..." : "Upload Images"}
          </button>
          {successMessage && <p className="text-green-600 mt-2">{successMessage}</p>}
          {errorMessage && <p className="text-red-600 mt-2">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default ImageUploadForm;
