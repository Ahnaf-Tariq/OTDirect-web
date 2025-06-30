import { useRef } from "react";
import Properties from "../../assets/assets";
import {
  MdKeyboardArrowRight,
  MdOutlineBathroom,
  MdOutlineBedroomParent,
} from "react-icons/md";
import { TfiRuler } from "react-icons/tfi";
import { BsBuildings } from "react-icons/bs";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";

const PropertyCardFeatured = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -350 });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 350 });
  };

  return (
    <div className="relative w-full">
      {/* Arrows */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 bg-white shadow-lg p-2 rounded-full text-xl cursor-pointer"
      >
        <MdKeyboardArrowLeft />
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 bg-white shadow-lg p-2 rounded-full text-xl cursor-pointer"
      >
        <MdKeyboardArrowRight />
      </button>

      {/* Scroll Cards */}
      <div
        ref={scrollRef}
        className="flex overflow-x-hidden gap-4 py-4 scroll-smooth"
      >
        {Properties.filter(
          (item) => item.propertyType === "Featured Listings"
        ).map((item, index) => (
          <Link
            to={`/properties/${item._id}`}
            key={index}
            className="flex-none w-[320px] h-[350px] bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
          >
            <img
              className="w-full h-[156px] hover:opacity-70 object-cover"
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
                <p className="flex items-center gap-2 font-semibold">
                  <MdOutlineBedroomParent /> 3
                </p>
                <p className="flex items-center gap-2 font-semibold">
                  <MdOutlineBathroom /> 3
                </p>
                <p className="flex items-center gap-1 font-semibold">
                  <TfiRuler /> {item.squareYard}
                </p>
              </div>
              <div className="flex justify-between gap-2">
                <h2 className="text-base line-clamp-1 max-w-40">
                  {item.address}
                </h2>
                <p className="text-base text-[#7A1233] flex items-center gap-1 font-semibold">
                  <BsBuildings /> {item.type}
                </p>
              </div>
              <div className="flex justify-between mx-1">
                <button className="flex items-center gap-1 cursor-pointer font-mono border bg-[#7A1233] text-white rounded-xl p-2">
                  <BiMessageRoundedDetail /> Message
                </button>
                <button className="flex items-center gap-1 cursor-pointer font-mono border bg-white text-[#7A1233] rounded-xl p-2">
                  <FaWhatsapp /> Whatsapp
                </button>
                <button className="flex items-center gap-1 cursor-pointer border bg-white text-[#7A1233] rounded-xl p-2">
                  <IoIosCall /> Call
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PropertyCardFeatured;
