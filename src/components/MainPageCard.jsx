import { Link } from "react-router-dom";
import React from "react";

import { BsFillBookmarkFIll } from "react-icons/bs";

const MainPageCard = ({ image, name, description, link, category }) => {
  return (
    <Link to={link}>
      <div
        className="shadow-md bg-white hover:shadow-lg transition duration-300 rounded-[12px] cursor-pointer border border-[#ddd] dark:bg-[#1f1f1f] dark:border-[#555] overflow-hidden"
        data-aos="fade-left"
      >
        <div className="overflow-hidden">
          <img
            src={image}
            className="w-full block hover:scale-105 transition duration-300 overflow-hidden"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col px-[18px] justify-start items-start h-[160px]">
            <h1 className="text-black font-semibold font-Inter text-[20px] mb-[10px] mt-[16px] leading-tight dark:text-white">
              {name}
            </h1>
            <p className="dark:text-[#A3B3BC] text-[#5B6478] font-light md:leading-[1.2] lg:leading-[1.2] xl:leading-normal font-Inter text-[15px] mb-[16px] md:text-[15px] xl:text-[16px]">
              {description}
            </p>
          </div>
          <div className="flex p-[18px]">
            <h3 className="text-medium font-Space font-semibold text-[14px] text-[#3d5eff] dark:text-[#f1f3f5]">
              {category}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default MainPageCard;
