import React, { useState } from "react";

const Login = ({ setShowLogin }) => {
  const [currentState,setCurrentState] = useState('Sign In')
  const [emailNum,setEmailNum] = useState('email')
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[999]">
      <div className="bg-white w-xl p-6 rounded-xl shadow-lg">
        <div className="flex justify-between">
            <h1 className="text-2xl font-semibold">{currentState}</h1>
            <button onClick={()=>setShowLogin(false)} className="font-bold text-orange-500 text-xl cursor-pointer">X</button>
        </div>
        <hr className="my-4 text-gray-400" />
        <div className="inline-flex border border-[#7A1233] rounded-xl overflow-hidden">
          <p onClick={()=>setEmailNum('email')} className={`px-5 py-2 font-semibold cursor-pointer ${emailNum === 'email' ? 'bg-[#7A1233] text-white' : 'text-black bg-white'}`}>Email</p>
          <p onClick={()=>setEmailNum('number')} className={`px-5 py-2 font-semibold cursor-pointer ${emailNum === 'number' ? 'bg-[#7A1233] text-white' : 'text-black bg-white'}`}>Number</p>
        </div>
        <div className="flex flex-col gap-2">
            <div>
                <p>Email</p>
                <input type="email" placeholder="Enter your email" />
            </div>
            <div>
                <p>Password</p>
                <input type="password" placeholder="Enter your password" />
            </div>
            <button className="">{currentState}</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
