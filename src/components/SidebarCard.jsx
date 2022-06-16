import React from "react";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

const SidebarCard = ({ name, link }) => {
  return (
    <Link to={link}>
      <div className="py-2 border border-[#ddd] duration-500 bg-white hover-border-[#4469fa] focus:border-[#4469fa] rounded-md px-3 flex justify-between items-center category-hover my-1 dark:bg-[#1f1f1f] dark:border-[#555]">
        <h1 className="text-md text-[#222] dark:text-[#fafafa]">{name}</h1>
        <FiChevronRight className="text-xl icon duration-300 stroke-[#d73e87]" />
      </div>
    </Link>
  );
};

export default SidebarCard;
