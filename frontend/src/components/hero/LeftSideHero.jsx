import React from "react";
import { FaHouse, FaBuilding, FaIndustry } from "react-icons/fa6";
import { FaSearch, FaFilter } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import PropertyCardSponsored from "./PropertyCardSponsored";

const LeftSideHero = () => {
  return (
    <div className="mx-4 mt-6 md:mt-0">
      <h1 className="hidden sm:block text-4xl font-semibold font-serif">
        We Connect <span className="text-orange-800">Owners</span> &{" "}
        <span className="text-orange-800">Tenants</span> for Hassle-Free Rental
        Properties
      </h1>
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
      <hr className="my-4 text-gray-400" />
      <div className="flex items-center gap-3">
        <FaSearch className="text-orange-800" />
        <input
          type="text"
          placeholder="Search..."
          className="outline-none text-xl w-96"
        />
      </div>
      <hr className="my-4 text-gray-400" />
      <div className="flex flex-col sm:flex-row justify-evenly ">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search an area"
            className="outline-none" 
          />
          <p className="border-r-2 border-gray-400"></p>
          <div>
            <p className="text-gray-400 text-sm">Property Type</p>
            <p className="flex items-center text-gray-800 cursor-pointer">
              All Types <RiArrowDropDownLine />
            </p>
          </div>
        </div>
        <hr className="block sm:hidden my-4 text-gray-400" />
        <div className="flex gap-2">
          <button className="flex items-center gap-2 border border-orange-800 text-orange-800 rounded-xl py-1 px-4 cursor-pointer">
            <FaFilter /> Filter
          </button>
          <button className="border rounded-xl py-1 px-4 text-white bg-orange-800 cursor-pointer">
            Search
          </button>
        </div>
      </div>
      <div className="mt-12 flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Sponsored Properties</h1>
        <PropertyCardSponsored />
      </div>
    </div>
  );
};

export default LeftSideHero;
