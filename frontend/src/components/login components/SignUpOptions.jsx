import { toast } from "react-toastify";
import { FaAddressCard } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";

const SignUpOptions = ({ currentState, setCurrentState, setSignUpOption }) => {

  const googleLogin = () => {
    toast.error("Google sign-up canceled or failed.");
  };

  return (
    currentState === "Sign Up Options" && (
      <div className="space-y-5">
        <h1 className="text-center text-2xl font-semibold pb-2">
          Create a new Owner Tenant Account
        </h1>
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
        <button
          onClick={() => {setCurrentState("Sign Up"); setSignUpOption('Email')}}
          className="w-full flex justify-center items-center gap-1 sm:gap-2 border border-[#7A1233] rounded-lg p-2 cursor-pointer"
        >
          <MdOutlineMail className="text-2xl" /> Continue With Email
        </button>
        <button
          onClick={() => {setCurrentState("Sign Up"); setSignUpOption('Phone')}}
          className="w-full flex justify-center items-center gap-1 sm:gap-2 border border-[#7A1233] rounded-lg p-2 cursor-pointer"
        >
          <IoMdPhonePortrait className="text-2xl" /> Continue With Phone
        </button>
        <button
          onClick={() => {setCurrentState("Sign Up"); setSignUpOption('Email&Phone')}}
          className="w-full flex justify-center items-center gap-1 sm:gap-2 border border-[#7A1233] rounded-lg p-2 cursor-pointer"
        >
          <FaAddressCard className="text-2xl" /> Continue with Email and Phone
        </button>
      </div>
    )
  );
};

export default SignUpOptions;
