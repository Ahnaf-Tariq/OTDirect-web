import { useState } from "react";
import { BsBuilding, BsBuildings } from "react-icons/bs";
import { FaHotel, FaWarehouse } from "react-icons/fa";
import { FaPeopleRoof, FaShopLock } from "react-icons/fa6";
import { GiFamilyHouse } from "react-icons/gi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { IoIosRestaurant, IoMdCart } from "react-icons/io";
import { MdFactory, MdOutlineStoreMallDirectory } from "react-icons/md";

const AddPropertyDetails = ({ activeTab }) => {
  const [selectedPropertyType, setSelectedPropertyType] = useState("");

  const Categories = [
    {
      icon: <HiOutlineOfficeBuilding />,
      name: "Office",
    },
    {
      icon: <FaShopLock />,
      name: "Shop",
    },
    {
      icon: <FaWarehouse />,
      name: "Warehouse",
    },
    {
      icon: <IoIosRestaurant />,
      name: "Restaurant",
    },
    {
      icon: <FaPeopleRoof />,
      name: "Meeting Room",
    },
    {
      icon: <BsBuildings />,
      name: "Building",
    },
    {
      icon: <IoMdCart />,
      name: "Mart",
    },
    {
      icon: <MdOutlineStoreMallDirectory />,
      name: "Mall / Plaza",
    },
    {
      icon: <GiFamilyHouse />,
      name: "Villa",
    },
    {
      icon: <MdFactory />,
      name: "Factory",
    },
  ];

  const Facilities = [
    "Kitchen",
    "Air Conditioners",
    "Rooms",
    "Wifi",
    "Bathroom",
    "Storage Space",
    "Fitness Area",
    "Gamming Area",
    "Wardrobes",
    "Balconies",
    "Parking",
    "Garden & Yards",
    "Swimming pools",
    "Rooftop terraces",
    "Workstation",
    "Furniture",
    "Conference Room",
    "Centralized HVAC systems",
    "Restrooms",
    "IT Infrastructure",
    "Reception",
    "Power Backup",
    "Fire safety systems",
    "Waiting Area",
  ];

  return (
    <div className="px-4">
      {activeTab === 0 && (
        <div className="p-4">
          <p className="text-sm ">Property Type</p>
          <div className="flex gap-2 py-2">
            <div className="flex-1 flex gap-2 items-center bg-gray-100 rounded-md p-3">
              <input
                type="radio"
                className="cursor-pointer size-4"
                name="property-type"
                value="Commercial"
                onChange={(e) => setSelectedPropertyType(e.target.value)}
              />
              <p>Commercial</p>
            </div>
            <div className="flex-1 flex gap-2 items-center bg-gray-100 rounded-md p-3">
              <input
                type="radio"
                className="cursor-pointer size-4"
                name="property-type"
                value="Residential"
                onChange={(e) => setSelectedPropertyType(e.target.value)}
              />
              <p>Residential</p>
            </div>
            <div className="flex-1 flex gap-2 items-center bg-gray-100 rounded-md p-3">
              <input
                type="radio"
                className="cursor-pointer size-4"
                name="property-type"
                value="Industrial"
                onChange={(e) => setSelectedPropertyType(e.target.value)}
              />
              <p>Industrial</p>
            </div>
          </div>
        </div>
      )}
      {activeTab === 1 && (
        <div className="p-4 grid grid-cols-5 gap-4">
          {Categories.map((categ, index) => (
            <div
              key={index}
              className="border border-[#7A1233] rounded-lg p-3 flex gap-3 items-center transition duration-300 cursor-pointer hover:bg-[#7A1233] hover:text-white"
            >
              <p className="text-2xl text-[#7A1233] bg-white rounded-full p-2">
                {categ.icon}
              </p>
              <p className="font-semibold text-lg">{categ.name}</p>
            </div>
          ))}
        </div>
      )}
      {activeTab === 2 && (
        <div className="flex gap-4 p-4">
          {/* left side */}
          <div className="flex-1 flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <p className="text-sm">Title</p>
              <input
                type="text"
                className="p-2 bg-gray-100 w-full rounded-md outline-none"
                placeholder="Enter Property Title"
              />
            </div>
            <div className="flex gap-2">
              <div className="flex-1 flex flex-col gap-1">
                <p className="text-sm">Rent</p>
                <input
                  type="number"
                  className="p-2 bg-gray-100 w-full rounded-md outline-none"
                  placeholder="Enter Property Rent (Pkr)"
                />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <p className="text-sm">Rent Duration</p>
                <select className="w-full p-2 border text-gray-500 border-gray-300 rounded-md outline-none">
                  <option value="Select Rent Duration">
                    Select Rent Duration
                  </option>
                  <option value="Daily">Daily</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Yearly">Yearly</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm">Mobile Number</p>
              <input
                type="number"
                className="p-2 bg-gray-100 w-full rounded-md outline-none"
                placeholder="Enter Mobile Number"
              />
            </div>
          </div>
          {/* right side */}
          <div className="flex-1 flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <p className="text-sm">Square Yard</p>
              <input
                type="text"
                className="p-2 bg-gray-100 w-full rounded-md outline-none"
                placeholder="Enter Square Yard"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm">Property Description</p>
              <textarea
                type="text"
                className="p-2 bg-gray-100 w-full rounded-md outline-none h-[117px]"
                placeholder="Enter About Property"
              />
            </div>
          </div>
        </div>
      )}
      {activeTab === 3 && (
        <div className="p-4 grid grid-cols-4 gap-4">
          {Facilities.map((ele) => (
            <div>
              <p className="text-sm">{ele}</p>
              <input
                type="text"
                className="p-[2px] bg-gray-100 w-full rounded-sm outline-none"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddPropertyDetails;
