import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import navLinks from "./navlinks";

const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);
  return (
    <>
      <nav className="bg-orange-800 h-20">
        <div className="flex justify-between items-center max-w-[1500px] mx-auto px-6">
          <div className="">
            <img
              className="brightness-0 invert"
              src="https://otdirect.vercel.app/logoOTDirect.svg"
              alt="logo"
            />
          </div>
          <div className="hidden lg:flex items-center gap-6 text-white">
            <ul className="flex items-center gap-8 text-lg font-semibold cursor-pointer">
              {navLinks.map((links, index) => (
                <div key={index} className="relative group">
                  <NavLink className="flex items-center gap-1">
                    {links.title}
                    {links.subMenu && <RiArrowDropDownLine />}
                  </NavLink>
                  {links.subMenu && (
                    <div className="absolute hidden group-hover:block border rounded-md shadow-lg w-56 bg-white text-gray-500 left-[-20px]  p-2">
                      {links.subLinks.map((sublink, i) => (
                        <li
                          key={i}
                          className="p-[4px] hover:text-orange-800 text-base"
                        >
                          {sublink.title}
                        </li>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </ul>
            <button className="rounded h-10 px-2 font-semibold text-orange-800 bg-white cursor-pointer">
              <span className="text-xl">+</span> Add Property
            </button>
            <button className="rounded h-10 px-2 text-2xl font-semibold text-orange-800 bg-white cursor-pointer">
              <CgProfile />
            </button>
          </div>
          <div
            onClick={() => setSideBar(true)}
            className="lg:hidden text-white text-4xl cursor-pointer"
          >
            <GiHamburgerMenu />
          </div>
        </div>
      </nav>

      {/* ********************** Sidebar *************************** */}
      {sideBar && (
        <div
          className={`fixed top-0 left-0 h-full w-96 bg-orange-800 text-white z-50 transform transition-transform duration-300 `}
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
            <li>Home</li>
            <li>Properties</li>
            <li>Pages</li>
            <li>Contact Us</li>
            <li>About Us</li>
          </ul>
          <div className="px-6 flex gap-2">
            <button className="rounded h-10 px-2 font-semibold text-orange-800 bg-white cursor-pointer">
              <span className="text-xl">+</span> Add Property
            </button>
            <button className="rounded h-10 px-2 text-2xl font-semibold text-orange-800 bg-white cursor-pointer">
              <CgProfile />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
