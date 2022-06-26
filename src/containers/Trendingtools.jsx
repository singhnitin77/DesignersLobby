import React from "react";
import { trendingtools } from "../constants/trendingtools";
import { TrendingtoolCard } from "../components";

const Trendingtools = () => {
  return (
    <div className="w-full px-[35px] py-[40px] md:px-[62px] lg:px-[70px] lg:py-[70px] xl:px-[80px] xl:py-[80px] dark:bg-[#2f2f2f] bg-[#F5F9FF] overflow-hidden">
      <h1 className="text-[30px] lg:text-[40px] text-gradient-how-it-works xl:text-[40px]  dark:text-white text-black font-bold font-Space text-center mb-[36px]">
        Trending Tools
      </h1>
      <div className="xl:px-[80px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[40px] gap-y-[48px]">
          {trendingtools.map((resource, i) => {
            return (
              <TrendingtoolCard
                name={resource.name}
                imagesrc={resource.imagesrc}
                description={resource.description}
                link={resource.link}
                category={resource.category}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Trendingtools;
