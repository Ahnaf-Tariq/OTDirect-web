import React from "react";

const AreaConverter = ({ setShowAreaConverter }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[999]">
      <div className="bg-white w-lg shadow-lg">
        <div className="flex justify-between bg-gray-200 border-b-2 border-b-gray-300 p-4">
          <h1 className="text-2xl">Area Converter</h1>
          <button
            onClick={() => setShowAreaConverter(false)}
            className="font-bold text-orange-500 text-xl cursor-pointer"
          >
            X
          </button>
        </div>
        <div className="flex justify-between items-center p-4">
          <h1 className="text-2xl">Convert Area</h1>
          <p className="text-gray-500">Enter the value and desired units:</p>
        </div>
        <hr className="mx-4 text-gray-400" />
        <div className="flex justify-between p-5 max-w-96 ">
          <p>From:</p>
          <p>To:</p>
        </div>
        <div className="flex gap-2 px-4 pb-4">
          <input
            className="outline-none"
            type="text"
            placeholder="Enter the value"
          />
          <p className="border-r-2 border-gray-400"></p>
          <select className="px-3 py-2 focus:outline-none">
            <option value="Square Feet">Square Feet</option>
            <option value="Square Meter">Square Meter</option>
            <option value="Acre">Acre</option>
            <option value="Hectare">Hectare</option>
            <option value="Gaj">Gaj</option>
            <option value="Bigha">Bigha</option>
            <option value="Cent">Cent</option>
            <option value="Katha">Katha</option>
            <option value="Guntha">Guntha</option>
          </select>
          <select className="px-3 py-2 focus:outline-none">
            <option value="Square Feet">Square Feet</option>
            <option value="Square Meter">Square Meter</option>
            <option value="Acre">Acre</option>
            <option value="Hectare">Hectare</option>
            <option value="Gaj">Gaj</option>
            <option value="Bigha">Bigha</option>
            <option value="Cent">Cent</option>
            <option value="Katha">Katha</option>
            <option value="Guntha">Guntha</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AreaConverter;
