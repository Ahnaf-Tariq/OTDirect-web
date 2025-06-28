import React from "react";
import TitleImage from "../../../components/TitleImage";
import { useNavigate } from "react-router-dom";

const NearbyCities = () => {
  const navigate = useNavigate()
  return (
    <div>
      <TitleImage title={"Properties Nearby Cities"} />
      <div className="max-w-[1450px] mx-auto flex flex-wrap py-20 px-4 gap-4">
        <div onClick={()=>navigate('/properties/city/Karachi')} className="bg-gray-900 flex items-end h-[350px] w-[350px] rounded-md cursor-pointer">
          <div className="text-white p-4">
            <h1 className="pb-1 font-bold text-base">Karachi</h1>
            <p>24 Properties</p>
          </div>
        </div>
        <div onClick={()=>navigate('/properties/city/Sofia')} className="bg-gray-900 flex items-end h-[350px] w-[350px] rounded-md cursor-pointer">
          <div className="text-white p-4">
            <h1 className="pb-1 font-bold text-base">Sofia</h1>
            <p>2 Properties</p>
          </div>
        </div>
        <div onClick={()=>navigate('/properties/city/Salcia')} className="bg-gray-900 flex items-end h-[350px] w-[350px] rounded-md cursor-pointer">
          <div className="text-white p-4">
            <h1 className="pb-1 font-bold text-base">Salcia</h1>
            <p className="">1 Properties</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NearbyCities;
