import React from "react";
import { FiLink, FiInstagram, FiMail, FiGithub } from "react-icons/fi";

const ContributeCard = ({
  image,
  name,
  github_link,
  work,
  email,
  insta_link,
  website_link,
}) => {
  return (
    <div
      className="gradient-shadow p-[4px] rounded-md transtion duration-500 cursor-pointer text-[#222] md:w-[40%] w-[80%] lg:w-[90%] xl:w-[90%] hover:border-[#3d5eff98] bg-gradient-3 "
      data-aos="fade-left"
    >
      <div className="bg-white rounded-md p-[16px] dark:bg-[#222222] shadow-2xl hover:bg-[#3d5eff98] transition duration-500 hover:scale-110">
        <img
          src={image}
          alt={name}
          className="rounded-full w-24 mx-auto overflow-hidden transition duration-300 "
        />
        <h1 className="text-[18px] leading-[1.1] lg:text-[24px] xl:text-[24px] md:text-[18px] font-semibold mt-2 capitalize font-Inter dark:text-[#fafafa] mb-[6px] text-center">
          {name}
        </h1>
        <h3 className="lg:text-[18px] xl:text-[18px] md:text-[16px] font-medium capitalize font-light dark:text-[#eee] text-center">
          {work}
        </h3>
       
        <div className="flex items-center mt-[50px] gap-x-[10px] justify-center">
          <a
            href={email}
            className="hover:text-[#dc2626] dark:text-[#fafafa] "
            target="_blank"
          >
            <FiMail className="text-[20px]" />
          </a>
          <a
          href={github_link}
          className="hover:text-[#999] dark:text-[#fafafa] dark:hover:text-[#ccc]"
          target="_blank"
        >
          <FiGithub className="text-[20px]" />
        </a>
          <a
            href={website_link}
            className="hover:text-[#4ade80] dark:text-[#fafafa] dark:hover:text-[#ccc]"
            target="_blank"
          >
            <FiLink className="text-[20px]" />
          </a>
          <a
            href={insta_link}
            className="hover:text-[#c026d3] dark:text-[#fafafa] dark:hover:text-[#ccc]"
            target="_blank"
          >
            <FiInstagram className="text-[20px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContributeCard;
