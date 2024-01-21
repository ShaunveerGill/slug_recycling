import React, { useState } from 'react';

const Demo = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { name: "Option 1", description: "", buttonColor: "bg-blue-500", buttonHoverColor: "hover:bg-blue-600" },
    { name: "Option 2", description: "", buttonColor: "bg-green-500", buttonHoverColor: "hover:bg-green-600" },
    { name: "Option 3", description: "", buttonColor: "bg-blue-500", buttonHoverColor: "hover:bg-blue-600" },
    { name: "Option 4", description: "", buttonColor: "bg-green-500", buttonHoverColor: "hover:bg-green-600" },
    { name: "Option 5", description: "", buttonColor: "bg-blue-500", buttonHoverColor: "hover:bg-blue-600" },
    { name: "Option 6", description: "", buttonColor: "bg-green-500", buttonHoverColor: "hover:bg-green-600" },
  ];

  const getContentForOption = () => {
    const selected = options[selectedOption];

    return (
      <>
        <h1 className="text-3xl font-semibold mb-2">{selected ? selected.name : 'Select an Option'}</h1>
        <p className="text-lg mb-4">{selected ? selected.description : ''}</p>
        {selected && selected.buttonColor && (
          selected.buttonHoverColor ? (
            <button className={`px-6 py-3 ${selected.buttonColor} text-white rounded-md ${selected.buttonHoverColor}`}>Custom Button</button>
          ) : (
            <button className={`px-6 py-3 ${selected.buttonColor} text-white rounded-md`}>Custom Button</button>
          )
        )}
      </>
    );
  };

  return (
    <div className="flex flex-col bg-blue-100 items-center justify-center min-h-screen">
     
      <div className="bg-white rounded-lg shadow-md flex p-10 bg-white h-5/6 w-11/12">
        <div className="w-1/4 p-4">
          {options.map((option, index) => (
            <div
              key={index}
              className={`cursor-pointer p-2 my-1 rounded-md ${
                selectedOption === index
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'hover:bg-gray-300'
              }`}
              onClick={() => setSelectedOption(index)}
            >
              {option.name}
            </div>
          ))}
        </div>

        <div className="flex-1 p-6">
          {getContentForOption()}
        </div>
      </div>
    </div>
  );
};

export default Demo;
