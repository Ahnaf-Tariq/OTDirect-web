import { useContext, useEffect } from "react";
import Sidebar from "./component/SidebarUser";
import { Context } from "../../context/Context";
import { FaHome, FaStar } from "react-icons/fa";
import NavbarUser from "./component/NavbarUser";
import SidebarLogo from "./component/SidebarLogo";

const BoostedProperties = () => {
  const { sidebarDisplayUser, setSideBarDisplayUser } = useContext(Context);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSideBarDisplayUser(false); // show SidebarLogo
      } else {
        setSideBarDisplayUser(true); // show full Sidebar
      }
    };

    handleResize(); // call once on mount

    window.addEventListener("resize", handleResize); // listen on resize

    return () => window.removeEventListener("resize", handleResize); // clean up
  }, []);
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="w-full">
        <NavbarUser />
        <div className="flex">
          {!sidebarDisplayUser && (
            <div>
              <SidebarLogo />
            </div>
          )}
          <div className="px-4 w-full">
            <div className="flex flex-col lg:flex-row justify-between gap-10">
              <div className="relative w-full lg:w-1/3 h-32 rounded-lg overflow-hidden">
                <img
                  src="https://otdirect-admin.getweys.tech/images//property_title_img/1742130790.2105.jpg"
                  alt="Background"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[rgba(8,124,124,0.568)] flex items-center px-4">
                  <div className="space-y-2">
                    <h1 className="text-white text-2xl xl:text-3xl font-bold">
                      hy, Ahnaf Hamid
                    </h1>
                    <p className="text-white font-semibold">
                      Manage your profile and view property
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between w-full lg:w-1/3">
                <div>
                  <p className="text-lg">Total Properties</p>
                  <p className="text-xl font-semibold">0</p>
                </div>
                <div className="bg-black text-white rounded-full p-4">
                  <FaHome className="text-2xl" />
                </div>
              </div>
              <div className="flex items-center justify-between w-full lg:w-1/3">
                <div>
                  <p className="text-lg">Total Views</p>
                  <p className="text-xl font-semibold">0</p>
                </div>
                <div className="bg-black text-white rounded-full p-4">
                  <FaStar className="text-2xl" />
                </div>
              </div>
            </div>
            <div className="mt-6 border border-gray-400 rounded-md bg-gray-100 text-center py-18 text-gray-600 text-lg">
              No Data Available
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoostedProperties;
