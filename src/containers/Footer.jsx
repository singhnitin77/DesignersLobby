import React from "react";
import { TwtBtn, CoffeeButton } from "../components";
import { FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#16154d] to-[#421779]">
      <div className="w-full px-[30px] py-[30px] border-t border-[#b84f90] footer-glassmorphism">
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row items-center justify-between gap-y-[16px]">
          <h3 className="text-white font-normal font-Inter">
            Built by{" "}
            <a
              className="font-bold continuous-line text-[#F5BA32]"
              href="http://thenitinsingh.com"
              target="_blank"
              rel="noreferrer"
            >
              Nitin Singh
            </a>{" "}
            and{" "}
            <Link to="/contributors">
              <a className="font-bold continuous-line text-[#F5BA32]">
                Friends
              </a>
            </Link>
          </h3>
          <a
            href="mailto:thedesignerslobby@gmail.com"
            className="font-Inter font-semibold text-[16px] text-white"
          >
            thedesignerslobby@gmail.com
          </a>

          <div className="flex flex-row items-center justify-between">
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
