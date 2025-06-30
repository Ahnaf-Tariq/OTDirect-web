import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Properties from "../assets/assets";
import { FaShareFromSquare } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { BsBuildings } from "react-icons/bs";
import { TfiRuler } from "react-icons/tfi";
import { FaRegClock } from "react-icons/fa";
import { IoCall, IoChatboxOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

const PropertyPage = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const product = Properties.find((item) => item._id === id);
    setProductData(product);
    console.log(product);
  }, []);
  return productData ? (
    <div className="max-w-[1500px] mx-auto my-10">
      {/* title div */}
      <div className="flex justify-between items-center pt-18 px-4">
        <div className="space-y-2">
          <h1 className="text-xl font-semibold">{productData.title}</h1>
          <p className="flex items-center gap-1 text-gray-600 font-semibold text-sm">
            <MdLocationPin /> {productData.address}
          </p>
        </div>
        <div className="text-[#7A1233] text-3xl cursor-pointer">
          <FaShareFromSquare />
        </div>
      </div>

      <hr className="text-gray-400 my-4" />

      {/* image & price div */}
      <div className="flex flex-col lg:flex-row gap-4 px-4">
        {/* image div */}
        <div className="w-full lg:w-[66%]">
          <img
            src={productData.image}
            className="rounded-lg w-full h-[400px] object-cover"
            alt=""
          />
        </div>

        {/* price box div */}
        <div className="w-full lg:w-[34%] min-h-[230px] sm:h-[230px] rounded-2xl shadow-xl p-4">
          <div className="flex justify-between">
            <p className="text-3xl font-semibold">
              <span className="text-sm text-gray-600">PKR </span>{productData.price}
            </p>
            <CiHeart className="text-3xl text-[#7A1233] cursor-pointer" />
          </div>

          <hr className="text-gray-400 my-4" />

          <div className="flex justify-between mb-4">
            <p className="flex items-center gap-[2px] font-semibold"><TfiRuler /> {productData.squareYard}</p>
            <p className="flex items-center gap-2 font-semibold text-[#7A1233] text-lg"><BsBuildings /> {productData.type}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button className="flex-1 flex items-center justify-center gap-2 border-2 border-[#7A1233] text-[#7A1233] p-2 rounded-lg font-semibold text-lg cursor-pointer  hover:text-white hover:bg-[#7A1233]">
              <IoChatboxOutline /> Chat
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 border-2 border-[#7A1233] text-[#7A1233] p-2 rounded-lg font-semibold text-lg cursor-pointer hover:text-white hover:bg-[#7A1233]">
              <IoCall /> Call
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white p-2 rounded-lg font-semibold text-lg cursor-pointer">
              <FaWhatsapp className="text-xl"/> Whatsapp
            </button>
          </div>

          <div className="text-sm text-gray-500 mt-4 flex justify-between items-center">
            <p className="flex items-center gap-2 font-semibold text-base"><FaRegClock /> 3 months ago</p>
            <span className="text-red-500 text-base cursor-pointer">Report Property</span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default PropertyPage;
