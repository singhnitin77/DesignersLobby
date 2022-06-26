import React, { useEffect, useState } from "react";
import { useSubCategory } from "../context/SubCategory";
import { useParams } from "react-router-dom";

const BannerCard = () => {
  const [imageSrc, setImagesrc] = useState("");
  const { categories } = useParams();
  const { SubCategory } = useSubCategory();

  useEffect(() => {
    if (SubCategory.data.length > 0) {
      let imageSrc = SubCategory.data.filter((el) => {
        return el.title === categories;
      })[0].imageSrc;
      console.log(imageSrc);
      setImagesrc(imageSrc);
    }
  }, [categories, SubCategory]);

  return (
    <div className="w-full px-3 py-6 mb-0 lg:mb-[32px] my-2 relative flex items-center justify-center flex-col md:flex-row lg:flex-row xl:flex-row">
      <img
        src={imageSrc}
        alt={categories}
        className="h-[180px] w-[280px] rounded-[10px] pixelated"
      />
      <div className="block ml-2 lg:ml-5 mt-2 lg:mt-0 text-center animate__animated animate__fadeInUp">
        <h1 className="text-2xl lg:text-4xl font-bold mb-[16px] text-left capitalize text-[#222] dark:text-[#ddd]">
          {categories}
        </h1>
        <p className="text-[#666] dark:text-[#aaa] text-[18px] lg:text-[20px]">
          Enjoy Curated Collection of {categories} Resources 🥳
        </p>
      </div>
    </div>
  );
};

export default BannerCard;
