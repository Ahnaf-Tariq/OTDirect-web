import React from "react";
import TitleImage from "../components/TitleImage";
import { MdLocationOn } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <TitleImage title={"Contact Us"} />
      <div className="max-w-[1450px] mx-auto my-4 px-2 flex justify-between gap-4">
        <div className="w-4xl p-6 space-y-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">Have questions?</h1>
            <h2 className="text-lg font-semibold text-[#7A1233]">
              Get in touch!
            </h2>
          </div>
          <form className="flex flex-col gap-4">
            <div className="flex gap-6 ">
              <div className="w-1/2 space-y-2">
                <p className="font-semibold">First Name</p>
                <input
                  className="border rounded-md py-1 px-3 w-full"
                  type="text"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="w-1/2 space-y-2">
                <p className="font-semibold">Last Name</p>
                <input
                  className="border rounded-md py-1 px-3 w-full"
                  type="text"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div className="flex gap-6 ">
              <div className="w-1/2 space-y-2">
                <p className="font-semibold">Email</p>
                <input
                  className="border rounded-md py-1 px-3 w-full"
                  type="text"
                  placeholder="Enter your email"
                />
              </div>
              <div className="w-1/2 space-y-2">
                <p className="font-semibold">Subject</p>
                <input
                  className="border rounded-md py-1 px-3 w-full"
                  type="text"
                  placeholder="Enter subject"
                />
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">Message</p>
              <textarea
                className="w-full border rounded-md px-3 py-2"
                placeholder="Enter message"
              ></textarea>
            </div>
            <button className="bg-[#7A1233] text-white">Submit</button>
          </form>
        </div>
        <div className="w-md bg-[#7A1233] text-white p-6">
          <div className="flex flex-col gap-4">
            <h1>Contact Info</h1>
            <p className="flex items-center gap-2">
              <MdLocationOn />
              Office Address
            </p>
            <p className="flex items-center gap-2">
              <BsFillTelephoneFill />
              Telephone
            </p>
            <div className="flex items-center gap-2">
              <p>
                <IoMdMail />
              </p>
              <div>
                <p>Email Us</p>
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
