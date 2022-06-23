import React, { useState } from "react";
import { Button, IconButton } from "@mui/material";
import heroimage from "../assets/heroimage.png";
import { Features, How_works, MainCategories } from "../containers";
import NavHeader from "./NavHeader";

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className="flex flex-col md:flex-row px-[40px] py-[60px] bg-cover bg-no-repeat bg-center bg-background-4 overflow-hidden">
        <div className="flex flex-1 justify-center items-start flex-col mr-[50px] animate__animated animate__fadeInLeft">
          <h1 className="font-Inter leading-[1.1] text-[36px] md:text-[44px] lg:text-[54px] xl:text-[54px] hero-heading-gradient font-bold ">
            The Best place for designers around the web
          </h1>
          <p className="font-Inter md:text-[18px] lg:text-[20px] sm:leading-normal xl:text-[20px] text-[16px] text-slate-700 font-medium mt-[18px] mb-[32px] leading-[1.1]">
            Design House is a collection of more than 2000 handpicked design
            resources you need to build and design your next digital product
            from illustrations to No-Code Tools to help you make an effective
            and well-organized workflow.
          </p>

          {/* <button
            type="button"
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-[18px] font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:outline-none"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0  text-[18px] font-medium font-Space">
              Try Now
            </span>
          </button> */}
          <button
            type="button"
            className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group   ease focus:outline-none"
          >
            <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="relative z-20 flex items-center text-sm">
              <svg
                className="relative w-5 h-5 mr-2 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
              Try Now
            </span>
          </button>
        </div>

        <div className="flex flex-1 justify-center items-center animate__animated animate__fadeInRight">
          <img className="w-[90%] heroimg-animation" src={heroimage} alt="" />
        </div>
      </div>
      <Features />
      <How_works />
      <NavHeader setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <MainCategories searchTerm={searchTerm} />
    </>
  );
};

export default Hero;
