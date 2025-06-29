import React from "react";

const SignUp = ({ currentState, signUpOption }) => {
  return (
    currentState === "Sign Up" && (
      <div className="flex flex-col gap-2">
        <div>
          <img
            className="size-24 border-3 border-[#7A1233] rounded-full"
            src="https://otdirect.vercel.app/user_profile.png"
            alt=""
          />
        </div>
        <div>
          <p className="font-medium">Full Name</p>
          <input
            className="w-full bg-gray-100 p-2 rounded-md focus:outline-none"
            type="text"
            placeholder="Enter Your Full Name"
          />
        </div>
        <div>
          <p className="font-medium">Phone Number</p>
          <input
            className="w-full bg-gray-100 p-2 rounded-md focus:outline-none"
            type="number"
            placeholder="+92"
          />
        </div>
        <div>
          <p className="font-medium">Email</p>
          <input
            className="w-full bg-gray-100 p-2 rounded-md focus:outline-none"
            type="email"
            placeholder="Enter Your email"
          />
        </div>
        <div>
          <p className="font-medium">Password</p>
          <input
            className="w-full bg-gray-100 p-2 rounded-md focus:outline-none"
            type="password"
            placeholder="Enter Your Password"
          />
        </div>
        <div>
          <p className="font-medium">Location</p>
          <input
            className="w-full bg-gray-100 p-2 rounded-md focus:outline-none"
            type="text"
            placeholder="Enter Location"
          />
        </div>
        <div>
          <p className="font-medium">Address</p>
          <input
            className="w-full bg-gray-100 p-2 rounded-md focus:outline-none"
            type="text"
            placeholder="Enter Your Address"
          />
        </div>
        <button className="w-full font-semibold bg-[#7A1233] text-white rounded-lg py-2 cursor-pointer">
          {currentState}
        </button>
      </div>
    )
  );
};

export default SignUp;
