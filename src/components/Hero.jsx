import React from "react";
import { Button, IconButton } from "@mui/material";
import heroimage from "../assets/heroimage.png";
import { Features, How_works, MainCategories } from "../containers";
import NavHeader from "./NavHeader";

const Hero = () => {
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

          <button
            type="button"
            class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-[18px] font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:outline-none"
          >
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0  text-[18px] font-medium font-Space">
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
      <NavHeader />
      <MainCategories />
    </>
  );
};

export default Hero;
