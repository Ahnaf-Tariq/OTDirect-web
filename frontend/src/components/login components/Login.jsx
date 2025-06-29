import { useState } from "react";
import SignIn from "./SignIn";
import SignUpOptions from "./SignUpOptions";
import SignUp from "./SignUp";

const Login = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign In");
  const [emailNum, setEmailNum] = useState("email");
  const [signUpOption, setSignUpOption] = useState("");

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
        <hr className="my-4 text-gray-400" />

        {/* Sign Up display div */}
        <SignUp currentState={currentState} signUpOption={signUpOption} />

        {/* Sign Up Options display div */}
        <SignUpOptions
          currentState={currentState}
          setCurrentState={setCurrentState}
          setSignUpOption={setSignUpOption}
        />

        {/* Sign In display div */}
        <SignIn
          currentState={currentState}
          emailNum={emailNum}
          setEmailNum={setEmailNum}
        />

        {/* login popup last */}
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
