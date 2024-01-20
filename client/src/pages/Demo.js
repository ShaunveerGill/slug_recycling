import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

// Set app element for React Modal
Modal.setAppElement('#root'); // Assuming '#root' is the ID of your root element

const Demo = () => {
  const [selectedImageFile, setSelectedImageFile] = useState(null);
  const [classRes, setClassRes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Wrap openModal in useCallback to memoize the function
  const openModal = useCallback(() => {
    setModalIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalIsOpen(false);
  }, []);

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
      openModal(); // Open the modal when a result is received
    } catch (error) {
      console.error('Error uploading image:', error);
      setError('Error uploading image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (classRes !== null) {
      openModal();
    }
  }, [classRes, openModal]);

  // Close the modal if classRes changes to null (assuming you want to close it on no result)
  useEffect(() => {
    if (classRes === null) {
      closeModal();
    }
  }, [classRes, closeModal]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="mt-4 p-6 bg-white rounded-lg shadow-md w-11/12">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <h1 className="text-2xl font-semibold">Demo Page</h1>
            <label htmlFor="fileInput" className="block mt-4 cursor-pointer p-4 rounded-md text-gray-600 hover:bg-gray-100">
              <input
                type="file"
                id="fileInput"
                className="hidden"
                onChange={handleFileChange}
              />
              {selectedImageFile ? `File Selected: ${selectedImageFile.name}` : 'Select File'}
            </label>
            {error && <p className="text-red-500">{error}</p>}
            {/* Render result in modal */}
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Classification Result Modal"
            >
              {/* You can render the result directly from classRes */}
              {classRes !== null && <p>{`Result ${classRes}`}</p>}
              <button onClick={closeModal}>Close</button>
            </Modal>
          </>
        )}
      </div>
    </div>
  );
};

export default Demo;
