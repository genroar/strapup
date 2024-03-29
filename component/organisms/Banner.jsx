import React from "react";
import Heading from "../atoms/Heading";

function Banner() {
  return (
    <div className="flex px-[30px] pt-[100px] items-center justify-between  ">
      <div className="flex flex-col gap-[20px]">
        <h1 className="text-[60px] leading-[60px] font-medium text-gray-800 ">
          Your Portal to <br /> Luxury Timepieces
        </h1>
        <Heading level="6">
          Facilitating the sale and purchase of luxury watches between
          individuals
        </Heading>
      </div>
      <div className="w-[700px] h-[350px] " >
        <img src="/assits/assits/image/home image 1.png" alt="" />
      </div>
    </div>
  );
}

export default Banner;
