import React from "react";
import TitleImage from "../components/TitleImage";

const ErrorPage = () => {
  return (
    <div>
      <TitleImage />
      <div className="flex flex-col justify-center items-center gap-1 mt-18 mb-10 px-2">
        <img
          className="size-[150px] sm:size-[200px] mb-4"
          src="https://otdirect.vercel.app/_next/static/media/no_data_found_illustrator.c5c383a7.svg"
          alt=""
        />
        <h1 className="text-2xl text-[#7A1233] font-semibold">No Data Found</h1>
        <p className="text-center">We're sorry what you were looking for. please try another way</p>
      </div>
    </div>
  );
};

export default ErrorPage;
