import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Context } from "../../../context/Context";

const NavbarUser = () => {
  const { sidebarDisplayUser, setSideBarDisplayUser } = useContext(Context);
  const navigate = useNavigate();

  return (
    <nav
      className={`bg-white shadow-lg ${
        sidebarDisplayUser ? "pr-10" : "px-10"
      } flex justify-between items-center`}
    >
      {sidebarDisplayUser ? (
        <div
          onClick={() => setSideBarDisplayUser(false)}
          className="bg-[#7A1233] border-6 border-white ml-[-20px] my-4 rounded-full p-3 cursor-pointer"
        >
          <FaArrowLeft className="text-white" />
        </div>
      ) : (
        <div onClick={() => setSideBarDisplayUser(true)} className="my-6">
          <GiHamburgerMenu className="cursor-pointer text-xl" />
        </div>
      )}
      <div className="flex items-center gap-4">
        <div className="relative">
          <select
            className="bg-white p-3 outline-none cursor-pointer"
            // defaultValue="English"
          >
            <option value="English">English</option>
          </select>
        </div>
        <button
          onClick={() => navigate("/user/properties")}
          className="bg-[#1D1E20] text-white text-sm font-semibold px-4 py-2 rounded-md flex items-center gap-1 cursor-pointer"
        >
          <FaPlus size={12} />
          Add Property
        </button>
      </div>
    </nav>
  );
};

export default NavbarUser;
