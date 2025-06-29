import React from "react";
import { toast } from "react-toastify";

const SignIn = ({ currentState, emailNum, setEmailNum }) => {

  const googleLogin = () => {
    toast.error("Google sign-up canceled or failed.");
  };

  return (
    currentState === "Sign In" && (
      <>
        <div className="inline-flex border border-[#7A1233] rounded-xl overflow-hidden">
          <p
            onClick={() => setEmailNum("email")}
            className={`px-5 py-2 font-semibold cursor-pointer ${
              emailNum === "email"
                ? "bg-[#7A1233] text-white"
                : "text-black bg-white"
            }`}
          >
            Email
          </p>
          <p
            onClick={() => setEmailNum("number")}
            className={`px-5 py-2 font-semibold cursor-pointer ${
              emailNum === "number"
                ? "bg-[#7A1233] text-white"
                : "text-black bg-white"
            }`}
          >
            Number
          </p>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <div>
            <p className="font-semibold">
              {emailNum === "email" ? "Email" : "Phone Number"}
            </p>
            {emailNum === "email" ? (
              <input
                className="w-full bg-gray-100 py-2 px-1 focus:outline-none"
                type="email"
                placeholder="Enter your email"
              />
            ) : (
              <input
                className="w-full bg-gray-100 py-2 px-1 focus:outline-none"
                type="number"
                placeholder="+92"
              />
            )}
          </div>
          <div>
            <p className="font-semibold">Password</p>
            <input
              className="w-full bg-gray-100 py-2 px-1 focus:outline-none"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <button className="w-full font-semibold bg-[#7A1233] text-white rounded-lg py-2 cursor-pointer">
            {currentState}
          </button>
        </div>
        <div className="flex items-center my-4">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-2 text-gray-700">Or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>
        <button
          onClick={googleLogin}
          className="w-full border border-[#7A1233] text-xl rounded-lg py-2 cursor-pointer flex justify-center"
        >
          {/* Google logo */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOHI2JLXYQ0StQ1vzNLvULyckAUF1uIUnoxg&s"
            className="size-7"
            alt=""
          />
        </button>
      </>
    )
  );
};

export default SignIn;
