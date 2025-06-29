import { useState } from "react";
import { FaAddressCard, FaGoogle } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { toast } from "react-toastify";

const Login = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign In");
  const [emailNum, setEmailNum] = useState("email");

  const googleLogin = () => {
    toast.error("Google sign-up canceled or failed.");
  };
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[999]">
      <div className="bg-white w-xl p-6 rounded-xl shadow-lg">
        {/* main heading div */}
        <div
          className={`flex ${
            currentState === "Sign Up Options"
              ? "justify-end"
              : "justify-between"
          }`}
        >
          {(currentState === "Sign In" || currentState === "Sign Up") && (
            <h1 className="text-2xl font-semibold">{currentState}</h1>
          )}
          <button
            onClick={() => setShowLogin(false)}
            className="font-bold flex justify-end text-orange-500 text-xl cursor-pointer"
          >
            X
          </button>
        </div>
        <hr className="my-6 text-gray-400" />
        {/* Sign Up Options display div */}
        {currentState === "Sign Up Options" && (
          <div className="space-y-5">
            <h1 className="text-center text-2xl font-semibold pb-2">
              Create a new Owner Tenant Account
            </h1>
            <button
              onClick={googleLogin}
              className="w-full border border-[#7A1233] text-xl rounded-lg py-2 cursor-pointer flex justify-center"
            >
              <FaGoogle />
            </button>
            <button onClick={()=>setCurrentState('Sign Up')} className="w-full flex justify-center items-center gap-2 border border-[#7A1233] rounded-lg py-2 cursor-pointer">
              <MdOutlineMail className="text-2xl" /> Continue With Email
            </button>
            <button onClick={()=>setCurrentState('Sign Up')} className="w-full flex justify-center items-center gap-2 border border-[#7A1233] rounded-lg py-2 cursor-pointer">
              <IoMdPhonePortrait className="text-2xl" /> Continue With Email
            </button>
            <button onClick={()=>setCurrentState('Sign Up')} className="w-full flex justify-center items-center gap-2 border border-[#7A1233] rounded-lg py-2 cursor-pointer">
              <FaAddressCard className="text-2xl" /> Continue with Email and
              Phone
            </button>
          </div>
        )}

        {/* Sign In Display div */}
        {currentState === "Sign In" && (
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
            <button
              onClick={googleLogin}
              className="w-full border border-[#7A1233] text-xl rounded-lg py-2 cursor-pointer flex justify-center"
            >
              <FaGoogle />
            </button>
          </>
        )}
        {currentState === "Sign In" ? (
          <p
            className="mt-4 text-lg"
            onClick={() => setCurrentState("Sign Up Options")}
          >
            or dont have an account{" "}
            <span className="text-[#7A1233] font-semibold cursor-pointer">
              Sign Up
            </span>
          </p>
        ) : (
          <p
            className="mt-4 text-lg"
            onClick={() => setCurrentState("Sign In")}
          >
            back to{" "}
            <span className="text-[#7A1233] font-semibold cursor-pointer">
              Sign In
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
