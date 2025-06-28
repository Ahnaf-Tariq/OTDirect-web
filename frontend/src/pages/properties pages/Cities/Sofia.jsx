import React from "react";
import TitleImage from "../../../components/TitleImage";
import FilterCardCity from "../../../components/FilterCardCity";

const Sofia = () => {
  return (
    <div>
      <TitleImage title={"Properties Listed in Sofia"} />
      <div className="max-w-[1450px] mx-auto flex justify-between gap-4 my-14">
        <div className="w-full lg:w-1/4">
          <FilterCardCity />
        </div>
        <div className="w-full lg:w-3/4">
          <h1 className="border rounded-lg border-gray-300 font-semibold p-4">
            24 Properties found
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Sofia;
