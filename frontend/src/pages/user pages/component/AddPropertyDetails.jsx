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
  const [distanceOutFac, setDistanceOutFac] = useState({});
  const [unitOutFac, setUnitOutFac] = useState({});
  const [featuredImage, setFeaturedImage] = useState(null);
  const [propertyProofImage, setPropertyProofImage] = useState(null);
  const [galleryImage, setGalleryImage] = useState(null);
  const [threeDImage, setThreeDImage] = useState(null);
  const [OgImage, setOgImage] = useState(null);

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

  const outdoorFacilities = [
    "Parking Space",
    "Park",
    "Garden",
    "Swimming Pool",
    "Play Ground",
    "Fitness and Sports",
    "Community Centers",
    "Banks and ATMs",
    "Educational Institutions",
    "Shopping Malls",
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
          {Facilities.map((fac, index) => (
            <div key={index}>
              <p className="text-sm">{fac}</p>
              <input
                type="text"
                className="p-[2px] bg-gray-100 w-full rounded-sm outline-none"
              />
            </div>
          ))}
        </div>
      )}
      {activeTab === 4 && (
        <>
          <h1 className="py-5 text-lg text-center font-semibold text-[#7A1233]">
            Distance from your Property
          </h1>
          <div className="grid grid-cols-4 gap-4">
            {outdoorFacilities.map((outFac, index) => (
              <div key={index}>
                <p className="text-sm">{outFac}</p>
                <div className="flex">
                  <input
                    onChange={(e) =>
                      setDistanceOutFac((prev) => ({
                        ...prev,
                        [index]: e.target.value,
                      }))
                    }
                    type="number"
                    className="p-1 bg-gray-100 w-full rounded-sm outline-none"
                  />
                  <select
                    onChange={(e) =>
                      setUnitOutFac((prev) => ({
                        ...prev,
                        [index]: e.target.value,
                      }))
                    }
                    className="border border-gray-300 border-l-0 rounded-r-md p-2 bg-white"
                  >
                    <option value="KM">KM</option>
                    <option value="M">M</option>
                  </select>
                </div>

                {distanceOutFac[index] && (
                  <p className="text-xs text-[#7A1233] bg-[rgba(122,20,59,0.08)] inline px-2 py-[2px] rounded-sm font-semibold">
                    {distanceOutFac[index]}
                    <span>
                      {unitOutFac[index] === "M" ? " Meters" : " Kilometers"}
                    </span>
                  </p>
                )}
              </div>
            ))}
          </div>
        </>
      )}
      {activeTab === 5 && (
        <div className="p-4">
          <div className="flex gap-2">
            <div className="flex-1 flex flex-col gap-1">
              <p className="text-sm">Area</p>
              <input
                type="text"
                className="p-2 bg-gray-100 w-full rounded-md outline-none"
                placeholder="Search an Area"
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p className="text-sm">Location</p>
              <input
                type="text"
                className="p-2 bg-gray-100 w-full rounded-md outline-none"
                placeholder="Enter Location"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex-1 flex flex-col gap-1">
              <p className="text-sm">City</p>
              <input
                type="text"
                className="p-2 bg-gray-100 w-full rounded-md outline-none"
                placeholder="Enter City"
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p className="text-sm">State</p>
              <input
                type="text"
                className="p-2 bg-gray-100 w-full rounded-md outline-none"
                placeholder="Enter State"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-[50%] flex flex-col gap-1">
              <p className="text-sm">Country</p>
              <input
                type="text"
                className="p-2 bg-gray-100 w-full rounded-md outline-none"
                placeholder="Enter Country"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-[50%] flex flex-col gap-1">
              <p className="text-sm">Property Description</p>
              <textarea
                type="text"
                className="p-2 bg-gray-100 w-full rounded-md outline-none h-24"
                placeholder="Enter About Property"
              />
            </div>
          </div>
        </div>
      )}
      {activeTab === 6 && (
        <div className="p-4 grid grid-cols-4 gap-4">
          <div>
            <p className="text-sm font-medium mb-1">Featured Image</p>
            <label htmlFor="featuredImage">
              {featuredImage ? (
                <img
                  src={URL.createObjectURL(featuredImage)}
                  alt=""
                  className="bg-gray-100 rounded-md p-3 max-w-60 object-contain"
                />
              ) : (
                <p className="text-sm text-gray-500 p-4 bg-gray-100 rounded-md outline-none">
                  Drag & Drop your files or{" "}
                  <span className="underline">Browse</span>
                </p>
              )}
              <input
                type="file"
                id="featuredImage"
                onChange={(e) => setFeaturedImage(e.target.files[0])}
                className="hidden"
              />
            </label>
          </div>
          <div>
            <p className="text-sm font-medium mb-1">
              Property Proof(Bills, Papers etc)
            </p>
            <label htmlFor="propertyProof">
              {propertyProofImage ? (
                <img
                  src={URL.createObjectURL(propertyProofImage)}
                  alt=""
                  className="bg-gray-100 rounded-md p-3 max-w-60 object-contain"
                />
              ) : (
                <p className="text-sm text-gray-500 p-4 bg-gray-100 rounded-md outline-none">
                  Drag & Drop your files or{" "}
                  <span className="underline">Browse</span>
                </p>
              )}
              <input
                type="file"
                id="propertyProof"
                onChange={(e) => setPropertyProofImage(e.target.files[0])}
                className="hidden"
              />
            </label>
          </div>
          <div>
            <p className="text-sm font-medium mb-1">Gallery Image</p>
            <label htmlFor="galleryImage">
              {galleryImage ? (
                <img
                  src={URL.createObjectURL(galleryImage)}
                  alt=""
                  className="bg-gray-100 rounded-md p-3 max-w-60 object-contain"
                />
              ) : (
                <p className="text-sm text-gray-500 p-4 bg-gray-100 rounded-md outline-none">
                  Drag & Drop your files or{" "}
                  <span className="underline">Browse</span>
                </p>
              )}
              <input
                type="file"
                id="galleryImage"
                onChange={(e) => setGalleryImage(e.target.files[0])}
                className="hidden"
              />
            </label>
          </div>
          <div>
            <p className="text-sm font-medium mb-1">3D Image</p>
            <label htmlFor="3DImage">
              {threeDImage ? (
                <img
                  src={URL.createObjectURL(threeDImage)}
                  alt=""
                  className="bg-gray-100 rounded-md p-3 max-w-60 object-contain"
                />
              ) : (
                <p className="text-sm text-gray-500 p-4 bg-gray-100 rounded-md outline-none">
                  Drag & Drop your files or{" "}
                  <span className="underline">Browse</span>
                </p>
              )}
              <input
                type="file"
                id="3DImage"
                onChange={(e) => setThreeDImage(e.target.files[0])}
                className="hidden"
              />
            </label>
          </div>
        </div>
      )}
      {activeTab === 7 && (
        <div className="p-4 grid grid-cols-4 gap-4">
          <div>
            <p className="text-sm font-medium mb-1">Meta Title (Optional)</p>
            <input
              type="text"
              className="p-2 bg-gray-100 w-full rounded-md outline-none"
              placeholder="Enter Property Meta Title"
            />
            <p className="text-xs text-gray-500 mt-3">
              Warning: Meta Title length should not exceed 60 characters.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium mb-1">Og Image (Optional)</p>
            <label htmlFor="OgImage">
              {OgImage ? (
                <img
                  src={URL.createObjectURL(OgImage)}
                  alt=""
                  className="bg-gray-100 rounded-md p-3 max-w-60 object-contain"
                />
              ) : (
                <p className="text-sm text-gray-500 p-4 bg-gray-100 rounded-md outline-none">
                  Drag & Drop your files or{" "}
                  <span className="underline">Browse</span>
                </p>
              )}
              <input
                type="file"
                id="OgImage"
                onChange={(e) => setOgImage(e.target.files[0])}
                className="hidden"
              />
            </label>
          </div>
          <div>
            <p className="text-sm font-medium mb-1">Meta Keyword (Optional)</p>
            <textarea
              type="text"
              className="p-2 bg-gray-100 w-full rounded-md outline-none h-32"
              placeholder="Enter Property Meta Keywords"
            />
            <p className="text-xs text-gray-500 mt-3">
              Warning: Meta Keywords are not more than 10 keyword phrases &
              should be comma separated.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium mb-1">
              Property Meta Description (Optional)
            </p>
            <textarea
              type="text"
              className="p-2 bg-gray-100 w-full rounded-md outline-none h-32"
              placeholder="Enter Property Meta Description"
            />
            <p className="text-xs text-gray-500 mt-3">
              Warning: Meta Description length should between 50 to 160
              characters.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddPropertyDetails;
