import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import navLinks from "./navlinks";
import { IoClose } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import { toast } from "react-toastify";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const {
    token,
    setToken,
    sideBar,
    setSideBar,
    setShowLogin,
    setShowAreaConverter,
  } = useContext(Context);
  const [sideBarLinks, setSideBarLinks] = useState(null);
  const navigate = useNavigate();

  const login = () => {
    if (!token) {
      setSideBar(false);
      setShowLogin(true);
    } else {
      navigate("/user/profile");
    }
  };
  const addProperty = () => {
    if (!token) {
      setSideBar(false);
      setShowLogin(true);
    } else {
      navigate("/user/properties");
    }
  };
  const logOut = () => {
    localStorage.removeItem("token");
    setToken("");
    toast.success("logout succesfully");
    setSideBar(false);
  };
  return (
    <div>
      {sideBar && (
        <div
          className={`fixed top-0 left-0 z-[999] h-full w-60 sm:w-96 bg-[#7A1233] text-white `}
        >
          <div className="flex justify-between items-center px-6 py-4 border-b border-orange-300">
            <img
              className="brightness-0 invert h-14"
              src="https://otdirect.vercel.app/logoOTDirect.svg"
              alt="logo"
            />
            <IoClose
              className="text-2xl cursor-pointer"
              onClick={() => setSideBar(false)}
            />
          </div>
          <ul className="flex flex-col gap-4 px-6 py-4 text-lg font-semibold cursor-pointer">
            {navLinks.map((links, index) => (
              <div key={index}>
                <NavLink
                  to={links.path}
                  onClick={() => {
                    setSideBar(false);
                    setSideBarLinks(
                      sideBarLinks === links.title ? null : links.title
                    );
                  }}
                  className="flex items-center gap-1"
                >
                  {links.title}
                  {links.subMenu && <RiArrowDropDownLine />}
                </NavLink>
                {links.subMenu && sideBarLinks === links.title && (
                  <div className="ml-4 mt-2 p-2 font-normal">
                    {links.subLinks.map((sublinks, ind) => (
                      <Link
                        key={ind}
                        to={sublinks.path}
                        onClick={() => setSideBar(false)}
                        className="block w-full p-[6px] hover:text-[#7A1233] text-base"
                      >
                        {sublinks.title === "Area Converter" ? (
                          <p onClick={() => setShowAreaConverter(true)}>
                            {sublinks.title}
                          </p>
                        ) : (
                          <p>{sublinks.title}</p>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </ul>
          {token && (
            <div className="flex flex-col gap-4 px-6 pb-5 text-lg font-semibold cursor-pointer">
              <p onClick={() => navigate("/user/dashboard")}>Dashboard</p>
              <p onClick={() => navigate("/user/chat")}>Messages</p>
            </div>
          )}
          <div className="px-6 flex gap-2">
            <button
              onClick={addProperty}
              className="rounded h-10 px-2 font-semibold text-[#7A1233] bg-white cursor-pointer"
            >
              <span className="text-xl">+</span> Add Property
            </button>
            <button
              onClick={login}
              className="rounded h-10 px-2 text-2xl font-semibold text-[#7A1233] bg-white cursor-pointer"
            >
              <CgProfile />
            </button>
          </div>
          {token && (
            <div className="p-6 text-lg font-semibold cursor-pointer">
              <p
                onClick={logOut}
                className="flex items-center gap-2 text-xl text-red-500"
              >
                Logout <IoIosLogOut className="text-2xl" />
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
