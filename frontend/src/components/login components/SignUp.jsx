import { TiEdit } from "react-icons/ti";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const SignUp = ({ currentState, signUpOption }) => {
  return (
    currentState === "Sign Up" && (
      <div className="flex flex-col gap-2">
        <div className="relative w-24 h-24">
          <img
            src="https://otdirect.vercel.app/user_profile.png"
            alt="Profile"
            className="border-3 border-[#7A1233] rounded-full"
          />
          <div className="absolute bottom-0 right-0 text-white bg-[#7A1233] p-1 rounded-full border-2 border-white text-xl cursor-pointer">
            {/* You can use an icon or image here for the edit */}
            <TiEdit />
          </div>
        </div>
        <div>
          <p className="font-medium">Full Name</p>
          <input
            className="w-full bg-gray-100 p-2 rounded-md focus:outline-none"
            type="text"
            placeholder="Enter Your Full Name"
          />
        </div>
        {signUpOption !== "Email" && (
          <div>
            <p className="font-medium">Phone Number</p>
            <PhoneInput
              country={"pk"} // default country
              // value={phone}
              // onChange={(phone) => setPhone(phone)}
              inputStyle={{
                width: "100%",
                backgroundColor: "#f3f4f6", // Tailwind's gray-100
                borderRadius: "0.375rem", // Tailwind's rounded-md
                padding: "0.5rem", // Tailwind's p-2
                paddingLeft: "48px",
                border: "none",
              }}
            />
          </div>
        )}
        {signUpOption !== "Phone" && (
          <div>
            <p className="font-medium">Email</p>
            <input
              className="w-full bg-gray-100 p-2 rounded-md focus:outline-none"
              type="email"
              placeholder="Enter Your email"
            />
          </div>
        )}
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
