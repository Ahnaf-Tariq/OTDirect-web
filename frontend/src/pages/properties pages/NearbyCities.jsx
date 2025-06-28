import React from "react";
import TitleImage from "../../components/TitleImage";

const NearbyCities = () => {
  return (
    <div>
      <TitleImage title={"Properties Nearby Cities"} />
      <div className="max-w-[1450px] mx-auto flex py-20 gap-4">
        <div className="bg-gray-900 flex items-end h-[350px] w-[350px] rounded-md cursor-pointer">
          <div className="text-white p-4">
            <h1 className="pb-1 font-bold text-base">Karachi</h1>
            <p>24 Properties</p>
          </div>
        </div>
        <div className="bg-gray-900 flex items-end h-[350px] w-[350px] rounded-md cursor-pointer">
          <div className="text-white p-4">
            <h1 className="pb-1 font-bold text-base">Sofia</h1>
            <p>2 Properties</p>
          </div>
        </div>
        <div className="bg-gray-900 flex items-end h-[350px] w-[350px] rounded-md cursor-pointer">
          <div className="text-white p-4">
            <h1 className="pb-1 font-bold text-base">Salicia</h1>
            <p className="">1 Properties</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NearbyCities;
