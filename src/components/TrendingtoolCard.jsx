import React from "react";
import { FiExternalLink } from "react-icons/fi";

const TrendingtoolCard = ({ name, imagesrc, link, description }) => {
  return (
    <a href={link} data-aos="fade-left">
      <div className="shadow-md bg-white hover:shadow-lg transition duration-300 rounded-[12px] cursor:pointer onhover:shadow-lg border-transparent dark:bg-[#1f1f1f] overflow-hidden">
        <div className="overflow-hidden">
          <img
            className="block w-full hover:scale-110 overflow-hidden duration-500 transition"
            src={imagesrc}
            alt={name}
          />
        </div>
        <div className="flex flex-col px-[18px] justify-start items-start h-[180px]">
          <h1 className="text-black font-semibold font-Inter text-[20px] mb-[10px] mt-[16px] leading-2  dark:text-white">
            {name}
          </h1>
          <p className="dark:text-[#A3B3BC] text-[#5B6478] font-light font-Inter text-[15px] lg:leading-[1.2] xl:leading-[1.3] mb-[16px]">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
};

export default TrendingtoolCard;
