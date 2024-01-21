import React, { useState } from 'react';
import axios from 'axios';
import { TailSpin } from 'react-loader-spinner';
import ModalContent from '../components/Modal.js';

const Home = () => {
  const [selectedImageFile, setSelectedImageFile] = useState(null);
  const [classRes, setClassRes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
      setModalIsOpen(true);
    } catch (error) {
      console.error('Error uploading image:', error);
      setError('Error uploading image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col bg-blue-100 items-center justify-center min-h-screen">
      <div className="grid grid-cols-2 gap-20 p-28 bg-white rounded-lg h-5/6 shadow-md w-11/12">
        <div className='justify-left'>
          <h1 className="text-6xl font-semibold mb-4 text-blue-500">What is Slug Recycling</h1>
          <p className='text-xl text-blue-500'>Slug Recycling makes it easy to know how to dispose of your belongings! Simply upload a picture and our ML model will tell you if it's recyclable, compostable, or needs special handling.</p>
        </div>
        <div className='flex-grow justify-right'>
          {loading ? (
            <div className="flex items-center justify-center">
              <TailSpin color="#4F46E5" height={50} width={50} />
            </div>
          ) : (
            <>
              <label htmlFor="fileInput" className="rounded-lg h-5/6 w-11/12 block cursor-pointer p-4 justify-center rounded-md text-gray-600 bg-gray-100 hover:bg-gray-200">
                <input
                  type="file"
                  id="fileInput"
                  className="hidden"
                  onChange={handleFileChange}
                />
                {selectedImageFile ? `File Selected: ${selectedImageFile.name}` : 'Click Here To Upload A File'}
              </label>
              {error && <p className="text-red-500">{error}</p>}
              {modalIsOpen && <ModalContent setOpenModal={setModalIsOpen} classRes={classRes} />}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
