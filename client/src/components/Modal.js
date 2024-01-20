import React from "react";

function ModalContent({ setOpenModal, classRes }) {
  const renderContent = () => {
    console.log(typeof classRes, classRes)
    switch (classRes.trim()) {
      case '1':
        return (
          <>
            <h1 className="text-2xl font-bold mb-4">Result 1</h1>
            <p>Description for Result 1</p>
          </>
        );
      case '2':
        return (
          <>
            <h1 className="text-6xl font-bold mb-4">Result 2</h1>
            <p>Description for Result 2</p>
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
      <div className="bg-white rounded-md shadow-md p-6 w-96 z-10"> {/* Add z-10 to ensure it appears above the overlay */}
        <div className="flex justify-end">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            className="text-white bg-red-500 p-2 rounded-full hover:bg-red-600"
          >
            X
          </button>
        </div>
        <div className="mt-4">
          {renderContent()}
        </div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            className="mr-2 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalContent;
