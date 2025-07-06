import { useContext, useEffect } from "react";
import Sidebar from "./component/SidebarUser";
import { Context } from "../../context/Context";
import NavbarUser from "./component/NavbarUser";
import SidebarLogo from "./component/SidebarLogo";

const Favourites = () => {
  const { sidebarDisplayUser, setSideBarDisplayUser } = useContext(Context);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSideBarDisplayUser(false);
      } else {
        setSideBarDisplayUser(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
            <h1 className="text-2xl font-semibold p-6">Favourites</h1>
            <div className="flex flex-col justify-center items-center gap-1 mt-18 px-2">
              <img
                className="size-[130px] sm:size-[180px] mb-4"
                src="https://otdirect.vercel.app/_next/static/media/no_data_found_illustrator.c5c383a7.svg"
                alt=""
              />
              <h1 className="text-2xl text-[#7A1233] font-semibold">
                No Data Found
              </h1>
              <p>
                We're sorry what you were looking for. please try another way
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favourites;
