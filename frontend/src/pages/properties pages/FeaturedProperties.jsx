import React from "react";
import TitleImage from "../../components/TitleImage";
import Properties24 from "../../components/24 properties/24Properties";

const FeaturedProperties = () => {
  return (
    <div>
      <TitleImage title={"Featured All Properties"} />
      <div>
        <Properties24 />
      </div>
    </div>
  );
};

export default FeaturedProperties;
