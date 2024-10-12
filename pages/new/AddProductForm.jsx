import React, { useState } from "react";

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    totalStock: "",
    image: null,
    video: null,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files[0] })); // Store the first file
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    const newErrors = {};
    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.description) newErrors.description = "Description is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.price || formData.price <= 0) newErrors.price = "Price must be greater than 0";
    if (!formData.totalStock || formData.totalStock <= 0) newErrors.totalStock = "Total stock must be greater than 0";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log(formData);
      // Submit the form data to an API or handle the data
      setErrors({}); // Clear errors on successful submission
      alert("Product added successfully!"); // Show success message
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg mx-auto mt-10">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className={`mt-1 block w-full border rounded-md shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description <span className="text-red-600">*</span>
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className={`mt-1 block w-full border rounded-md shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 ${errors.description ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
        </div>

        {/* Category */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className={`mt-1 block w-full border rounded-md shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 ${errors.category ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
        </div>

        {/* Price */}
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Price <span className="text-red-600">*</span>
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className={`mt-1 block w-full border rounded-md shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 ${errors.price ? 'border-red-500' : 'border-gray-300'}`}
            min="0"
          />
          {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
        </div>

        {/* Total Stock */}
        <div>
          <label htmlFor="totalStock" className="block text-sm font-medium text-gray-700">
            Total Stock <span className="text-red-600">*</span>
          </label>
          <input
            type="number"
            name="totalStock"
            value={formData.totalStock}
            onChange={handleInputChange}
            className={`mt-1 block w-full border rounded-md shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 ${errors.totalStock ? 'border-red-500' : 'border-gray-300'}`}
            min="0"
          />
          {errors.totalStock && <p className="text-red-500 text-sm mt-1">{errors.totalStock}</p>}
        </div>

        {/* Image Upload */}
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Image
          </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border file:border-gray-300 file:bg-gray-50 file:text-sm file:font-medium"
          />
        </div>

        {/* Video Upload */}
        <div>
          <label htmlFor="video" className="block text-sm font-medium text-gray-700">
            Video
          </label>
          <input
            type="file"
            name="video"
            accept="video/*"
            onChange={handleFileChange}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border file:border-gray-300 file:bg-gray-50 file:text-sm file:font-medium"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
