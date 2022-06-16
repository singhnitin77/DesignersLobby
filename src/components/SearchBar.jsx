import React from "react";

import { BsSearch, BsX } from "react-icons/bs";

const SearchBar = ({ searchvalue, setSearchvalue }) => {
  return (
    <div className="flex border border-[#ddd] hover:border-[#3d5eff] duration-500 focus:border-[#3d5eff] pl-3 rounded-lg p-1 w-9/12 items-center justify-between ml-1 dark:border-[#555]">
      <input
        type="text"
        placeholder="Search"
        className="h-full py-1 w-full bg-transparent text-[16px] lg:text-base border-none focus:outline-none dark:text-white"
        value={searchvalue}
        onChange={(e) => setSearchvalue(e.target.value)}
      />
      <div className="bg-[#3d5eff] p-2 lg:p-3 ml-2 cursor:pointer shine rounded-lg text-[16px] lg:text-[18px]">
        {searchvalue ? (
          <BsX className="text-white" />
        ) : (
          <BsSearch className="text-white" />
        )}
      </div>
    </div>
  );
};

export default SearchBar;
