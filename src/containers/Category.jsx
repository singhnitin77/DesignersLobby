import React from "react";
import { DesignHouseInfo, NavHeader } from "../components";
import { Outlet } from "react-router-dom";

const Category = () => {
  return (
    <div className="bg-[#ecf2f5] h-full w-full overflow-visible min-h-screen">
      <DesignHouseInfo />
      <NavHeader />
      <Outlet />
    </div>
  );
};

export default Category;
