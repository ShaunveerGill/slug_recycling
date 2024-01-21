import React, { useState } from 'react';

const Demo = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const getContentForOption = () => {
    switch (selectedOption) {
      case 0:
        return (
          <>
            <h1 className="text-2xl font-semibold mb-4">Option 1 Content</h1>
            <p>Description for Option 1</p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Custom Button 1</button>
          </>
        );
      case 1:
        return (
          <>
            <h1 className="text-2xl font-semibold mb-4">Option 2 Content</h1>
            <p>Description for Option 2</p>
            <a href="https://example.com/button2" target="_blank" rel="noopener noreferrer">
              <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Custom Button 2</button>
            </a>
          </>
        );
      // Add more cases for each option...
      default:
        return (
          <p>Please select an option from the navigation bar. Or flip a coin, it's practically the same level of excitement.</p>
        );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Combined Box with Drop Shadow */}
      <div className="bg-white rounded-lg shadow-md p-6 w-3/4 flex">
        {/* Vertical Navigation Bar */}
        <div className="w-1/4 p-4">
          {[...Array(12).keys()].map((option) => (
            <div
              key={option}
              className={`cursor-pointer p-2 my-1 rounded-md ${
                selectedOption === option
                  ? 'bg-black text-white shadow-md'
                  : 'hover:bg-gray-300'
              }`}
              onClick={() => setSelectedOption(option)}
            >
              Option {option + 1}
            </div>
          ))}
        </div>

        {/* Right Content */}
        <div className="flex-1 p-6">
          {getContentForOption()}
        </div>
      </div>
    </div>
  );
};

export default Demo;
