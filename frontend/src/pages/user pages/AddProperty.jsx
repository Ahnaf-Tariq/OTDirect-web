import { useContext, useEffect, useState } from "react";
import Sidebar from "./component/SidebarUser";
import NavbarUser from "./component/NavbarUser";
import { Context } from "../../context/Context";
import SidebarLogo from "./component/SidebarLogo";

const AddProperty = () => {
  const { sidebarDisplayUser, setSideBarDisplayUser } = useContext(Context);
  const [propertyTypes, setPropertyTypes] = useState(true);
  const [categories, setCategories] = useState(false);
  const [propertyDetails, setPropertyDetails] = useState(false);
  const [facilities, setFacilities] = useState(false);
  const [outdoorFacilities, setOutdoorFacilities] = useState(false);
  const [location, setLocation] = useState(false);
  const [image, setImage] = useState(false);
  const [SEO, setSEO] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setSideBarDisplayUser(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setSideBarDisplayUser]);

  const propertyTabs = [
    "Property Types",
    "Categories",
    "Property Details",
    "Facilities",
    "Outdoor Facilities",
    "Location",
    "Image",
    "SEO Settings",
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col min-h-0">
        <NavbarUser />

        <div className="flex flex-1 min-h-0">
          {!sidebarDisplayUser && (
            <div className="h-full">
              <SidebarLogo />
            </div>
          )}

          <div className="flex-1 overflow-auto">
            <div className="px-4 py-6">
              <h1 className="text-xl sm:text-2xl font-semibold p-4 pb-6">
                Add Property
              </h1>

              {/* Fixed tab container */}
              <div className="w-full sticky top-0 bg-white z-10 pt-2">
                <div className="overflow-x-auto pb-2">
                  <div className="flex gap-4 w-max px-4">
                    {propertyTabs.map((tab, index) => (
                      <p
                        key={index}
                        className="py-2 font-medium cursor-pointer hover:text-blue-600 whitespace-nowrap"
                      >
                        {tab}
                      </p>
                    ))}
                  </div>
                </div>
                <hr className="border-gray-300" />
              </div>

              {/* Content area */}
              {propertyTypes === true && (
                <div className="max-w-7xl mx-auto mt-8 min-h-[500px]">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-lg font-semibold mb-4">
                      Property Type
                    </h2>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2">
                        <input type="radio" name="property-type" />
                        Commercial
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" name="property-type" />
                        Residential
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" name="property-type" />
                        Industrial
                      </label>
                    </div>

                    <div className="mt-8">
                      <button onClick={()=>setPropertyTypes(false)} className="bg-[#7A1233] text-white px-6 py-2 rounded-md">
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProperty;
