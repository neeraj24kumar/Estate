// Type.jsx final version
import React, { useState } from "react";
import { propertyTypes, property } from "../../../../data/dummyData"; // Import property

const Type = ({ setFilteredProperties }) => {
  // Receive setFilteredProperties as a prop
  const [selectedType, setSelectedType] = useState("");

  const propertyTypeMap = {
    "apartment": [10, 20, 25],
    "house": [2, 6, 12],
    "industrial": [3],
    "office villa": [4],
    "luxury home": [9, 14, 15],
    "land": [8],
    "rental": [3, 5, 7],
    "studio": [19, 23],
  };

  const handleTypeChange = (event) => {
    const type = event.target.value;
    setSelectedType(type);

    if (type === "") {
      // If no type is selected, show all properties
      setFilteredProperties(property);
    } else {
      // Filter properties based on the selected type
      const filteredIds = propertyTypeMap[type] || []; // Get IDs for the type
      const filtered = property.filter((property) =>
        filteredIds.includes(property.id)
      );
      setFilteredProperties(filtered);
    }
  };

  const handleClearClick = () => {
    setSelectedType(""); // Clear the selected type
    setFilteredProperties(property); // Reset to all properties
  };

  return (
    <div className="p-3 mt-8 border dark:border-dark">
      <h1 className="font-semibold">Property Type</h1>
      {propertyTypes.map(({ id, name, number }) => (
        <div key={id} className="mt-3 filter flex-center-between">
          <div className="input-radio">
            <input
              type="radio"
              name="type"
              id={name}
              value={name}
              checked={selectedType === name}
              onChange={handleTypeChange}
            />
            <label htmlFor={name} className="capitalize">
              {name}
            </label>
          </div>
          <p>({number})</p>
        </div>
      ))}
      {/* <button
        type="button"
        className="mt-4 py-2 px-4 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
        onClick={handleClearClick}
      >
        Clear
      </button> */}
      <button
        type="button"
        className="btn bg-secondary w-full mt-4 text-slate-200 !rounded-none"
        onClick={handleClearClick}
      >
        Clear
      </button>
      
    </div>
  );
};

export default Type;









