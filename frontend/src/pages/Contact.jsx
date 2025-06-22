import React from "react";
import TitleImage from "../components/TitleImage";
import { MdLocationOn } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <TitleImage title={"Contact Us"} />
      <div className="max-w-[1450px] mx-auto my-4 px-2 flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-4xl p-6 space-y-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">Have questions?</h1>
            <h2 className="text-lg font-semibold text-[#7A1233]">
              Get in touch!
            </h2>
          </div>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-6 ">
              <div className="w-full md:w-1/2 space-y-2">
                <p className="font-semibold">First Name</p>
                <input
                  className="border rounded-md py-1 px-3 w-full"
                  type="text"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-2">
                <p className="font-semibold">Last Name</p>
                <input
                  className="border rounded-md py-1 px-3 w-full"
                  type="text"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 ">
              <div className="w-full md:w-1/2 space-y-2">
                <p className="font-semibold">Email</p>
                <input
                  className="border rounded-md py-1 px-3 w-full"
                  type="text"
                  placeholder="Enter your email"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-2">
                <p className="font-semibold">Subject</p>
                <input
                  className="border rounded-md py-1 px-3 w-full"
                  type="text"
                  placeholder="Enter subject"
                />
              </div>
            </div>
            <div className="space-y-2 ">
              <p className="font-semibold">Message</p>
              <textarea
                rows={9}
                className="w-full border rounded-md px-3 py-2"
                placeholder="Enter message"
              ></textarea>
            </div>
            <div className="flex justify-start md:justify-end">
              <button className="w-40 bg-[#7A1233] text-white rounded-md py-2 cursor-pointer font-semibold">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="w-full md:w-lg bg-[#7A1233] text-white rounded-r-2xl">
          <div className="flex flex-col items-center md:items-start gap-12 p-6 py-10 md:pt-18">
            <h1 className="font-bold text-3xl">Contact Info</h1>
            <p className="flex flex-col md:flex-row items-center gap-2 md:gap-4 font-semibold text-xl">
              <span className="border rounded-full p-2 text-[#7A1233] bg-white">
                <MdLocationOn />
              </span>
              Office Address
            </p>
            <p className="flex flex-col md:flex-row items-center gap-2 md:gap-4 font-semibold text-xl">
              <span className="border rounded-full p-2 text-[#7A1233] bg-white">
                <BsFillTelephoneFill />
              </span>
              Telephone
            </p>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <p className="border rounded-full p-2 text-[#7A1233] bg-white">
                <IoMdMail />
              </p>
              <div className="flex flex-col items-center md:items-start gap-1">
                <p className="font-semibold text-xl">Email Us</p>
                <p>otdirect@getweys.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
