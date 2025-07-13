import { useContext, useState } from "react";
import { Context } from "../context/Context";

const AreaConverter = () => {
  const { setShowAreaConverter } = useContext(Context);
  const [fromUnit, setFromUnit] = useState("Square Feet");
  const [toUnit, setToUnit] = useState("Square Feet");
  const [value, setValue] = useState(0);
  const [convertValue, setConvertValue] = useState("");

  const unitData = [
    { name: "Square Feet", convertFactor: 1 },
    { name: "Square Meter", convertFactor: 0.092903 },
    { name: "Acre", convertFactor: 0.00002295 },
    { name: "Hectare", convertFactor: 0.000009 },
    { name: "Gaj", convertFactor: 0.112188 },
    { name: "Bigha", convertFactor: 0.000037 },
    { name: "Cent", convertFactor: 0.002296 },
    { name: "Katha", convertFactor: 0.000735 },
    { name: "Guntha", convertFactor: 0.0009182 },
  ];

  const handleValueOnchange = (e) => {
    setValue(e.target.value);
    setConvertValue("");
  };
  const handleFromOnchange = (e) => {
    setFromUnit(e.target.value);
    setConvertValue("");
  };
  const handleToOnchange = (e) => {
    setToUnit(e.target.value);
    setConvertValue("");
  };

  const convertedValueFunc = () => {
    const fromValue = unitData.find(
      (item) => item.name === fromUnit
    )?.convertFactor;
    const toValue = unitData.find(
      (item) => item.name === toUnit
    )?.convertFactor;

    console.log(fromValue, toValue);

    if (fromValue && toValue) {
      const convValue = (parseFloat(value) / fromValue) * toValue;
      setConvertValue(convValue);
    }
  };
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[999]">
      <div className="bg-white w-[90%] sm:w-[80%] md:w-[70%] lg:max-w-lg max-h-[90vh] overflow-y-auto rounded-xl shadow-lg">
        <div className="flex justify-between rounded-xl bg-gray-100 border-b-2 border-b-gray-300 p-4">
          <h1 className="text-xl sm:text-2xl">Area Converter</h1>
          <button
            onClick={() => setShowAreaConverter(false)}
            className="font-bold text-orange-500 text-xl cursor-pointer"
          >
            X
          </button>
        </div>
        <div className="flex justify-between items-center gap-2 p-4">
          <h1 className="text-xl sm:text-2xl">Convert Area</h1>
          <p className="text-sm sm:text-base text-gray-500">Enter the value and desired units:</p>
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
                // value={value}
                onChange={handleValueOnchange}
                placeholder="Enter the value"
              />
              <p className="border-r-2 border-gray-400"></p>
              <select
                className="focus:outline-none"
                value={fromUnit}
                onChange={handleFromOnchange}
              >
                {unitData.map((item, ind) => (
                  <option key={ind} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* to div */}
          <div className="px-4 space-y-2">
            <p>To:</p>
            <select
              className="focus:outline-none"
              value={toUnit}
              onChange={handleToOnchange}
            >
              {unitData.map((item, ind) => (
                <option key={ind} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* converted value */}
        {convertValue ? (
          <div className="m-4 border rounded-md bg-sky-100 text-[#7A1233]">
            <h1 className="p-4 text-lg sm:text-xl md:text-2xl font-semibold text-center">{`${value} ${fromUnit} = ${convertValue} ${toUnit}`}</h1>
          </div>
        ) : (
          <></>
        )}
        <div className="p-4">
          <button
            onClick={convertedValueFunc}
            className="border w-full bg-[#7A1233] text-white p-1 hover:bg-gray-200 cursor-pointer"
          >
            Convert
          </button>
        </div>
      </div>
    </div>
  );
};

export default AreaConverter;
