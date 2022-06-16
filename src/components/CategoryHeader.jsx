import React from "react";

const CategoryHeader = ({ name }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[36px] font-Space font-bold mb-[16px] capitalize dark:text-white">
        {name} Resources
      </h1>
      <h3 className="text-[20px] font-semibold font-Inter capitalize mb-[48px] dark:text-[#e9ecef]">
        Curated Collection of {name}
      </h3>
    </div>
  );
};

export default CategoryHeader;
