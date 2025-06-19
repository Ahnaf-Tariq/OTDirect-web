import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";

const Login = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign In");
  const [emailNum, setEmailNum] = useState("email");
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[999]">
      <div className="bg-white w-xl p-6 rounded-xl shadow-lg">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">{currentState}</h1>
          <button
            onClick={() => setShowLogin(false)}
            className="font-bold text-orange-500 text-xl cursor-pointer"
          >
            X
          </button>
        </div>
        <hr className="my-6 text-gray-400" />
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
            <p className="font-semibold">Email</p>
            <input
              className="w-full bg-gray-100 py-2 px-1 focus:outline-none"
              type="email"
              placeholder="Enter your email"
            />
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
        <button className="w-full border border-[#7A1233] text-xl rounded-lg py-2 cursor-pointer flex justify-center">
          <FaGoogle />
        </button>
        {currentState === "Sign In" ? (
          <p>
            or dont have an account <span>Sign Up</span>
          </p>
        ) : (
          <p>
            back to <span>Sign In</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
