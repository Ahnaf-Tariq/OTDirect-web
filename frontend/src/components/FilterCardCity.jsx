import React, { useState } from 'react'
import { FaPlay } from "react-icons/fa";

const FilterCardCity = () => {
  const [propertyType, setPropertyType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [postedSince, setPostedSince] = useState("");

  const handleClear = () => {
    setPropertyType("");
    setMinPrice("");
    setMaxPrice("");
    setPostedSince("");
  };

  const handleSubmit = () => {
    const filterData = {
      propertyType,
      minPrice,
      maxPrice,
      postedSince,
    };
    console.log("Applying filter:", filterData);
  };
  return (
    <div className="w-full space-y-5">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-lg">Filter Properties</h2>
        <button onClick={handleClear} className="text-sm text-[#7A1233] font-medium cursor-pointer">
          Clear Filter
        </button>
      </div>

      <hr />

      {/* Property Type */}
      <div className="space-y-2">
        <p className="font-medium">Property Type</p>
        <select
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
          className="w-full border border-gray-300 px-3 py-2 rounded-lg text-sm focus:outline-none"
        >
          <option value="">Select Property Type</option>
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
          <option value="Plot">Plot</option>
        </select>
      </div>

      {/* Budget */}
      <div className="space-y-2">
        <p className="font-medium">Budget(Price)</p>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-1/2 border border-gray-300 px-3 py-2 rounded-lg text-sm"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-1/2 border border-gray-300 px-3 py-2 rounded-lg text-sm"
          />
        </div>
      </div>

      {/* Posted Since */}
      <div className="space-y-2">
        <p className="font-medium">Posted Since</p>
        <div className="flex flex-col gap-2 text-sm">
          {["Anytime", "Last Week", "Yesterday"].map((option) => (
            <label key={option} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="postedSince"
                value={option}
                checked={postedSince === option}
                onChange={() => setPostedSince(option)}
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      {/* Apply Button */}
      <button
        onClick={handleSubmit}
        className="w-full bg-[#7A1233] text-white font-medium py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-[#600f2a] transition cursor-pointer"
      >
        <FaPlay className="text-sm" />
        Apply Filter
      </button>
    </div>
  )
}

export default FilterCardCity