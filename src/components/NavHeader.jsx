import React, { useState } from "react";

import { FiGrid, FiList, FiMenu, FiMoon, FiSun } from "react-icons/fi";
// import SearchBar from "./SearchBar";
import { useGlobalContext } from "../constants/Context";
import { BsSearch, BsX } from "react-icons/bs";
import { useSubCategory } from "../context/SubCategory";
import { useResource } from "../context/Resource";

const NavHeader = ({ searchTerm, setSearchTerm }) => {
  const {
    darkMode,
    setDarkMode,
    toggleDrawer,
    toggleDarkMode,
    listView,
    setListView,
  } = useGlobalContext();

  // Toggle Dark Mode

  // const { SubCategory } = useSubCategory();

  // View Toggle
  const toggleListView = () => {
    setListView(!listView);
    window.localStorage.setItem("listView", !listView);
  };

  return (
    <div className="w-full px-[40px] py-[30px] bg-white white-light-shadow flex items-center justify-center flex-col-reverse xl:justify-between lg:flex-row xl-flex-row dark:bg-[#0D1117] border-slate-800">
      <div className="flex items-center w-full lg:w-5/12 xl:w-5/12 justify-center lg:justify-start xl:justify-start mt-2 xl:mt-0 lg:mt-0">
        <button onClick={toggleDrawer}>
          <div className="border border-[#ddd] hover:border-[#3d5eff] text-[#3d5eff] duration-300 px-3 lg:px-5 py-[10px] text-[16px] lg:text-[20px] capitalize rounded-lg flex items-center justify-center font-Inter font-semibold dark:text-white dark:border-[#555]">
            <FiMenu className="text-[20px] lg:text-[24px] ml-1 duration-300 hover:scale-105" />
            <span className="ml-[10px]">Category</span>
          </div>
        </button>

        {/* <SearchBar /> */}
        <div className="flex border border-[#ddd] hover:border-[#3d5eff] duration-500 focus:border-[#3d5eff] pl-3 rounded-lg p-1 w-9/12 items-center justify-between ml-1 dark:border-[#555]">
          <input
            type="text"
            placeholder="Search"
            className="h-full py-1 w-full bg-transparent text-[16px] lg:text-base border-none focus:outline-none dark:text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="bg-[#3d5eff] p-2 lg:p-3 ml-2 cursor:pointer shine rounded-lg text-[16px] lg:text-[18px]">
            {searchTerm ? (
              <BsX className="text-white" onClick={() => setSearchTerm("")} />
            ) : (
              <BsSearch className="text-white" />
            )}
          </div>
        </div>
      </div>

      <div className="flex space-x-[10px]">
        <button className="rounded-md">
          <div className="border border-[#ddd] hover:border-[#3d5eff] text-[#3d5eff] duration-500 px-3 pl-4 py-[10px] text-lg capitalize rounded-lg font-semibold flex items-center justify-center">
            {listView ? (
              <FiList className="text-[16px] lg:text-[20px] duration-500" />
            ) : (
              <FiGrid className="text-[16px] lg:text-[20px] duration-500" />
            )}
          </div>
        </button>
        <button className="rounded-md">
          <div
            className="border border-[#ddd] hover:border-[#3d5eff] text-[#3d5eff] duration-500 px-3 pl-4 py-[10px] text-lg capitalize rounded-lg font-semibold flex items-center justify-center dark:border-[#555] dark:text-white menu-animation-hover"
            onClick={toggleDarkMode}
          >
            {darkMode ? (
              <FiMoon className="text-[16px] lg:text-[20px] duration-500" />
            ) : (
              <FiSun className="text-[16px] lg:text-[20px] duration-500" />
            )}
          </div>
        </button>
      </div>
    </div>
  );
};

export default NavHeader;
