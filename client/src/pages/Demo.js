import React, { useState } from 'react';
import axios from 'axios';

const Demo = () => {
  const [selectedImageFile, setSelectedImageFile] = useState(null);
  const [classRes, setClassRes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = async (e) => {
    const image = e.target.files[0];
    setSelectedImageFile(image);
    setClassRes(null);

    const formData = new FormData();
    formData.append('image', image);
  
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:3001/processImage', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setClassRes(response.data.imageRes);
    } catch (error) {
      console.error('Error uploading image:', error);
      setError('Error uploading image. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="mt-4 p-6 bg-white rounded-lg shadow-md w-3/4">
        <h1 className="text-2xl font-semibold">Demo Page</h1>

        <label htmlFor="fileInput" className="block mt-4 cursor-pointer p-4 rounded-md text-gray-600 hover:bg-gray-100">
          <input
            type="file"
            id="fileInput"
            className="hidden"
            onChange={handleFileChange}
          />
          Select File
        </label>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {classRes && <p>Classification Result: {classRes}</p>}
      </div>
    </div>
  );
};

export default Demo;
