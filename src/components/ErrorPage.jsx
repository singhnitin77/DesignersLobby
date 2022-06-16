import React from "react";
import errorpage from "../assets/errorpage.png";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="w-full px-[40px] py-[60px] bg-[#E6EBFF]">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-1 justify-center items-start flex-col">
          <h1 className="lg:text-[64px] xl:text-[64px] font-Space font-bold text-slate-700 mb-[16px]">
            Oops!
          </h1>
          <h3 className="lg:text-[32px] xl:[32px] font-Space leading-tight text-black font-medium mb-[32px]">
            The Page you are looking for might be removed or temporarily
            unavailable.
          </h3>
          <Link to="/">
            <button class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
              <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
              <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
              <span class="relative text-white font-Space">Home Page</span>
            </button>
          </Link>
        </div>

        <div className="flex flex-1 justify-center items-center">
          <img
            src={errorpage}
            alt="Error Page Illustrations"
            className="w-[100%]"
          />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
