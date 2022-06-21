import React from "react";
import { Link } from "react-router-dom";
import { CoffeeButton, TwtBtn } from "./";
import { FiBookOpen } from "react-icons/fi";

const DesignHouseInfo = () => {
  return (
    <div className="bg-cover bg-no-repeat bg-center bg-background-4">
      <div className="w-full text-center flex items-center md:items-center lg:items-center xl:items-center justify-center flex-col py-12 pl-5 lg:pl-0 xl:pl-0">
        <Link to="/">
          <h2 className="text-[38px] md:text-[40px] lg:text-[44px] text-center font-Inter font-bold mb-[24px] animate__animated animate__fadeInUp hero-heading-gradient">
            Design House
          </h2>
        </Link>
        <p className="text-[18px] font-Inter font-medium text-white w-10/12 lg:w-7/12 text-center mb-[32px] animate__animated animate__fadeInUp hero-heading-gradient">
          Introducing Design House, the all in one storehouse for developer
          cheatsheets. Code House is made up of 300+ curated cheatsheets from
          230+ sources. Filter by categories, or source sort by time or
          popularity, dark mode, add new cheatsheets, features requests, top
          cheatsheet hunter, make the app much more amazing!
        </p>
        <div className="flex flex-wrap flex-col items-center justify-center md:flex-row animate__animated animate__fadeInUp">
          <a href="">
            <button className="shine bg-[#f5ba31] px-3 py-2 text-base capitalize rounded-md font-semibold flex items-center justify-center text-[#201c4e]]">
              <FiBookOpen className="text-lg mr-1" />
              <span>Read Blog</span>
            </button>
          </a>
          <div className="lg:ml-1 xl:ml-1 mt-2 xl:mt-0 lg:mt-0">
            <CoffeeButton />
          </div>
          <div className="lg:ml-1 xl:ml-1 mt-2 xl:mt-0 lg:mt-0">
            <TwtBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignHouseInfo;
