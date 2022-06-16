import React from "react";
import {
  FiLink,
  FiGithub,
  FiTwitter,
  FiInstagram,
  FiMail,
} from "react-icons/fi";

const ContributeCard = ({ image, name, link, work }) => {
  return (
    <div className="gradient-shadow p-[4px] rounded-md transtion duration-300 cursor-pointer text-[#222] md:w-[40%] w-full lg:w-[20%] xl:w-[40%] hover:border-[#3d5eff98] bg-gradient-3">
      <div className="bg-white rounded-md p-[16px] dark:bg-[#222222]">
        <img
          src={image}
          alt=""
          className="rounded-md w-full hover:scale-105 overflow-hidden transition duration-300"
        />
        <h1 className="lg:text-[24px] xl:text-[24px] md:text-[20px] font-bold mt-2 capitalize font-Space dark:text-[#fafafa]">
          {name}
        </h1>
        <h3 className="lg:text-[18px] xl:text-[18px] md:text-[18px] font-semibold capitalize font-Space dark:text-[#eee]">
          {work}
        </h3>
        <a
          href=""
          className="lg:text-[14px] xl:text-[14px] overflow-ellipsis overflow-hidden font-Inter text-[#3d53ff] dark:text-blue-300 mb-[16px]"
          target="_blank"
        >
          {link}
        </a>
        <div className="flex items-center mt-[10px] gap-x-[10px]">
          <a
            href=""
            className="hover:text-[#999] dark:text-[#fafafa] dark:hover:text-[#ccc]"
            target="_blank"
          >
            <FiGithub />
          </a>
          <a
            href=""
            className="hover:text-[#999] dark:text-[#fafafa] dark:hover:text-[#ccc]"
            target="_blank"
          >
            <FiMail />
          </a>
          <a
            href=""
            className="hover:text-[#999] dark:text-[#fafafa] dark:hover:text-[#ccc]"
            target="_blank"
          >
            <FiLink />
          </a>
          <a
            href=""
            className="hover:text-[#999] dark:text-[#fafafa] dark:hover:text-[#ccc]"
            target="_blank"
          >
            <FiInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContributeCard;
