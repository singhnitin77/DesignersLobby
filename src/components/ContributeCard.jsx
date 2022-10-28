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
      className="p-4 hover:shadow-2xl bg-white m-3 rounded-lg transition-all ease-in-out duration-300 cursor-pointer text-[#222] dark:bg-[#222222] border dark:border-[#444]"
      data-aos="fade-left"
    >
        <img
          src={userData.avatar_url}
          alt={userData.name}
          className="w-full overflow-hidden transition duration-300 rounded-md"
        />
        <h1 className="text-2xl font-semibold font-Epilogue mt-2 capitalize dark:text-[#fafafa]">
          {userData.name}
        </h1>
        <h3 className="text-[14px] leading-[1.15] h-[50px] font-Epilogue text-[#666] dark:text-[#ccc]">
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
        <div className="flex items-center gap-3 pt-4">
            {
                userData.email && (
                    <a
                        href={`mailto:${userData.email}`}
                        className="dark:text-[#fafafa] hover:text-[#999] dark:hover:text-[#ccc]"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <FiMail className="text-[20px]" />
                    </a>
                )
            }
            {
                userData.blog && (
                    <a
                        href={userData.blog}
                        className="dark:text-[#fafafa] hover:text-[#999] dark:hover:text-[#ccc]"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <FiLink className="text-[20px]" />
                    </a>
                )
            }
            {
                userData.twitter_username && (
                    <a
                        href={`https://twitter.com/${userData.twitter_username}`}
                        className="dark:text-[#fafafa] hover:text-[#999] dark:hover:text-[#ccc]"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <FiTwitter className="text-[20px]" />
                    </a>
                )
            }
      </div>
    </div>
  );
};

export default ContributeCard;
