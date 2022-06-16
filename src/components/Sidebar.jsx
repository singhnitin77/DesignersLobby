import React, { useState } from "react";
import { Drawer } from "@mui/material";
import { useGlobalContext } from "../constants/Context";
import { Link } from "react-router-dom";
import SidebarCard from "./SidebarCard";

import { FiChevronRight } from "react-icons/fi";

const Sidebar = () => {
  const { showDrawer, toggleDrawer, darkMode } = useGlobalContext();

  // const [categories, setCategories] = useState([]);
  const categories = [
    {
      name: "icon",
      hi: "icon",
      link: "category/icon",
    },
    {
      name: "illustration",
      hi: "icon",
      link: "category/illustration",
    },
    {
      name: "color",
      hi: "icon",
      link: "category/color",
    },
    {
      name: "inspiration",
      hi: "icon",
      link: "category/inspiration",
    },
    {
      name: "design",
      hi: "icon",
      link: "category/color",
    },
    {
      name: "icon",
      hi: "icon",
      link: "category/color",
    },
    {
      name: "icon",
      hi: "icon",
      link: "category/color",
    },
    {
      name: "icon",
      hi: "icon",
      link: "category/color",
    },
    {
      name: "icon",
      hi: "icon",
      link: "category/color",
    },
    {
      name: "icon",
      hi: "icon",
      link: "category/color",
    },
    {
      name: "icon",
      hi: "icon",
      link: "category/color",
    },
    {
      name: "icon",
      hi: "icon",
      link: "category/color",
    },
    {
      name: "icon",
      hi: "icon",
      link: "category/color",
    },
    {
      name: "icon",
      hi: "icon",
      link: "category/color",
    },
    {
      name: "icon",
      hi: "icon",
      link: "category/color",
    },
    {
      name: "icon",
      hi: "icon",
      link: "category/color",
    },
    {
      name: "icon",
      hi: "icon",
      link: "category/color",
    },
    {
      name: "icon",
      hi: "icon",
      link: "category/color",
    },
    {
      name: "icon",
      hi: "icon",
      link: "category/color",
    },
    {
      name: "icon",
      hi: "icon",
      link: "category/color",
    },
    {
      name: "icon",
      hi: "icon",
      link: "category/color",
    },
    {
      name: "icon",
      hi: "icon",
      link: "category/color",
    },
  ];

  const [value, setValue] = useState("categories");

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSearchTerm("");
  };

  return (
    <Drawer anchor="left" open={showDrawer} onClose={toggleDrawer}>
      <div
        className={`${
          darkMode ? "dark bg-[#2f2f2f] text-white" : "light"
        } w-[85vw] lg:w-[25vw] md:w-[65vw] xl:w-[25vw] bg-[#ECF2F5] h-full flex gap-y-0 flex-col relative overflow-y-scroll`}
      >
        <div className="h-full w-full flex items-center flex-col py-3">
          <input
            type="text"
            className="w-[92.5%] border white-light-shadow border-[#4469fa] hover:border-[#44469fa] focus:border-[#4469fa] rounded-md px-3 py-2 dark:bg-[#1f1f1f] dark:text-white"
            placeholder="Search Categories"
            value={setSearchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className="w-full flex px-3 mt-3 items-center">
            <div className="w-1/12 h-[2px] rounded-sm bg-[#bbb] bg-gradient-3"></div>
            <h3 className="mx-1 text-[#555] capitalize dark:text-[#ddd]">
              Category
            </h3>
            <div className="w-full h-[2px] rounded-sm bg-[#bbb] bg-gradient-3"></div>
          </div>
        </div>

        <div className="py-3 px-2">
          {categories.map((category, i) => {
            return (
              <SidebarCard name={category.name} key={i} link={category.link} />
            );
          })}
        </div>
      </div>
    </Drawer>
  );
};

export default Sidebar;
