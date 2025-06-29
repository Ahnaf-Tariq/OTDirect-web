import React from "react";

const AreaConverter = ({ setShowAreaConverter }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[999]">
      <div className="bg-white w-[90%] sm:w-[80%] md:w-[70%] lg:max-w-lg max-h-[90vh] overflow-y-auto rounded-xl shadow-lg">
        <div className="flex justify-between rounded-xl bg-gray-100 border-b-2 border-b-gray-300 p-4">
          <h1 className="text-2xl">Area Converter</h1>
          <button
            onClick={() => setShowAreaConverter(false)}
            className="font-bold text-orange-500 text-xl cursor-pointer"
          >
            X
          </button>
        </div>
        <div className="flex justify-between items-center gap-2 p-4">
          <h1 className="text-2xl">Convert Area</h1>
          <p className="text-gray-500">Enter the value and desired units:</p>
        </div>
        <hr className="mx-4 text-gray-400" />
        <div className="flex flex-col md:flex-row gap-2 py-6 mb-2 border-b-2 border-b-gray-200">
          {/* from div */}
          <div className="px-4 space-y-2">
            <p>From:</p>
            <div className="flex gap-1">
              <input
                className="outline-none min-w-10"
                type="number"
                placeholder="Enter the value"
              />
              <p className="border-r-2 border-gray-400"></p>
              <select className="focus:outline-none min-w-21">
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
          {/* to div */}
          <div className="px-4 space-y-2">
            <p>To:</p>
            <select className="focus:outline-none">
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
        <div className="p-4">
          <button className="border w-full bg-[#7A1233] text-white p-1 hover:bg-gray-200 cursor-pointer">
            Convert
          </button>
        </div>
      </div>
    </div>
  );
};

export default AreaConverter;
