import { useContext, useState } from "react";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { Context } from "../../context/Context";

const SignIn = ({ currentState }) => {
  const { setToken, setShowLogin, backendUrl } = useContext(Context);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailNum, setEmailNum] = useState("email");

  const googleLogin = () => {
    toast.error("Google sign-up canceled or failed.");
  };

  const signIn = async () => {
    try {
      const response = await axios.post(`${backendUrl}/api/user/login`, {
        email,
        phone,
        password,
      });

      // console.log(response.data);
      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        setToken(response.data.token);
        setShowLogin(false);
        toast.success("Login succesfully");
      } else {
        console.log(response.data.msg);
        toast.error(response.data.msg);
      }
    } catch (error) {
      console.log(error);
    }
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-100 p-2 rounded-md focus:outline-none"
                type="email"
                placeholder="Enter your email"
              />
            ) : (
              <PhoneInput
                country={"pk"} // default country
                value={phone}
                onChange={(e) => setPhone(e)}
                inputStyle={{
                  width: "100%",
                  backgroundColor: "#f3f4f6", // Tailwind's gray-100
                  borderRadius: "0.375rem", // Tailwind's rounded-md
                  padding: "0.5rem", // Tailwind's p-2
                  paddingLeft: "48px",
                  border: "none",
                }}
              />
            )}
          </div>
          <div>
            <p className="font-semibold">Password</p>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-100 p-2 rounded-md focus:outline-none"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <button
            onClick={signIn}
            className="w-full font-semibold bg-[#7A1233] text-white rounded-lg py-2 cursor-pointer"
          >
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
