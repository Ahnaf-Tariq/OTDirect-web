import React from "react";
import Properties from "../../assets/assets";
import { MdOutlineBathroom, MdOutlineBedroomParent } from "react-icons/md";
import { TfiRuler } from "react-icons/tfi";
import { BsBuildings } from "react-icons/bs";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

const PropertyCardSponsored = () => {
  return (
    <div className="flex overflow-x-auto gap-4 py-4 scrollbar-hide scroll-smooth">
      {Properties.filter(
        (item) => item.propertyType === "Sponsored Properties"
      ).map((item, index) => (
        <div
          key={index}
          className="w-[320px] h-[350px] bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
        >
          <img
            className="w-full h-[156px] hover:opacity-70"
            src={item.image}
            alt=""
          />
          <div className="flex flex-col gap-3 p-2">
            <div className="flex justify-between gap-2">
              <h2 className="text-base font-semibold line-clamp-2 max-w-40">
                {item.title}
              </h2>
              <p className="text-lg font-semibold">Rs: {item.price}</p>
            </div> 
            <div className="flex justify-start gap-6">
              <p className="flex items-center gap-2 font-semibold"><MdOutlineBedroomParent /> 3</p>
              <p className="flex items-center gap-2 font-semibold"><MdOutlineBathroom /> 3</p>
              <p className="flex items-center gap-1 font-semibold"><TfiRuler /> {item.squareYard}</p>
            </div>
            <div className="flex justify-between gap-2">
              <h2 className="text-base line-clamp-1 max-w-40">
                {item.address}
              </h2>
              <p className="text-base text-orange-800 flex items-center gap-1 font-semibold"><BsBuildings /> {item.type}</p>
            </div> 
            <div className="flex justify-between mx-1">
              <button className="flex items-center gap-1 cursor-pointer font-mono border bg-orange-800 text-white rounded-xl p-2"><BiMessageRoundedDetail /> Message</button>
              <button className="flex items-center gap-1 cursor-pointer font-mono border bg-white text-orange-800 rounded-xl p-2"><FaWhatsapp /> Whatsapp</button>
              <button className="flex items-center gap-1 cursor-pointer border bg-white text-orange-800 rounded-xl p-2"><IoIosCall /> Call</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyCardSponsored;
