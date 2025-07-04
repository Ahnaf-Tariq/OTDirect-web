import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaPlus } from "react-icons/fa";

const NavbarUser = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-lg flex justify-between items-center">
      <div className="bg-[#7A1233] border-6 border-white ml-[-20px] my-4 rounded-full p-3">
        <FaArrowLeft  className="cursor-pointer text-white"/>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <select
            className="bg-white p-3 outline-none cursor-pointer"
            // defaultValue="English"
          >
            <option value="English">English</option>
          </select>
        </div>
        <button onClick={() => navigate('/user/properties')} className="bg-[#1D1E20] text-white text-sm font-semibold px-4 py-2 rounded-md flex items-center gap-1 cursor-pointer">
          <FaPlus size={12} />
          Add Property
        </button>
      </div>
    </nav>
  );
};

export default NavbarUser;
