import { useContext, useEffect, useState } from "react";
import Sidebar from "./component/SidebarUser";
import NavbarUser from "./component/NavbarUser";
import { Context } from "../../context/Context";
import SidebarLogo from "./component/SidebarLogo";

const AddProperty = () => {
  const { sidebarDisplayUser, setSideBarDisplayUser } = useContext(Context);

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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProperty;
