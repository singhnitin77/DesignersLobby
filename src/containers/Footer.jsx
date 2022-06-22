import React from "react";
import { TwtBtn, CoffeeButton } from "../components";

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
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row items-center justify-between">
          <h3 className="text-[18px] font-Inter font-semibold text-white">
            Copyright &copy; 2022 DesignHouse
          </h3>
          <p className="text-[18px] font-Inter  font-semibold text-white">
            thenitinsingh77@gmail.com
          </p>
          <div className="md:flex hidden flex-row items-center justify-between">
            <div className="lg:ml-1 xl:ml-1 mt-2 xl:mt-0 lg:mt-0">
              <CoffeeButton />
            </div>
            <div className="lg:ml-1 xl:ml-1 mt-2 xl:mt-0 lg:mt-0">
              <TwtBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
