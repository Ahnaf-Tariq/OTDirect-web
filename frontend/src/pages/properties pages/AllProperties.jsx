import React from "react";
import { FaHouse, FaBuilding, FaIndustry } from "react-icons/fa6";
import { FaSearch, FaFilter } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

const AllProperties = () => {
  return (
    <div className="pt-24 py-10 max-w-[1450px] mx-auto flex justify-center">
      <div className="flex flex-col items-start">
        <div className="flex gap-4 mt-4">
          <p className="flex items-center gap-2 cursor-pointer text-sm md:text-lg">
            <FaHouse /> Residential
          </p>
          <p className="flex items-center gap-2 cursor-pointer text-sm md:text-lg">
            <FaBuilding /> Commercial
          </p>
          <p className="flex items-center gap-2 cursor-pointer text-sm md:text-lg">
            <FaIndustry /> Industrial
          </p>
        </div>
        <hr className="my-4 border-t border-gray-300 w-xl" />
        <div className="flex items-center gap-3">
          <FaSearch className="text-[#7A1233]" />
          <input
            type="text"
            placeholder="Search..."
            className="outline-none text-xl w-96"
          />
        </div>
        <hr className="my-4 border-t border-gray-300 w-xl" />
        <div className="flex flex-col sm:flex-row justify-evenly gap-4">
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search an area"
              className="outline-none"
            />
            <p className="h-6 border-r-2 border-gray-400"></p>
            <div>
              <p className="text-gray-400 text-sm flex items-center gap-2">Property Type <RiArrowDropDownLine /></p>
            </div>
          </div>
          <hr className="block sm:hidden my-4 text-gray-400" />
          <div className="flex gap-2">
            <button className="flex items-center gap-2 border border-[#7A1233] text-[#7A1233] rounded-xl py-1 px-4 cursor-pointer">
              <FaFilter /> Filter
            </button>
            <button className="border rounded-xl py-1 px-4 text-white bg-[#7A1233] cursor-pointer">
              Search
            </button>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default AllProperties;
