import React from "react";

function ModalContent({ setOpenModal, classRes }) {
  const renderContent = () => {
    switch (classRes.trim()) {
      case '1':
        return (
          <>
            <h1 className="text-2xl justify-center text-red-500 font-bold mb-4">Hazardous</h1>
            <p>Dispose of batteries responsibly to protect the environment and your community. Avoid dumping batteries in the trash, as they contain hazardous materials. Learn about safe disposal methods in your area by visiting the link below.</p>
          </>
        );
      case '2':
        return (
          <>
            <h1 className="text-2xl text-green-500 font-bold mb-4">Compost</h1>
            <p>Manage food scraps and organic waste by disposing of them in compost or the trash. Contribute to reducing food waste and consider supporting your local community by donating to nearby food banks.</p>
          </>
        );
      case '3':
        return (
          <>
            <h1 className="text-2xl text-yellow-500 font-bold mb-4">Recyclable In Designated Bins</h1>
            <p>While glass is recyclable, it's crucial to ensure proper disposal in designated areas. Failure to do so may lead to non-recyclable outcomes. Prioritize responsible recycling by utilizing specified collection points for glass disposal.</p>
          </>
        );
      case '4':
        return (
          <>
            <h1 className="text-2xl text-blue-500 font-bold mb-4">Recyclable</h1>
            <p>Cardboard is among the most recycled materials, but it's crucial to prevent contamination for successful recycling. Avoid exposing cardboard to oil, grease, and other contaminants, as they can hinder the recycling process. Other examples of contaminants include food residues and liquids. Prioritize clean and uncontaminated cardboard disposal to contribute effectively to recycling efforts.</p>
          </>
        );
      case '5':
        return (
          <>
            <h1 className="text-2xl text-[#8B4513] font-bold mb-4">Donate</h1>
            <p>Donating clothes and shoes is a fantastic way to reduce waste. Many local charity organizations are eager to accept donations regardless of their condition. Additionally, explore the option of upcycling to give new life to items that may otherwise go to waste. Let's contribute to sustainability by considering donation and upcycling as eco-friendly choices.</p>
          </>
        );
      case '6':
        return (
          <>
            <h1 className="text-2xl text-yellow-500 font-bold mb-4">Recyclable In Designated Bins</h1>
            <p>While glass is recyclable, it's crucial to ensure proper disposal in designated areas. Failure to do so may lead to non-recyclable outcomes. Prioritize responsible recycling by utilizing specified collection points for glass disposal.</p>
          </>
        );
      case '7':
        return (
          <>
            <h1 className="text-2xl text-blue-500 font-bold mb-4">Recyclable</h1>
            <p>Metal cans and bottles can be easily recycled by placing them in your designated blue recycling bin. Let's make recycling a simple and effective habit for a more sustainable future.</p>
          </>
        );
      case '8':
        return (
          <>
            <h1 className="text-2xl text-blue-500 font-bold mb-4">Recyclable</h1>
            <p>Paper can be easily recycled by placing it in your designated blue recycling bin, not the trash bin. Let's ensure proper disposal to contribute to a more sustainable environment.</p>
          </>
        );
      case '9':
        return (
          <>
            <h1 className="text-2xl text-yellow-500 font-bold mb-4">Recyclable In Designated Bins</h1>
            <p>While plastic is often marketed for its recyclability, it's crucial to check the specific recycling guidelines for proper disposal. Different types of plastic may have different recycling processes or designated recycling facilities. Let's be mindful and ensure we recycle plastic in the correct and environmentally responsible way.</p>
          </>
        );
      case '10':
        return (
          <>
            <h1 className="text-2xl text-[#8B4513] font-bold mb-4">Donate</h1>
            <p>Donating clothes and shoes is a fantastic way to reduce waste. Many local charity organizations are eager to accept donations regardless of their condition. Additionally, explore the option of upcycling to give new life to items that may otherwise go to waste. Let's contribute to sustainability by considering donation and upcycling as eco-friendly choices.</p>
          </>
        );
      case '11':
        return (
          <>
            <h1 className="text-2xl font-bold mb-4">Waste</h1>
            <p>Waste and all other single-use items should be disposed of in the trash. Let's prioritize proper waste disposal to maintain cleanliness and contribute to a healthier environment</p>
          </>
        );
      case '12':
        return (
          <>
            <h1 className="text-2xl text-yellow-500 font-bold mb-4">Recyclable In Designated Bins</h1>
            <p>While glass is recyclable, it's crucial to ensure proper disposal in designated areas. Failure to do so may lead to non-recyclable outcomes. Prioritize responsible recycling by utilizing specified collection points for glass disposal.</p>
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