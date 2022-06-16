import React from "react";
import { useParams } from "react-router-dom";
import { CategoryHeader } from "../components";
import { Illustration, Icon } from "../Resources";

const Categories = () => {
  const { categories } = useParams();

  const HandleCategory = () => {
    if (categories === "illustration") {
      return <Illustration />;
    }
    if (categories === "icon") {
      return <Icon />;
    }
  };

  return (
    <div className="w-full px-[40px] py-[60px] bg-[#F3F4FD] dark:bg-[#2f2f2f]">
      <CategoryHeader name={categories} />
      <HandleCategory />
    </div>
  );
};

export default Categories;
