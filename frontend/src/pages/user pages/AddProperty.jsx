import { useContext, useEffect, useState } from "react";
import Sidebar from "./component/SidebarUser";
import NavbarUser from "./component/NavbarUser";
import { Context } from "../../context/Context";
import SidebarLogo from "./component/SidebarLogo";
import AddPropertyDetails from "./component/AddPropertyDetails";

const AddProperty = () => {
  const { sidebarDisplayUser, setSideBarDisplayUser } = useContext(Context);
  const [activeTab, setActiveTab] = useState(0);

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

  const submitProperty = async () => {
    try {
      alert('functionality not integrated')
    } catch (error) {
      console.log(error);
    }
  };
  
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

          <div className="relative flex-1 px-4 py-6">
            <h1 className="text-xl sm:text-2xl font-semibold p-4 pb-6">
              Add Property
            </h1>

            {/* Fixed tab container */}
            <div className="w-full pt-2">
              <div className="overflow-x-scroll scrollbar-hide">
                <div className="flex gap-8 min-w-max px-4">
                  {propertyTabs.map((tab, index) => (
                    <p
                      onClick={() => setActiveTab(index)}
                      key={index}
                      className={`py-2 font-medium cursor-pointer whitesspace-nowrap flex-shrink-0 ${
                        activeTab === index &&
                        "text-[#7A1233] border-b-2 border-[#7A1233]"
                      }`}
                    >
                      {tab}
                    </p>
                  ))}
                </div>
              </div>
              <hr className="border-gray-300 mx-4" />
            </div>

            <AddPropertyDetails activeTab={activeTab} />

            {/* next button */}
            <button
              onClick={() =>
                activeTab === 7 ? submitProperty() : setActiveTab(activeTab + 1)
              }
              className="absolute bottom-30 right-8 text-white bg-[#7A1233] font-sans px-6 py-2 rounded-md cursor-pointer"
            >
              {activeTab === 7 ? "Submit Property" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProperty;
