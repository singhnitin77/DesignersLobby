import React from "react";
import { MainPageCard } from "../components";
import { useSubCategory } from "../context/SubCategory";

const MainCategories = () => {
  const { SubCategory } = useSubCategory();

  return (
    <div className="w-full px-[80px] py-[80px] white-light-shadow dark:bg-[#2F2F2F] bg-[#ECF2F5] overflow-hidden">
      <div className="w-full grid grid-cols-4 gap-x-[40px] gap-y-[48px]">
        {SubCategory.data.map((category, i) => {
          return (
            <MainPageCard
              image={category.imageSrc}
              name={category.title}
              description={category.text}
              category={category.category.name}
              link={`category/${category.title}`}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MainCategories;
