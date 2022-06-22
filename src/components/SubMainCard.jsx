import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { IKImage, IKContext } from "imagekitio-react";

const urlEndpoint = "https://ik.imagekit.io/6djsamqli";

// export default MainCard;
const SubMainCard = ({ image, name, description, category_name, link }) => {
  return (
    <div
      className="shadow-md bg-white hover:shadow-lg transition duration-300 rounded-[12px] cursor:pointer onhover:shadow-lg border-transparent dark:bg-[#1f1f1f] overflow-hidden"
      data-aos="fade-left"
    >
      {/* <img className="w-full block" src={image} alt="" /> */}
      <IKContext urlEndpoint={urlEndpoint}>
        <IKImage src={image} className="w-full block" />
      </IKContext>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col px-[18px] justify-start items-start h-[170px]">
          <h1 className="text-black font-semibold font-Inter text-[20px] mb-[10px] mt-[16px] leading-2  dark:text-white">
            {name}
          </h1>
          <p className="dark:text-[#A3B3BC] text-[#5B6478] font-light leading-normal font-Inter text-[15px] mb-[16px]">
            {description}
          </p>
        </div>
        <div className="flex justify-between self-stretch p-[18px]">
          <h3 className="text-medium font-Space font-semibold text-[14px] text-[#3d5eff] dark:text-[#f1f3f5]">
            {category_name}
          </h3>
          <a href={link} target="_blank">
            <FiExternalLink className="text-[20px] hover:scale-110 duration-300 dark:text-[#eee]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SubMainCard;
