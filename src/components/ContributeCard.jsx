import React, {useEffect, useState} from "react";
import { FiLink, FiMail, FiTwitter } from "react-icons/fi";

const ContributeCard = ({
  url
}) => {
  const [userData, setUserData] = useState({});

  const getUserData = async (url) => {
    const response = await fetch(`${url}`);
    const data = await response.json();
    setUserData(data);
  }

  useEffect(() => {
    getUserData(url);
  }, [url]);
  return (
    <div
      className="gradient-shadow p-[4px] rounded-md transtion duration-500 cursor-pointer text-[#222] md:w-[40%] w-[80%] lg:w-[90%] xl:w-[90%] hover:border-[#3d5eff98] bg-gradient-3"
      data-aos="fade-left"
    >
      <div className="bg-white rounded-md p-[16px] dark:bg-[#222222]">
        <img
          src={userData.avatar_url}
          alt={userData.name}
          className="w-full overflow-hidden transition duration-300 rounded-md"
        />
        <h1 className="text-[18px] leading-[1.1] lg:text-[24px] xl:text-[24px] md:text-[18px] font-semibold mt-2 capitalize font-Inter dark:text-[#fafafa] mb-[6px]">
          {userData.name}
        </h1>
        <h3 className="lg:text-[18px] xl:text-[18px] md:text-[16px] font-medium capitalize font-Inter dark:text-[#eee]">
          {userData.bio}
        </h3>
        <a
          href={userData.html_url}
          className="text-[12px] lg:text-[14px] xl:text-[14px] overflow-ellipsis overflow-hidden font-Inter text-[#3d53ff] dark:text-blue-300 mb-[16px]"
          target="_blank"
          rel="noreferrer"
        >
          {userData.html_url}
        </a>
        <div className="flex items-center mt-[10px] gap-x-[10px]">
          <a
            href={`mailto:${userData.email}`}
            className="hover:text-[#999] dark:text-[#fafafa] dark:hover:text-[#ccc]"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FiMail className="text-[20px]" />
          </a>
          <a
            href={userData.blog}
            className="hover:text-[#999] dark:text-[#fafafa] dark:hover:text-[#ccc]"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FiLink className="text-[20px]" />
          </a>
          <a
            href={`https://twitter.com/${userData.twitter_username}`}
            className="hover:text-[#999] dark:text-[#fafafa] dark:hover:text-[#ccc]"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FiTwitter className="text-[20px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContributeCard;
