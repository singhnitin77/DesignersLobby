import React from "react";

const BannerCard = ({ imagesrc, title }) => {
  return (
    <div className="w-full px-3 py-6 mb-0 lg:mb-2 my-2 relative flex items-center justify-center flex-col md:flex-row lg:flex-row xl:flex-row">
      <img
        src={imagesrc}
        alt={title}
        className="h-[130px] lg:h-[160px] w-[200px] lg:w-[260px] rounded-[10px] pixelated"
      />
      <div className="block ml-2 lg:ml-5 mt-2 lg:mt-0 text-center animate__animated animate__fadeInUp">
        <h1 className="text-2xl lg:text-4xl font-bold capitalize text-[#222] dark:text-[#ddd]">
          {title}
        </h1>
        <p className="text-[#666] dark:text-[#aaa] text-sm lg:text-base">
          Enjoy Curated Collection of {title} Resources 🥳
        </p>
      </div>
    </div>
  );
};

export default BannerCard;
