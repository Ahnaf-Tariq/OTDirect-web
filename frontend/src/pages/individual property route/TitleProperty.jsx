import React from "react";
import { FaShareFromSquare } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";

const TitleProperty = ({ productData }) => {
  return (
    //  {/* title div */}
    <div className="flex justify-between items-center pt-18 px-4">
      <div className="space-y-2">
        <h1 className="text-lg sm:text-xl font-semibold">
          {productData.title}
        </h1>
        <p className="flex items-center gap-1 text-gray-600 font-semibold text-xs sm:text-sm">
          <MdLocationPin /> {productData.address}
        </p>
      </div>
      <div className="hidden sm:flex text-[#7A1233] text-3xl cursor-pointer">
        <FaShareFromSquare />
      </div>
    </div>
  );
};

export default TitleProperty;
