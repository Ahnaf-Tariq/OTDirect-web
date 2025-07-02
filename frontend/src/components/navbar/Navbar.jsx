import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, NavLink, useNavigate } from "react-router-dom";
import navLinks from "./navlinks";
import Sidebar from "./Sidebar";
import { toast } from "react-toastify";
import { FaPlus } from "react-icons/fa";
import { LuMessageSquareMore } from "react-icons/lu";
import { IoIosNotifications } from "react-icons/io";

const Navbar = ({
  token,
  setToken,
  setShowLogin,
  setShowAreaConverter,
  showLogin,
  showAreaConverter,
}) => {
  const [sideBar, setSideBar] = useState(false);
  const navigate = useNavigate();

  const addProperty = () => {
    localStorage.removeItem("token");
    setToken("");
    toast.success("logout");
  };
  return (
    <>
      <nav
        className={`bg-[#7A1233] fixed top-0 left-0 w-full ${
          showLogin || showAreaConverter ? "z-50" : "z-[999]"
        }`}
      >
        <div className="flex justify-between items-center gap-2 max-w-[1500px] mx-auto px-6">
          <div className="">
            <img
              onClick={() => navigate("/")}
              className="brightness-0 invert cursor-pointer"
              src="https://otdirect.vercel.app/logoOTDirect.svg"
              alt="logo"
            />
          </div>
          <div className="hidden lg:flex items-center gap-6 text-white">
            <ul className="flex items-center gap-8 text-lg font-semibold cursor-pointer">
              {navLinks.map((links, index) => (
                <div key={index} className="relative group">
                  <NavLink to={links.path} className="flex items-center gap-1">
                    {links.title}
                    {links.subMenu && <RiArrowDropDownLine />}
                  </NavLink>
                  {links.subMenu && (
                    <div className="absolute z-[999] hidden group-hover:block border rounded-md shadow-lg w-52 bg-white text-gray-500 left-[-20px] p-2">
                      {links.subLinks.map((sublink, ind) => (
                        <Link
                          key={ind}
                          to={sublink.path}
                          className="block w-full p-[6px] hover:text-[#7A1233] text-base"
                        >
                          {sublink.title === "Area Converter" ? (
                            <p onClick={() => setShowAreaConverter(true)}>
                              {sublink.title}
                            </p>
                          ) : (
                            <p>{sublink.title}</p>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </ul>
            <div className="flex gap-2">
              <button
                onClick={addProperty}
                className="flex items-center gap-1 rounded-lg p-2 font-semibold text-[#7A1233] bg-white cursor-pointer"
              >
                <span className="text-xs">
                  <FaPlus />
                </span>{" "}
                Add Property
              </button>
              {token && (
                <>
                  <button className="rounded-lg p-2 text-2xl font-semibold text-[#7A1233] bg-white cursor-pointer">
                    <LuMessageSquareMore />
                  </button>
                  <button className="rounded-lg p-2 text-2xl font-semibold text-[#7A1233] bg-white cursor-pointer">
                    <IoIosNotifications />
                  </button>
                </>
              )}
              <div className="relative">
              <button
                onClick={() => !token && setShowLogin(true)}
                className="rounded-lg p-2 text-2xl font-semibold text-[#7A1233] bg-white cursor-pointer"
              >
                <CgProfile />
              </button>
              {token && <div className="absolute bottom-0 top-14 text-black right-0">
                name
              </div>}
              </div>
            </div>
          </div>
          <div
            onClick={() => setSideBar(true)}
            className="lg:hidden text-white text-2xl sm:text-3xl md:text-4xl cursor-pointer"
          >
            <GiHamburgerMenu />
          </div>
        </div>
      </nav>

      {/* ********************** Sidebar *************************** */}
      <Sidebar
        sideBar={sideBar}
        setSideBar={setSideBar}
        setShowLogin={setShowLogin}
        setShowAreaConverter={setShowAreaConverter}
      />
    </>
  );
};

export default Navbar;
