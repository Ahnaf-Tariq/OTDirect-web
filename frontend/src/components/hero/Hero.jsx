import React from "react";
import MapView from "./MapView";
import LeftSideHero from "./LeftSideHero";

const Hero = () => {
  return (
    <div className="flex items-start gap-2 max-w-[1450px] mx-auto my-10">
      <div>
        <LeftSideHero />
      </div>
      <div className="w-full h-full">
        <MapView />
      </div>
    </div>
  );
};

export default Hero;
