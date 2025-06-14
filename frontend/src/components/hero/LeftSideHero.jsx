import React from "react";
import { FaHouse, FaBuilding, FaIndustry } from "react-icons/fa6";

const LeftSideHero = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold font-serif my-10">
        We Connect <span className="text-orange-800">Owners</span> & <span className="text-orange-800">Tenants</span> for Hassle-Free Rental Properties
      </h1>
      <div className="flex gap-4">
        <p className="flex items-center gap-2">
          <FaHouse /> Residential
        </p>
        <p className="flex items-center gap-2">
          <FaBuilding /> Commercial
        </p>
        <p className="flex items-center gap-2">
          <FaIndustry /> Industrial
        </p>
      </div>
      <hr className="my-4 text-gray-400"/>
    </div>
  );
};

export default LeftSideHero;
