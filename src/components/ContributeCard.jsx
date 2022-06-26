import React from "react";
import {
  FiLink,
  FiGithub,
  FiTwitter,
  FiInstagram,
  FiMail,
} from "react-icons/fi";

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
      className="gradient-shadow p-[4px] rounded-md transtion duration-500 cursor-pointer text-[#222] md:w-[40%] w-[80%] lg:w-[90%] xl:w-[90%] hover:border-[#3d5eff98] bg-gradient-3 w-content"
      data-aos="fade-left"
    >
      <div className="bg-white rounded-md p-[16px] dark:bg-[#222222]">
        <img
          src={image}
          alt={name}
          className="rounded-md w-full overflow-hidden transition duration-300"
        />
        <h1 className="text-[18px] leading-[1.1] lg:text-[24px] xl:text-[24px] md:text-[18px] font-semibold mt-2 capitalize font-Inter dark:text-[#fafafa]">
          {name}
        </h1>
        <h3 className="lg:text-[18px] xl:text-[18px] md:text-[16px] font-semibold capitalize font-Inter dark:text-[#eee]">
          {work}
        </h3>
        <a
          href={github_link}
          className="text-[12px] lg:text-[14px] xl:text-[14px] overflow-ellipsis overflow-hidden font-Inter text-[#3d53ff] dark:text-blue-300 mb-[16px]"
          target="_blank"
        >
          {github_link}
        </a>
        <div className="flex items-center mt-[10px] gap-x-[10px]">
          <a
            href={email}
            className="hover:text-[#999] dark:text-[#fafafa] dark:hover:text-[#ccc]"
            target="_blank"
          >
            <FiMail className="text-[20px]" />
          </a>
          <a
            href={website_link}
            className="hover:text-[#999] dark:text-[#fafafa] dark:hover:text-[#ccc]"
            target="_blank"
          >
            <FiLink className="text-[20px]" />
          </a>
          <a
            href={insta_link}
            className="hover:text-[#999] dark:text-[#fafafa] dark:hover:text-[#ccc]"
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
