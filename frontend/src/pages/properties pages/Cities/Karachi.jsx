import React from "react";
import TitleImage from "../../../components/TitleImage";
import FilterCardCity from "../../../components/FilterCardCity";
import Properties from "../../../assets/assets";
import { FaBath, FaBed } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { BsBuildings } from "react-icons/bs";
import { FaKitchenSet } from "react-icons/fa6";

const Karachi = () => {
  return (
    <div>
      <TitleImage title={"Properties Listed in Karachi"} />
      <div className="max-w-[1450px] mx-auto flex flex-col md:flex-row justify-between gap-4 px-4 my-14">
        {/* left filter card */}
        <div className="w-full md:w-1/4">
          <FilterCardCity />
        </div>
        {/* right property cards */}
        <div className="w-full md:w-3/4 space-y-4">
          <h1 className="border rounded-lg border-gray-300 font-semibold p-4">
            24 Properties found
          </h1>
          <div className="">
            {Properties.filter(
              (item) => item.propertyType === "24 Properties found"
            ).map((item, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row rounded-xl border border-gray-300 overflow-hidden mb-4 cursor-pointer"
              >
                {/* Left Image */}
                <div className="w-full lg:w-[350px] h-[250px] hover:opacity-70 flex-shrink-0">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right Section */}
                <div className="flex-1 p-4 flex flex-col justify-between">
                  {/* Left Details */}
                  <div className="flex justify-between items-start">
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <p className="text-sm font-medium text-[#7A1233] flex items-center gap-1">
                          <BsBuildings /> {item.type}
                        </p>
                        <div className="space-y-2">
                          <h2 className="font-semibold text-lg max-w-xs line-clamp-1">
                            {item.title}
                          </h2>
                          <p className="text-sm text-gray-500 max-w-lg line-clamp-1">
                            {item.address}
                          </p>
                        </div>
                      </div>
                      {/* icons */}
                      <div className="flex gap-2">
                        <div className="bg-[#f5f2f3] text-[#7A1233] text-xs px-2 py-[6px] rounded-full flex items-center gap-1">
                          <FaKitchenSet /> 1
                        </div>
                        <div className="bg-[#f5f2f3] text-[#7A1233] text-xs px-2 py-[6px] rounded-full flex items-center gap-1">
                          <FaBed className="text-[12px]" /> 5
                        </div>
                        <div className="bg-[#f5f2f3] text-[#7A1233] text-xs px-2 py-[6px] rounded-full flex items-center gap-1">
                          <FaBath className="text-[12px]" /> 3
                        </div>
                      </div>
                    </div>

                    {/* Heart Icon */}
                    <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center cursor-pointer">
                      <CiHeart />
                    </div>
                  </div>

                  {/* Bottom Line */}
                  <div className="border-b mt-8 lg:mt-0 mb-6 lg:mb-2"></div>

                  {/* Price Tag */}
                  <div className="flex justify-end">
                    <p className="font-semibold">
                      Pkr {item.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Karachi;
