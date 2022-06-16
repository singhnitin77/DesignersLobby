import React from "react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#16154d] to-[#421779]">
      <div className="w-full px-[30px] py-[30px] border-t border-[#b84f90] glassmorphism bg-pattern">
        <div className="flex items-center justify-center mb-[14px]">
          <h3 className="font-Space text-[20px] text-white font-bold">
            App built by{" "}
            <a
              className="font-Space border-b-2 hover:text-[#f5ba32] border-[#f5ba32]"
              href="https://www.thenitinsingh.com/"
              target="_blank"
            >
              Nitin Singh
            </a>
          </h3>
        </div>
        <div class="flex flex-col md:flex-row lg:flex-row xl:flex-row items-center justify-between">
          <h3 className="text-[18px] font-Inter font-semibold text-white">
            Copyright &copy; 2022 DesignHouse
          </h3>
          <p className="text-[18px] font-Inter  font-semibold text-white">
            thenitinsingh77@gmail.com
          </p>
          <div className="md:flex hidden flex-row items-center justify-between">
            <button
              type="button"
              class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              GitHub
            </button>
            <button
              type="button"
              class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Buy me Coffee
            </button>
            <button
              type="button"
              class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Newsletter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
