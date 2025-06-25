import React from "react";
import PropertyCardFavourite from "./PropertyCardFavourite";

const FavouriteProperties = () => {
  return (
    <div className="max-w-[1450px] mx-auto px-2 mt-10">
      <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">Most Favourites Properties</h1>
      <div>
        <PropertyCardFavourite />
      </div>
    </div>
  );
};

export default FavouriteProperties;
