import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full h-full bg-background-3 bg-cover bg-no-repeat bg-center">
      <div className="h-full min-h-screen w-full flex items-center justify-center flex-col">
        <h1 className="text-[32px] md:text-[40px] lg:text-[40px] xl:text-[40px] font-bold mb-[32px] lg:mb-[32px] xl:mb-[32px] text-center font-Space text-white">
          Subscribe to our Newsletter
        </h1>
        <div className="w-full lg:w-9/12 xl:w-9/12 h-full rounded-xl m-1 bg-how-works-glassmorphism py-[28px] flex items-center justify-center flex-col">
          <div className="w-full lg:w-7/12 xl:w-7/12 md:w-7/12">
            <h1 className="text-center text-white md:text-[28x] lg:text-[28px] xl:text-[28px] font-Inter font-semibold mb-[24px]">
              Get notified when we are launching
            </h1>
            <p className="text-center text-white md:text-[22px] font-Space font-medium mb-[32px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <form className="bg-transparent rounded-xl h-full px-8 pt-6 pb-8">
              <div className="flex items-center justify-between gap-2 space-y-0">
                {/* <input
                  type="text"
                  className="shadow appearance-none border rounded w-[70%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your email address"
                /> */}
                <input
                  type="text"
                  class="w-[70%] py-[12px] px-[16px] border border-gray-300 rounded-md placeholder:font-Space placeholder:font-light focus:outline-none focus:shadow-outline shadow appearance-none font-Space"
                  placeholder="Enter your email address"
                />
                <button class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
                  <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                  <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                  <span class="relative text-white font-Space">Submit Now</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
