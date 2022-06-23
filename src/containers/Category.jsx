import React, { useState } from "react";
import { DesignHouseInfo, NavHeader } from "../components";
import { Outlet } from "react-router-dom";

const Category = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="bg-[#ecf2f5] h-full w-full overflow-visible min-h-screen">
      <DesignHouseInfo />
      <NavHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {/* <Outlet searchTerm={searchTerm} /> */}
    </div>
  );
};

export default Category;
