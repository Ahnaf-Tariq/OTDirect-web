import React from "react";
import MapView from "./MapView";
import LeftSideHero from "./LeftSideHero";

const Hero = () => {
  return (
    <div className="pt-20 flex flex-col-reverse md:flex-col lg:flex-row items-stretch  gap-2 max-w-[1450px] mx-auto my-0 md:my-10">
      <div >
        <LeftSideHero />
      </div>
      <div className="w-full block md:block lg:block">
        <MapView />
      </div>
    </div>
  );
};

export default Hero;
