import { useContext, useEffect } from "react";
import Sidebar from "./component/SidebarUser";
import { Context } from "../../context/Context";
import NavbarUser from "./component/NavbarUser";
import SidebarLogo from "./component/SidebarLogo";

const UserNotification = () => {
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
            <h1 className="text-xl sm:text-2xl font-semibold p-3 sm:p-5">User Notification</h1>
            <div className="border border-gray-300 rounded-md p-2">
              <div className="bg-gray-100 font-semibold flex gap-2 justify-evenly p-2">
                <p>Notifications</p>
                <p>Date</p>
              </div>
              <div className="flex justify-center py-5 px-2">
                <p>No Data Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNotification;
