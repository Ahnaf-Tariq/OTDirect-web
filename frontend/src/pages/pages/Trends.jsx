import React, { useState } from "react";
import { FaHouse, FaBuilding, FaIndustry } from "react-icons/fa6";

const Trends = () => {
  const [colorFilter, setColorFilter] = useState("");

  return (
    <div className="mt-32 max-w-[1500px] mx-auto">
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
      <div className="border border-gray-100 h-96 rounded-lg shadow-md">
        <div className="p-5">
          <h1 className="text-lg font-semibold">Trending Areas</h1>
          <p className="mt-5">Loading graph data...</p>
        </div>
      </div>
    </div>
  );
};

export default Trends;
