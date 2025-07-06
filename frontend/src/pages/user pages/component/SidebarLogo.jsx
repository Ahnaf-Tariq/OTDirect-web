import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaRegTrashAlt, FaRocket, FaSignOutAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { LuMessageSquareMore } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa6";
import { IoNotificationsOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { Context } from "../../../context/Context";

const SidebarLogo = () => {
  const { setToken, setDeleteAccount } = useContext(Context);

  const logOut = () => {
    localStorage.removeItem("token");
    setToken("");
    toast.success("logout succesfully");

    setTimeout(() => {
      navigate("/");
    }, 100);
  };
  return (
    <div className="border-r min-h-screen">
      {/* Nav Links */}
      <nav className="flex flex-col gap-1 py-7">
        <NavLink
          to="/user/dashboard"
          className={({ isActive }) =>
            `px-6 hover:bg-gray-100 ${isActive && "bg-gray-100 rounded-r-xl"}`
          }
        >
          <p className="py-[10px] transition duration-300 hover:translate-x-2 hover:text-[#7A1233]">
            <MdDashboard className="text-2xl" />
          </p>
        </NavLink>
        <NavLink
          to="/user/boosted-properties"
          className={({ isActive }) =>
            `px-6 hover:bg-gray-100 ${isActive && "bg-gray-100 rounded-r-xl"}`
          }
        >
          <p className="py-[10px] transition duration-300 hover:translate-x-2 hover:text-[#7A1233]">
            <FaRocket className="text-2xl" />
          </p>
        </NavLink>
        <NavLink
          to="/user/properties"
          className={({ isActive }) =>
            `px-6 hover:bg-gray-100 ${isActive && "bg-gray-100 rounded-r-xl"}`
          }
        >
          <p className="py-[10px] transition duration-300 hover:translate-x-2 hover:text-[#7A1233]">
            <FaHome className="text-2xl" />
          </p>
        </NavLink>
        <NavLink
          to="/user/favorites-properties"
          className={({ isActive }) =>
            `px-6 hover:bg-gray-100 ${isActive && "bg-gray-100 rounded-r-xl"}`
          }
        >
          <p className="py-[10px] transition duration-300 hover:translate-x-2 hover:text-[#7A1233]">
            <FaRegHeart className="text-2xl" />
          </p>
        </NavLink>
        <NavLink
          to="/user/chat"
          className={({ isActive }) =>
            `px-6 hover:bg-gray-100 ${isActive && "bg-gray-100 rounded-r-xl"}`
          }
        >
          <p className="py-[10px] transition duration-300 hover:translate-x-2 hover:text-[#7A1233]">
            <LuMessageSquareMore className="text-2xl" />
          </p>
        </NavLink>
        <NavLink
          to="/user/profile"
          className={({ isActive }) =>
            `px-6 hover:bg-gray-100 ${isActive && "bg-gray-100 rounded-r-xl"}`
          }
        >
          <p className="py-[10px] transition duration-300 hover:translate-x-2 hover:text-[#7A1233]">
            <CgProfile className="text-2xl" />
          </p>
        </NavLink>
        <NavLink
          to="/user/notifications"
          className={({ isActive }) =>
            `px-6 hover:bg-gray-100 ${isActive && "bg-gray-100 rounded-r-xl"}`
          }
        >
          <p className="py-[10px] transition duration-300 hover:translate-x-2 hover:text-[#7A1233]">
            <IoNotificationsOutline className="text-2xl" />
          </p>
        </NavLink>
        <Link
          onClick={() => setDeleteAccount(true)}
          className="px-6 hover:bg-gray-100"
        >
          <p className="py-[10px] transition duration-300 hover:translate-x-2 hover:text-[#7A1233]">
            <FaRegTrashAlt className="text-2xl" />
          </p>
        </Link>
        <Link onClick={logOut} className="px-6 hover:bg-gray-100">
          <p className="py-[10px] transition duration-300 hover:translate-x-2 hover:text-[#7A1233]">
            <FaSignOutAlt className="text-2xl" />
          </p>
        </Link>
      </nav>
    </div>
  );
};

export default SidebarLogo;
