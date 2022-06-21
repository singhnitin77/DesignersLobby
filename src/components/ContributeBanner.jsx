import React from "react";
import contributors from "../assets/contributors.png";

const ContributeBanner = ({ description }) => {
  return (
    <div className="flex w-full items-center justify-center mt-3 mb-2 flex-col lg:flex-row">
      <img src={contributors} className="h-[260px] lg:h-[320px]" />
      <div className="w-full lg:w-5/12 overflow-hidden text-center lg:text-left animate__animated animate__fadeInUp">
        {/* <h1 className="font-Inter font-bold text-2xl lg:text-4xl dark:text-[#fafafa]">
          {text}
        </h1> */}
        <p className="text-[16px] md:text-[20px] lg:text-[24px] font-medium leading-[1.25] dark:text-[#A3B3BC] text-[#5B6478] px-[20px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ContributeBanner;
