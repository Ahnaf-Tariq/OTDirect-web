import React from "react";
import TitleImage from "../../components/TitleImage";
import Properties24 from "../../components/24 properties/24Properties";

const MostFavourite = () => {
  return (
    <div>
      <div>
        <TitleImage title={"Most Favourite Properties"} />
        <div>
          <Properties24 />
        </div>
      </div>
    </div>
  );
};

export default MostFavourite;
