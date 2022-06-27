import React, { useState } from "react";
import { Button, IconButton } from "@mui/material";
import heroimage from "../assets/heroimage.png";
import { Link } from "react-router-dom";
import useAnalyticsEventTracker from "./useAnalyticsEventTracker";
import {
  Features,
  How_works,
  MainCategories,
  Trendingtools,
} from "../containers";
import NavHeader from "./NavHeader";

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const gaEventTracker = useAnalyticsEventTracker("Hero Section");

  return (
    <>
      <div className="flex flex-col md:flex-row px-[40px] pt-[60px] pb-[80px] hero-gradient min-h-[95vh] overflow-hidden">
        <div className="flex flex-1 justify-center items-start flex-col mr-[50px] animate__animated animate__fadeInLeft">
          <h1 className="font-Inter leading-[1.1] text-[36px] md:text-[44px] lg:text-[54px] xl:text-[54px] hero-heading-gradient font-bold ">
            The Best place for designers around the web
          </h1>
          <p className="font-Inter md:text-[18px] lg:text-[20px] sm:leading-normal xl:text-[20px] text-[16px] text-slate-700 font-medium mt-[18px] mb-[32px] lg:leading-[1.16]">
            Designers Lobby is a curated collection of more than 1200 design
            resources and tools with over 60 categories handpicked from the web
            to help build your next digital product lightning-fast, enabling you
            to be more creative and make an effective & well-organized workflow.
          </p>

          <a href="#nav-header">
            <button
              type="button"
              className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group   ease focus:outline-none"
              onClick={() => gaEventTracker("Try Now Button")}
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
          </a>
        </div>

        <div className="flex flex-1 justify-center items-center animate__animated animate__fadeInRight">
          <img
            className="w-[90%] heroimg-animation"
            src={heroimage}
            alt="Designers-Illustration"
          />
        </div>
      </div>
      <Trendingtools />
      <NavHeader setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <MainCategories searchTerm={searchTerm} />
    </>
  );
};

export default Hero;
