import React from "react";

const TitleImage = ({ title }) => {
  return (
    <>
      <div
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/mainImage.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "380px",
        }}
      >
        <h1 className="text-white text-center pt-48 text-3xl font-bold ">
          {title}
        </h1>
      </div>
    </>
  );
};

export default TitleImage;
