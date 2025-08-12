import React, { useState } from "react";

const AddPropertyDetails = ({ activeTab }) => {
  const [selectedType, setSelectedType] = useState("");
  return (
    <div className="px-4">
      {activeTab === 0 && (
        <div className="p-4">
          <p className="text-sm ">Property Type</p>
          <div className="flex gap-2 py-2">
            <div className="flex-1 flex gap-2 bg-gray-100 rounded-md p-2">
              <input
                type="radio"
                name="property-type"
                value="Commercial"
                onChange={(e) => setSelectedType(e.target.value)}
              />
              <p>Commercial</p>
            </div>
            <div className="flex-1 flex gap-2 bg-gray-100 rounded-md p-2">
              <input
                type="radio"
                name="property-type"
                value="Residential"
                onChange={(e) => setSelectedType(e.target.value)}
              />
              <p>Residential</p>
            </div>
            <div className="flex-1 flex gap-2 bg-gray-100 rounded-md p-2">
              <input
                type="radio"
                name="property-type"
                value="Industrial"
                onChange={(e) => setSelectedType(e.target.value)}
              />
              <p>Industrial</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddPropertyDetails;
