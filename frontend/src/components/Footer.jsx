import React from "react";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="mt-10 bg-[#7A1233]">
      <div className="max-w-[1450px] mx-auto px-2 py-10 flex flex-col md:flex-row justify-between items-start gap-10 md:gap-4 border-b-2 border-b-gray-100">
        <div className="flex flex-col items-center gap-6">
          <img
            onClick={() => navigate("/")}
            className="brightness-0 invert cursor-pointer"
            src="https://otdirect.vercel.app/logoOTDirect.svg"
            alt="logo"
          />
          <p className="flex items-center gap-2 text-white text-lg cursor-pointer">
            <IoMdMail /> otdirect@getweys.com
          </p>
          <h1 className="text-xl text-white underline cursor-pointer">
            Sign Up as Advisor
          </h1>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-white text-2xl font-semibold">Properties</h1>
          <p className="text-gray-300 cursor-pointer">All Properties</p>
          <p className="text-gray-300 cursor-pointer">Featured Properties</p>
          <p className="text-gray-300 cursor-pointer">Most Viewed Properties</p>
          <p className="text-gray-300 cursor-pointer">
            Nearby Cities Properties
          </p>
          <p className="text-gray-300 cursor-pointer">
            Most Favorite Properties
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-white text-2xl font-semibold">Pages</h1>
          <p className="text-gray-300 cursor-pointer">Subscription Plan</p>
          <p className="text-gray-300 cursor-pointer">Articles</p>
          <p className="text-gray-300 cursor-pointer">Terms & Conditions</p>
          <p className="text-gray-300 cursor-pointer">Privacy Policy</p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-white text-2xl font-semibold">Download Apps</h1>
          <p className="text-gray-300 max-w-[360px]">
            Get the latest resources for downloading, installing, and updating
            OT-DIRECT app. Select your device platform and Use Our app.
          </p>
          <img className="w-32" src="https://otdirect.vercel.app/getFromGooglePlay.png" alt="" />
          <img className="w-32" src="https://otdirect.vercel.app/getFromAppStore.png" alt="" />
        </div>
      </div>
      <p className="text-center text-white text-xs py-4">Copyright @ 2025 OT-DIRECT All Rights Reserved</p>
    </div>
  );
};

export default Footer;
