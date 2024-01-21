import React from "react";

function ModalContent({ setOpenModal, classRes }) {
  const renderContent = () => {
    switch (classRes.trim()) {
      case '1':
        return (
          <>
            <h1 className="text-2xl text-red font-bold mb-4">Hazardous</h1>
            <p>Description for Result 1</p>
          </>
        );
      case '2':
        return (
          <>
            <h1 className="text-2xl text-green font-bold mb-4">Compost</h1>
            <p>Description for Result 2</p>
          </>
        );
      case '3':
        return (
          <>
            <h1 className="text-2xl font-bold mb-4">Recyclable In Designated Bins</h1>
            <p>Description for Result 3</p>
          </>
        );
      case '4':
        return (
          <>
            <h1 className="text-2xl font-bold mb-4">Recyclable</h1>
            <p>Description for Result 4</p>
          </>
        );
      case '5':
        return (
          <>
            <h1 className="text-2xl font-bold mb-4">Donate</h1>
            <p>Description for Result 5</p>
          </>
        );
      case '6':
        return (
          <>
            <h1 className="text-2xl font-bold mb-4">Recyclable In Designated Bins</h1>
            <p>Description for Result 6</p>
          </>
        );
      case '7':
        return (
          <>
            <h1 className="text-2xl font-bold mb-4">Recyclable</h1>
            <p>Description for Result 7</p>
          </>
        );
      case '8':
        return (
          <>
            <h1 className="text-2xl font-bold mb-4">Recyclable</h1>
            <p>Description for Result 8</p>
          </>
        );
      case '9':
        return (
          <>
            <h1 className="text-2xl font-bold mb-4">Recyclable In Designated Bins</h1>
            <p>Description for Result 9</p>
          </>
        );
      case '10':
        return (
          <>
            <h1 className="text-2xl font-bold mb-4">Donate</h1>
            <p>Description for Result 10</p>
          </>
        );
      case '11':
        return (
          <>
            <h1 className="text-2xl font-bold mb-4">Waste</h1>
            <p>Description for Result 11</p>
          </>
        );
      case '12':
        return (
          <>
            <h1 className="text-2xl font-bold mb-4">Recyclable In Designated Bins</h1>
            <p>Description for Result 12</p>
          </>
        );
      default:
        return (
          <>
            <h1 className="text-2xl font-bold mb-4">Default Result</h1>
            <p>Description for Default Result</p>
          </>
        );
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="bg-white rounded-md shadow-md p-6 w-96 z-10"> 
      <div className="flex justify-end">
        <button
          onClick={() => {
            setOpenModal(false);
          }}
          className="text-black bg-white p-1 rounded-full hover:bg-black hover:text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </button>
      </div>
      <div className="mt-0">
        {renderContent()}
      </div>
    </div>
  </div>
  );
}

export default ModalContent;