import React, { useState } from "react";
import { Link } from "react-router-dom";

// import { FiMenu } from "@material-ui/core/Menu";
import { Menu } from "@mui/material";
import { FiMenu } from "react-icons/fi";

// import toast from "react-hot-toast";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="bg-gradient-to-r from-[#16154d] to-[#421779]">
      <div className="w-full px-6 py-3 flex items-center justify-between">
        <div className="flex justify-start items-center ">
          <Link to="/">
            <p className="text-[24px] text-white font-bold font-Space">
              Design House
            </p>
          </Link>
        </div>
        <div className="lg:flex md:flex xl:flex flex-auto items-center justify-center md:space-x-6 hidden">
          <Link to="/">
            <p className="text-[18px] text-white continuous-line font-medium font-Space">
              Features
            </p>
          </Link>
          <Link to="/">
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
          <button class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-[18px] font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:outline-none">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0  text-[18px] font-medium font-Space">
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
          <Link to="">
            <p className="p-2 w-full flex items-center justify-center border border-[#764dff] rounded-md my-[3px]">
              <h3 className="font-bold continuous-line text-center text-white">
                Features
              </h3>
            </p>
          </Link>
          <Link to="">
            <p className="p-2 w-full flex items-center justify-center border border-[#764dff] rounded-md my-[3px]">
              <h3 className="font-bold continuous-line text-center text-white">
                How it works
              </h3>
            </p>
          </Link>
          <Link to="">
            <p className="p-2 w-full flex items-center justify-center border border-[#764dff] rounded-md my-[3px]">
              <h3 className="font-bold continuous-line text-center text-white">
                Contributors
              </h3>
            </p>
          </Link>
          <Link to="">
            <p className="p-2 w-full flex items-center justify-center border border-[#764dff] rounded-md my-[3px]">
              <h3 className="font-bold continuous-line text-center text-white">
                New Resource
              </h3>
            </p>
          </Link>
          <Link to="">
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

/* 


  return (
    <div className="w-full px-4 py-3 glassmorphism flex justify-between items-center flex-col lg:flex-row xl:flex-row">
      <Link href="/">
        <a className="text-3xl font-extrabold text-[#ECF2F5] change-span-color-onhover">
          Code House
          <span className="text-[#ffcf5e] text-5xl duration-500 leading-3">
            .
          </span>
        </a>
      </Link>
      <div className="flex h-full items-center">
        <div className="hidden md:flex lg:flex xl:flex">
          <Link href="/#how-it-works">
            <a className="text-[13.75px] font-medium continuous-line text-white">
              How it works
            </a>
          </Link>

          <a
            href="https://codehouse-graphql-api.herokuapp.com/"
            target="_blank"
            className="text-[13.75px] font-medium ml-[18px] continuous-line text-white"
          >
            API
          </a>
          <Link href="/feature-requests">
            <a className="text-[13.75px] font-medium ml-[18px] continuous-line text-white">
              Feature Requests
            </a>
          </Link>
          <Link href="/contributors">
            <a className="text-[13.75px] font-medium ml-[18px] continuous-line text-white">
              Contributors
            </a>
          </Link>
          <Link href="/review">
            <a className="text-[13.75px] font-medium ml-[18px] continuous-line text-white">
              On Review
            </a>
          </Link>
          <Link href="/collections">   
            <a className="text-[13.75px] font-medium ml-[18px] continuous-line text-white">
              Collections
            </a>
          </Link>
          <Link href="/bookmarks">
            <a className="text-[13.75px] font-medium ml-[18px] continuous-line text-white">
              Bookmarks
            </a>
          </Link>
        </div>
        <Btn className="rounded-md block lg:hidden md:hidden xl:hidden">
          <div
            className={`bg-app-gradient-2 dark:text-white duration-500 px-3 py-[10px] text-lg capitalize rounded-lg font-semibold flex items-center justify-center menu-animation-hover menu-toggle ${
              showNav && "menu-toggle-active"
            }`}
            onClick={() => setShowNav(!showNav)}
          >
            <span></span>
          </div>
        </Btn>

       
        {user.email ? (
          
        ) : (
          <Button
            className="!p-0 !w-auto !h-auto !m-auto shine !ml-2"
            onClick={() => setOpen(true)}
          >
            <div className="bg-[#F5BA31] px-4 py-[6px] text-md capitalize rounded-md font-semibold flex items-center justify-center">
              Sign In
            </div>
          </Button>
        )}
        <div className="ml-1">
          <BmcButton />
        </div>
      </div>


      {showNav && (
        <div className="flex lg:hidden xl:hidden md:hidden flex-col w-full text-center mt-3">
          <Link href="/new">
            <a className="p-2 w-full flex items-center justify-center border border-[#764dff] bg-pattern rounded-md my-[3px]">
              <h3 className="font-bold continuous-line text-center text-white">
                Add New CheatSheet
              </h3>
            </a>
          </Link>
          <Link href="/#how-it-works">
            <a className="p-2 w-full flex items-center justify-center border border-[#764dff] bg-pattern rounded-md my-[3px]">
              <h3 className="font-bold continuous-line text-center text-white">
                How it works
              </h3>
            </a>
          </Link>
          <a
            className="p-2 w-full flex items-center justify-center border border-[#764dff] bg-pattern rounded-md my-[3px]"
            href="https://codehouse-graphql-api.herokuapp.com/"
            target="_blank"
          >
            <h3 className="font-bold continuous-line text-center text-white">
              API
            </h3>
          </a>
          <Link href="/feature-requests">
            <a className="p-2 w-full flex items-center justify-center border border-[#764dff] bg-pattern rounded-md my-[3px]">
              <h3 className="font-bold continuous-line text-center text-white">
                Feature Requests
              </h3>
            </a>
          </Link>
          <Link href="/contributors">
            <a className="p-2 w-full flex items-center justify-center border border-[#764dff] bg-pattern rounded-md my-[3px]">
              <h3 className="font-bold continuous-line text-center text-white">
                Contributors
              </h3>
            </a>
          </Link>
          <Link href="/review">
            <a className="p-2 w-full flex items-center justify-center border border-[#764dff] bg-pattern rounded-md my-[3px]">
              <h3 className="font-bold continuous-line text-center text-white">
                On Review
              </h3>
            </a>
          </Link>
          <Link href="/collections">
            <a className="p-2 w-full flex items-center justify-center border border-[#764dff] bg-pattern rounded-md my-[3px]">
              <h3 className="font-bold continuous-line text-center text-white">
                Collections
              </h3>
            </a>
          </Link>
          <Link href="/bookmarks">
            <a className="p-2 w-full flex items-center justify-center border border-[#764dff] bg-pattern rounded-md my-[3px]">
              <h3 className="font-bold continuous-line text-center text-white">
                Bookmarks
              </h3>
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;

*/
