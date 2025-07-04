import { useState } from "react";
import Sidebar from "./component/SidebarUser";
import NavbarUser from "./component/NavbarUser";
import { FaHome, FaStar } from "react-icons/fa";

const Dashboard = ({ setToken }) => {
  const [sidebarDisplay,setSideBarDisplay] = useState(true)
  return (
    <div className="flex">
      <div>
        <Sidebar setToken={setToken} sidebarDisplay={sidebarDisplay} setSideBarDisplay={setSideBarDisplay}/>
      </div>
      <div className="w-full">
        <NavbarUser sidebarDisplay={sidebarDisplay} setSideBarDisplay={setSideBarDisplay}/>
        <div className="max-w-7xl mx-auto px-4">
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
                <FaHome className="text-2xl"/>
              </div>
            </div>
            <div className="flex items-center justify-between w-full lg:w-1/3">
              <div>
                <p className="text-lg">Total Views</p>
                <p className="text-xl font-semibold">0</p>
              </div>
              <div className="bg-black text-white rounded-full p-4">
                <FaStar className="text-2xl"/>
              </div>
            </div>
          </div>
          <div className="mt-6 border border-gray-400 rounded-md bg-gray-100 text-center py-18 text-gray-600 text-lg">
            No Data Available
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
