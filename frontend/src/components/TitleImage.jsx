import React from "react";

const TitleImage = ({ title }) => {
  return (
    <>
      <div
        style={{
          backgroundImage: "url('/mainImage.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
        }}
      >
        <h1 className="text-white text-center pt-44 text-4xl font-bold ">
          {title}
        </h1>
      </div>
    </>
  );
};

export default TitleImage;
