import React from "react";
import TitleImage from "../../../components/TitleImage";
import FilterCardCity from "../../../components/cards city/FilterCardCity";
import PropertyCardsCity from "../../../components/cards city/PropertyCardsCity";

const Sofia = () => {
  return (
    <div>
      <TitleImage title={"Properties Listed in Sofia"} />
      <div className="max-w-[1450px] mx-auto flex flex-col md:flex-row justify-between gap-4 px-4 my-14">
        <div className="w-full md:w-1/4">
          <FilterCardCity />
        </div>
        <div className="w-full md:w-3/4">
          <PropertyCardsCity />
        </div>
      </div>
    </div>
  );
};

export default Sofia;
