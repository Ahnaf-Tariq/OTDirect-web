import { useContext, useEffect } from "react";
import Sidebar from "./component/SidebarUser";
import { Context } from "../../context/Context";
import NavbarUser from "./component/NavbarUser";
import SidebarLogo from "./component/SidebarLogo";

const MyProfile = () => {
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
          <div className="px-4 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
