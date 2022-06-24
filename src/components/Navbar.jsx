import React, { useState } from "react";
import { Link } from "react-router-dom";

// import { FiMenu } from "@material-ui/core/Menu";
import { Menu } from "@mui/material";
import { FiMenu } from "react-icons/fi";
import logo from "../assets/logo.png";

// import toast from "react-hot-toast";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="bg-gradient-to-r from-[#16154d] to-[#421779]">
      <div className="w-full px-6 py-3 flex items-center justify-between">
        <div className="flex justify-start items-center ">
          <Link to="/">
            {/* <p className="text-[24px] text-white font-bold font-Space">
              Designers Lobby
            </p> */}
            <img src={logo} alt="DesignersLobby Logo" className="w-full" />
          </Link>
        </div>
        <div className="lg:flex md:flex xl:flex flex-auto items-center justify-center md:space-x-6 hidden">
          <Link to="/">
            <p className="text-[18px] text-white continuous-line font-medium font-Space">
              Home
            </p>
          </Link>
          <Link to="/how-it-works">
            <p className="text-[18px] text-white continuous-line  font-medium font-Space">
              How it works
            </p>
          </Link>
          <Link to="/contributors">
            <p className="text-[18px] text-white continuous-line  font-medium font-Space">
              Contributors
            </p>
          </Link>
          <Link to="/newresource">
            <p className="text-[18px] text-white continuous-line  font-medium font-Space">
              New Resource
            </p>
          </Link>
        </div>
        <Link
          to="/newsletter"
          className="md:flex lg:flex xl:flex items-center justify-center hidden"
        >
          <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-[18px] font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:outline-none">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0  text-[18px] font-medium font-Space">
              Newsletter
            </span>
          </button>
        </Link>

        <button className="rounded-md block lg:hidden md:hidden xl:hidden">
          <div
            className={` dark:text-white duration-500 px-3 py-[10px] text-lg capitalize rounded-lg font-semibold flex items-center justify-center menu-animation-hover menu-toggle ${
              showNav && "menu-toggle-active"
            }`}
            onClick={() => setShowNav(!showNav)}
          >
            <span></span>
          </div>
        </button>
      </div>
      {showNav && (
        <div className="flex lg:hidden xl:hidden md:hidden flex-col w-full text-center mt-3 p-[16px]">
          <Link to="/" onClick={() => setShowNav(!showNav)}>
            <p className="p-2 w-full flex items-center justify-center border border-[#764dff] rounded-md my-[3px]">
              <h3 className="font-bold continuous-line text-center text-white">
                Home
              </h3>
            </p>
          </Link>
          <Link to="/how-it-works" onClick={() => setShowNav(!showNav)}>
            <p className="p-2 w-full flex items-center justify-center border border-[#764dff] rounded-md my-[3px]">
              <h3 className="font-bold continuous-line text-center text-white">
                How it works
              </h3>
            </p>
          </Link>
          <Link to="/contributors" onClick={() => setShowNav(!showNav)}>
            <p className="p-2 w-full flex items-center justify-center border border-[#764dff] rounded-md my-[3px]">
              <h3 className="font-bold continuous-line text-center text-white">
                Contributors
              </h3>
            </p>
          </Link>
          <Link to="/newresource" onClick={() => setShowNav(!showNav)}>
            <p className="p-2 w-full flex items-center justify-center border border-[#764dff] rounded-md my-[3px]">
              <h3 className="font-bold continuous-line text-center text-white">
                New Resource
              </h3>
            </p>
          </Link>
          <Link to="/newsletter" onClick={() => setShowNav(!showNav)}>
            <p className="p-2 w-full flex items-center justify-center border border-[#764dff] rounded-md my-[3px]">
              <h3 className="font-bold continuous-line text-center text-white">
                Newsletter
              </h3>
            </p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
