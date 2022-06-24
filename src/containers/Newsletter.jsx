import React from "react";
import newsletter from "../assets/newsletter.png";

const Newsletter = () => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row px-[35px] py-[40px] md:px-[60px] md:py-[60px] bg-background-4 bg-cover bg-no-repeat bg-center">
      <div className="flex flex-1 justify-center items-start flex-col mr-[50px]">
        <h1 className="text-[28px] md:text-[30px] lg:text-[40px] xl:text-[40px] font-Inter font-bold mb-[16px]  animate__animated animate__fadeInUp hero-heading-gradient">
          5 Fresh Design Resources Weekly
        </h1>
        <p className="text-[20px] md:text-[24px] lg:text-[28px] xl:text-[28px] font-Inter font-medium mb-[24px] md:mb-[32px]  animate__animated animate__fadeInUp leading-[1.25] hero-heading-gradient">
          Get our minimal and beautiful newsletter straight to your inbox every
          Tuesday.
        </p>
        <form className="w-full animate__animated animate__fadeInUp">
          <div className="flex items-start flex-col justify-between gap-2">
            {/* <input
                  type="text"
                  className="shadow appearance-none border rounded w-[70%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your email address"
                /> */}
            <input
              type="email"
              className="w-[90%]  md:w-[70%] py-[12px] px-[16px] border border-gray-300 rounded-md placeholder:font-Inter placeholder:font-light focus:outline-none focus:shadow-outline shadow appearance-none font-Inter"
              placeholder="Enter your email address"
            />
            <div className="md:mt-[32px] mt-[20px]">
              <button className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                <span className="relative text-white font-Space">
                  Submit Now
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img
          className="w-[100%] md:w-[100%] lg:w-[90%]"
          src={newsletter}
          alt="Newsletter-Illustration"
        />
      </div>
    </div>
  );
};

export default Newsletter;
