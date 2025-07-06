import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaHome, FaRegTrashAlt, FaRocket, FaSignOutAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { LuMessageSquareMore } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa6";
import { IoNotificationsOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { useContext } from "react";
import { Context } from "../../../context/Context";

const Sidebar = () => {
  const { setToken, sidebarDisplayUser, setDeleteAccount } =
    useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    setToken("");
    toast.success("logout succesfully");

    setTimeout(() => {
      navigate("/");
    }, 100);
  };
  return (
    <div>
      {sidebarDisplayUser && (
        <div className="w-[250px] min-h-screen border-r">
          {/* Logo */}
          <div>
            <div className="p-2 border-b bg-gray-100">
              <img
                src="https://otdirect.vercel.app/logoOTDirect.svg"
                alt="Logo"
                onClick={() => navigate("/")}
                className="w-32 cursor-pointer"
              />
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col py-7">
              <NavLink
                to="/user/dashboard"
                className={({ isActive }) =>
                  `flex items-center gap-5 px-6 text-lg hover:bg-gray-100 ${
                    isActive && "bg-gray-100 rounded-r-xl"
                  }`
                }
              >
                <p className="flex items-center gap-5 py-[10px] transition duration-300 hover:translate-x-2 hover:text-[#7A1233]">
                  <MdDashboard /> My Dashboard
                </p>
              </NavLink>
              <NavLink
                to="/user/boosted-properties"
                className={({ isActive }) =>
                  `flex items-center gap-5 px-6 text-lg hover:bg-gray-100 ${
                    isActive && "bg-gray-100 rounded-r-xl"
                  }`
                }
              >
                <p className="flex items-center gap-5 py-[10px] transition duration-300 hover:translate-x-2 hover:text-[#7A1233]">
                  <FaRocket /> Boosted Properties
                </p>
              </NavLink>
              <NavLink
                to="/user/properties"
                className={({ isActive }) =>
                  `flex items-center gap-5 px-6 text-lg hover:bg-gray-100 ${
                    isActive && "bg-gray-100 rounded-r-xl"
                  }`
                }
              >
                <p className="flex items-center gap-5 py-[10px] transition duration-300 hover:translate-x-2 hover:text-[#7A1233]">
                  <FaHome /> Add Property
                </p>
              </NavLink>
              <NavLink
                to="/user/favorites-properties"
                className={({ isActive }) =>
                  `flex items-center gap-5 px-6 text-lg hover:bg-gray-100 ${
                    isActive && "bg-gray-100 rounded-r-xl"
                  }`
                }
              >
                <p className="flex items-center gap-5 py-[10px] transition duration-300 hover:translate-x-2 hover:text-[#7A1233]">
                  <FaRegHeart /> Favourites
                </p>
              </NavLink>
              <NavLink
                to="/user/chat"
                className={({ isActive }) =>
                  `flex items-center gap-5 px-6 text-lg hover:bg-gray-100 ${
                    isActive && "bg-gray-100 rounded-r-xl"
                  }`
                }
              >
                <p className="flex items-center gap-5 py-[10px] transition duration-300 hover:translate-x-2 hover:text-[#7A1233]">
                  <LuMessageSquareMore /> Messages
                </p>
              </NavLink>
              <NavLink
                to="/user/profile"
                className={({ isActive }) =>
                  `flex items-center gap-5 px-6 text-lg hover:bg-gray-100 ${
                    isActive && "bg-gray-100 rounded-r-xl"
                  }`
                }
              >
                <p className="flex items-center gap-5 py-[10px] transition duration-300 hover:translate-x-2 hover:text-[#7A1233]">
                  <CgProfile /> My Profile
                </p>
              </NavLink>
              <NavLink
                to="/user/notifications"
                className={({ isActive }) =>
                  `flex items-center gap-5 px-6 text-lg hover:bg-gray-100 ${
                    isActive && "bg-gray-100 rounded-r-xl"
                  }`
                }
              >
                <p className="flex items-center gap-5 py-[10px] transition duration-300 hover:translate-x-2 hover:text-[#7A1233]">
                  <IoNotificationsOutline /> User Notification
                </p>
              </NavLink>
              <Link
                onClick={() => {setDeleteAccount(true)}}
                className="flex items-center gap-5 px-6 text-lg hover:bg-gray-100"
              >
                <p className="flex items-center gap-5 py-[10px] transition duration-300 hover:translate-x-2 hover:text-[#7A1233]">
                  <FaRegTrashAlt /> Delete Account
                </p>
              </Link>
              <Link
                onClick={logOut}
                className="flex items-center gap-5 px-6 text-lg hover:bg-gray-100"
              >
                <p className="flex items-center gap-5 py-[10px] transition duration-300 hover:translate-x-2 hover:text-[#7A1233]">
                  <FaSignOutAlt /> Logout
                </p>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
