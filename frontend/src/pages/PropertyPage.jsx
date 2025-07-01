import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Properties from "../assets/assets";
import { FaKitchenSet, FaShareFromSquare } from "react-icons/fa6";
import {
  MdBathroom,
  MdLocationPin,
  MdOutlineBedroomParent,
} from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { BsBuildings } from "react-icons/bs";
import { TfiRuler } from "react-icons/tfi";
import {
  FaArrowRight,
  FaCar,
  FaParking,
  FaRegClock,
  FaWifi,
} from "react-icons/fa";
import { IoCall, IoChatboxOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { LuAirVent } from "react-icons/lu";

const PropertyPage = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const [showDesc, setShowDesc] = useState(false);

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
        <div className="w-full lg:w-[34%] min-h-[230px] sm:h-[230px] rounded-2xl shadow md:shadow-xl p-4">
          <div className="flex justify-between">
            <p className="text-2xl md:text-3xl font-semibold">
              <span className="text-sm text-gray-600">PKR </span>
              {productData.price}
            </p>
            <div className="flex gap-2">
              <CiHeart className="text-3xl text-[#7A1233] cursor-pointer" />
              <FaShareFromSquare className="sm:hidden text-[#7A1233] text-3xl cursor-pointer" />
            </div>
          </div>

          <hr className="text-gray-400 my-4" />

          <div className="flex justify-between mb-4">
            <p className="flex items-center gap-[2px] font-semibold">
              <TfiRuler /> {productData.squareYard}
            </p>
            <p className="flex items-center gap-2 font-semibold text-[#7A1233] text-lg">
              <BsBuildings /> {productData.type}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button className="flex-1 flex items-center justify-center gap-2 border-2 border-[#7A1233] text-[#7A1233] p-2 rounded-lg font-semibold text-base sm:text-lg cursor-pointer  hover:text-white hover:bg-[#7A1233]">
              <IoChatboxOutline /> Chat
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 border-2 border-[#7A1233] text-[#7A1233] p-2 rounded-lg font-semibold text-base sm:text-lg cursor-pointer hover:text-white hover:bg-[#7A1233]">
              <IoCall /> Call
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white p-2 rounded-lg font-semibold text-base sm:text-lg cursor-pointer">
              <FaWhatsapp className="text-xl" /> Whatsapp
            </button>
          </div>

          <div className="text-sm text-gray-500 mt-4 flex justify-between items-center">
            <p className="flex items-center gap-2 font-semibold text-base">
              <FaRegClock /> 3 months ago
            </p>
            <span className="text-red-500 text-base cursor-pointer">
              Report Property
            </span>
          </div>
        </div>
      </div>

      {/* description div */}
      <div className="w-full lg:max-w-[66%] p-4">
        {/* About Property */}
        <div>
          <h1 className="mb-3 font-semibold text-lg text-gray-700">
            About Property
          </h1>
          <p>Defence {productData.squareYard}</p>
          <p>Ground portion for rent </p>
          <p>2 bedroom + study</p>
          {showDesc && (
            <>
              <p>Drawing</p>
              <p>Dining</p>
              <p>TV Launch</p>
              <p>Kitchen</p>
              <p>Marble</p>
              <p>Servant Quarter</p>
              <p>Line Water</p>
              <p>2 Car Parking</p>
            </>
          )}
          {showDesc ? (
            <p
              onClick={() => setShowDesc(false)}
              className="cursor-pointer text-[#7A1233] mt-2 font-medium flex items-center gap-2"
            >
              Show Less{" "}
              <span className="hover:translate-x-1 hover:duration-300">
                <FaArrowRight />
              </span>
            </p>
          ) : (
            <p
              onClick={() => setShowDesc(true)}
              className="cursor-pointer text-[#7A1233] mt-2 font-medium flex items-center gap-2"
            >
              Show More{" "}
              <span className="hover:translate-x-1 hover:duration-300">
                <FaArrowRight />
              </span>
            </p>
          )}
        </div>
        <hr className="text-gray-400 my-4" />
        {/* Features & Ammenities */}
        <div>
          <h1 className="mb-3 font-semibold text-lg text-gray-700">
            Features & Ammenities
          </h1>
          <div className="flex flex-wrap gap-4">
            {/* 1 */}
            <div className="flex items-center gap-3 p-2 w-44 rounded-lg hover:bg-gray-100">
              <p className="text-xl text-[#7A1233]">
                <FaKitchenSet />
              </p>
              <div>
                <p className="text-sm">Kitchen</p>
                <p>1</p>
              </div>
            </div>
            {/* 2 */}
            <div className="flex items-center gap-3 p-2 w-44 rounded-lg hover:bg-gray-100">
              <p className="text-xl text-[#7A1233]">
                <LuAirVent />
              </p>
              <div>
                <p className="text-sm">Air Conditioner</p>
                <p>6</p>
              </div>
            </div>
            {/* 3 */}
            <div className="flex items-center gap-3 p-2 w-44 rounded-lg hover:bg-gray-100">
              <p className="text-xl text-[#7A1233]">
                <MdOutlineBedroomParent />
              </p>
              <div>
                <p className="text-sm">Rooms</p>
                <p>3</p>
              </div>
            </div>
            {/* 4 */}
            <div className="flex items-center gap-3 p-2 w-44 rounded-lg hover:bg-gray-100">
              <p className="text-xl text-[#7A1233]">
                <FaWifi />
              </p>
              <div>
                <p className="text-sm">Wifi</p>
                <p>2</p>
              </div>
            </div>
            {/* 5 */}
            <div className="flex items-center gap-3 p-2 w-44 rounded-lg hover:bg-gray-100">
              <p className="text-xl text-[#7A1233]">
                <MdBathroom />
              </p>
              <div>
                <p className="text-sm">Bathroom</p>
                <p>3</p>
              </div>
            </div>
            {/* 6 */}
            <div className="flex items-center gap-3 p-2 w-44 rounded-lg hover:bg-gray-100">
              <p className="text-xl text-[#7A1233]">
                <FaCar />
              </p>
              <div>
                <p className="text-sm">Parking</p>
                <p>1</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="text-gray-400 my-4" />
        {/* Outdoor Facilities */}
        <div>
          <h1 className="mb-3 font-semibold text-lg text-gray-700">
            Outdoor Facilities
          </h1>
          <div className="flex items-center gap-3 p-2 w-44 rounded-lg hover:bg-gray-100">
            <p className="text-xl text-[#7A1233]">
              <FaCar />
            </p>
            <div>
              <p className="text-sm">Parking Space</p>
              <p className="text-xs">1 Kilometre</p>
            </div>
          </div>
        </div>
        <hr className="text-gray-400 my-4" />
        {/* bottom address div */}
        <div className="max-w-3xl flex justify-between gap-4">
          <div className="space-y-4 font-semibold">
            <h1>Address</h1>
            <h1>City</h1>
            <h1>State</h1>
            <h1>Country</h1>
          </div>
          <div className="space-y-4">
            <p className="line-clamp-1">{productData.address}</p>
            <p>Karachi</p>
            <p>Sindh</p>
            <p>Pakistan</p>
          </div>
          {/* <div className="flex gap-2">
                <h1>Address</h1>
                <p>{productData.address}</p>
            </div>
            <div className="flex gap-2">
                <h1>City</h1>
                <p>Karachi</p>
            </div>
            <div className="flex gap-2">
                <h1>State</h1>
                <p>Sindh</p>
            </div>
            <div className="flex gap-2">
                <h1>Country</h1>
                <p>Pakistan</p>
            </div> */}
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default PropertyPage;
