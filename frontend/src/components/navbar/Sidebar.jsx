import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import navLinks from "./navlinks";
import { IoClose } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

const Sidebar = ({
  sideBar,
  setSideBar,
  setShowLogin,
  setShowAreaConverter,
}) => {
  const [sideBarLinks, setSideBarLinks] = useState(null);
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
          <ul className="flex flex-col gap-4 p-6 text-lg font-semibold cursor-pointer">
            {navLinks.map((links, index) => (
              <div key={index}>
                <NavLink
                  to={links.path}
                  onClick={() => {
                    // setSideBar(false)
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
          <div className="px-6 flex gap-2">
            <button className="rounded h-10 px-2 font-semibold text-[#7A1233] bg-white cursor-pointer">
              <span className="text-xl">+</span> Add Property
            </button>
            <button
              onClick={() => {
                setSideBar(false);
                setShowLogin(true);
              }}
              className="rounded h-10 px-2 text-2xl font-semibold text-[#7A1233] bg-white cursor-pointer"
            >
              <CgProfile />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
