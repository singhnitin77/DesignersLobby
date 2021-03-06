import React, { useState } from "react";
import { MainPageCard, Loader, ScrollButton } from "../components";
import { useSubCategory } from "../context/SubCategory";
import { useResource } from "../context/Resource";

const MainCategories = ({ searchTerm }) => {
  const { SubCategory } = useSubCategory();
  const { resource } = useResource();

  return (
    <div className="w-full px-[35px] py-[40px] md:px-[80px] md:py-[80px] white-light-shadow dark:bg-[#2F2F2F] bg-[#ECF2F5] overflow-hidden">
      {SubCategory.loader ? <Loader /> : null}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[40px] gap-y-[48px]">
        <ScrollButton showBelow={2000} />
        {SubCategory.data
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
            ) {
              return val;
            }
          })
          .map((category, i) => {
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
