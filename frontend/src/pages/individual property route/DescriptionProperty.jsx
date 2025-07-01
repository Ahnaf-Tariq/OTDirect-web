import { useState } from "react";
import MapViewProperty from "./MapViewProperty";
import { FaKitchenSet } from "react-icons/fa6";
import { MdBathroom, MdOutlineBedroomParent } from "react-icons/md";
import { FaArrowRight, FaCar, FaWifi } from "react-icons/fa";
import { LuAirVent } from "react-icons/lu";

const DescriptionProperty = ({ productData }) => {
    
      const [showDesc, setShowDesc] = useState(false);
  return (
    // {/* description div */}
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
      </div>

      {/* google map div */}

      <div className="w-full mt-8">
        <div className="h-[300px]">
          <MapViewProperty />
        </div>
        <hr className="text-gray-400 my-4" />
        <button className="w-full bg-[#7A1233] text-white rounded-lg font-semibold p-2 cursor-pointer">
          Hire OT Consultant
        </button>
      </div>
    </div>
  );
};

export default DescriptionProperty;
