import React, { useState } from "react";
import { FaHouse, FaBuilding, FaIndustry } from "react-icons/fa6";
import { FaSearch, FaFilter } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import FeaturedListings from "../../components/featured listings/FeaturedListings";
import Properties24 from "../../components/24 properties/24Properties";
import PropertyCardSponsored from "../../components/hero/PropertyCardSponsored";

const AllProperties = () => {
  const [colorFilter, setColorFilter] = useState("");
  return (
    <div className="px-2 py-10">
      <div className="pt-20 mb-14 flex justify-center overflow-x-hidden">
        <div className="w-full max-w-screen-sm">
          <div className="flex gap-4 mt-4">
            <p
              onClick={() => setColorFilter("Residential")}
              className={`${
                colorFilter === "Residential"
                  ? "text-[#7A1233] border-b-3 border-[#7A1233] pb-1"
                  : ""
              } flex items-center gap-[2px] sm:gap-2 cursor-pointer text-base md:text-lg`}
            >
              <FaHouse /> Residential
            </p>
            <p
              onClick={() => setColorFilter("Commercial")}
              className={`${
                colorFilter === "Commercial"
                  ? "text-[#7A1233] border-b-3 border-[#7A1233] pb-1"
                  : ""
              } flex items-center gap-[2px] sm:gap-2 cursor-pointer text-base md:text-lg`}
            >
              <FaBuilding /> Commercial
            </p>
            <p
              onClick={() => setColorFilter("Industrial")}
              className={`${
                colorFilter === "Industrial"
                  ? "text-[#7A1233] border-b-3 border-[#7A1233] pb-1"
                  : ""
              } flex items-center gap-[2px] sm:gap-2 cursor-pointer text-base md:text-lg`}
            >
              <FaIndustry /> Industrial
            </p>
          </div>
          <hr className="my-4 border-t border-gray-300 w-full max-w-[600px]" />
          <div className="flex items-center gap-3">
            <FaSearch className="text-[#7A1233]" />
            <input
              type="text"
              placeholder="Search..."
              className="outline-none text-xl w-full max-w-[350px]"
            />
          </div>
          <hr className="my-4 border-t border-gray-300 w-full max-w-[600px]" />
          <div className="flex flex-col sm:flex-row flex-wrap justify-evenly gap-4">
            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Search an area"
                className="outline-none"
              />
              <p className="h-6 border-r-2 border-gray-400 "></p>
              <div>
                <p className="text-gray-400 text-sm flex items-center gap-2">
                  Property Type <RiArrowDropDownLine />
                </p>
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
      <div className="max-w-[1450px] mx-auto px-2">
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">
          Sponsored Properties
        </h1>
        <PropertyCardSponsored />
      </div>
      <div>
        <FeaturedListings />
      </div>
      <div>
        <Properties24 />
      </div>
    </div>
  );
};

export default AllProperties;
