import { useContext, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, NavLink, useNavigate } from "react-router-dom";
import navLinks from "./navlinks";
import Sidebar from "./Sidebar";
import { toast } from "react-toastify";
import { FaEdit, FaPlus } from "react-icons/fa";
import { LuMessageSquareMore } from "react-icons/lu";
import { IoIosNotifications } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Context } from "../../context/Context";

const Navbar = () => {
  const {
    token,
    setToken,
    setShowLogin,
    setShowAreaConverter,
    showLogin,
    showAreaConverter,
  } = useContext(Context);
  const [dashboardShow, setDashboardShow] = useState(false);
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    setToken("");
    toast.success("logout succesfully");
    setDashboardShow(false);
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
                onClick={() => {
                  !token ? setShowLogin(true) : navigate("/user/properties");
                }}
                className="flex items-center gap-1 rounded-lg p-2 font-semibold text-[#7A1233] bg-white cursor-pointer"
              >
                <span className="text-xs">
                  <FaPlus />
                </span>{" "}
                Add Property
              </button>
              {token && (
                <>
                  <button
                    onClick={() => navigate("/user/chat")}
                    className="rounded-lg p-2 text-2xl font-semibold text-[#7A1233] bg-white cursor-pointer"
                  >
                    <LuMessageSquareMore />
                  </button>
                  <button
                    onClick={() => navigate("/user/notifications")}
                    className="rounded-lg p-2 text-2xl font-semibold text-[#7A1233] bg-white cursor-pointer"
                  >
                    <IoIosNotifications />
                  </button>
                </>
              )}
              <div className="relative z-[9999]">
                <button
                  onClick={() => {
                    !token
                      ? setShowLogin(true)
                      : setDashboardShow(!dashboardShow);
                  }}
                  className={`rounded-lg p-2 text-2xl font-semibold ${
                    token ? "bg-[#5d0922]" : "text-[#7A1233] bg-white"
                  } cursor-pointer`}
                >
                  <CgProfile />
                </button>
                {/* dashboard div */}
                {token && dashboardShow ? (
                  <div className="absolute top-14 right-0 bg-[#7A1233] text-white p-3 rounded-lg shadow-md w-56 space-y-3">
                    <div
                      onClick={() => navigate("/user/profile")}
                      className="flex justify-between items-center cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <CgProfile className="text-xl" />
                        <p className="font-semibold">Ahnaf Hamid</p>
                      </div>
                      <FaEdit />
                    </div>
                    <div
                      onClick={() => navigate("/user/dashboard")}
                      className="flex justify-between items-center cursor-pointer"
                    >
                      <p className="font-semibold">Dashboard</p>
                      <MdOutlineKeyboardArrowRight className="text-2xl" />
                    </div>
                    <div className="flex justify-between items-center cursor-pointer">
                      <p className="font-semibold">Settings</p>
                      <MdOutlineKeyboardArrowRight className="text-2xl" />
                    </div>
                    <p
                      onClick={logOut}
                      className="cursor-pointer font-semibold"
                    >
                      Log Out
                    </p>
                  </div>
                ) : (
                  <></>
                )}
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
      <Sidebar />
    </>
  );
};

export default Navbar;
