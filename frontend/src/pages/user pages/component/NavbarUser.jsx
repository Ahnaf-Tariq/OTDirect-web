import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Context } from "../../../context/Context";
import { HiDotsVertical } from "react-icons/hi";

const NavbarUser = () => {
  const { sidebarDisplayUser, setSideBarDisplayUser } = useContext(Context);
  const [threeDot, setThreeDot] = useState(false);
  const navigate = useNavigate();

  return (
    <nav
      className="bg-white shadow-lg px-4 flex justify-between items-center z-50 relative"
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
      <div className="hidden md:block">
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
      </div>
      <div className="relative md:hidden">
        <p onClick={() => setThreeDot(!threeDot)} className="text-xl">
          <HiDotsVertical />
        </p>
        {threeDot && (
          <div className="absolute bg-white w-40 flex flex-col gap-4 items-center p-4 top-0 right-5 z-50">
            <select
              className="outline-none cursor-pointer"
              // defaultValue="English"
            >
              <option value="English">English</option>
            </select>
            <button
              onClick={() => navigate("/user/properties")}
              className="flex items-center gap-2 cursor-pointer"
            >
              <FaPlus size={12} />
              Add Property
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarUser;
