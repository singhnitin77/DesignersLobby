import React, { useState } from "react";

// material ui
// import MenuItem from "@material-ui/core/MenuItem";
// import Select from "@material-ui/core/Select";
import { MenuItem, Select } from "@mui/material";

const NewResource = () => {
  // Default values
  const [values, setValues] = useState({
    resource_name: "",
    resource_link: "",
    category: "illustration",
    twitter_id: "",
  });

  //   destructuring values
  const { resource_name, resource_link, category, twitter_id } = values;

  // handleChange
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  //   Submit event
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const categories = [
    "Illustrations",
    "Icon",
    "No-Code Tools",
    "Fonts",
    "Icons",
    "Colors",
    "Wireframes",
  ];

  return (
    <div className="w-full h-full bg-background-3 bg-cover bg-no-repeat bg-center">
      <div className="h-full min-h-screen text-[#ecf2f5] w-full p-3 flex items-center justify-center flex-col ">
        <h1 className="text-2xl md:text-4xl lg:text-4xl xl:text-4xl font-bold mb-[32px] lg:mb-[32px] xl:mb-[32px]  text-center font-Space">
          Add a New Resource
        </h1>
        <div className="w-full lg:w-7/12 xl:w-7/12 h-full bg-white rounded-xl m-1 bg-how-works-glassmorphism">
          <form
            className="bg-transparent rounded-xl h-full px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <div className="mb-[20px]">
              <label
                htmlFor=""
                className="block text-white text-sm md:text-[20px] lg:text-[20px] font-Space font-bold mb-[10px]"
              >
                Resource Name
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Sally Illustrations Set"
                value={resource_name}
                onChange={handleChange("resource_name")}
              />
            </div>
            <div className="mb-[20px]">
              <label
                htmlFor=""
                className="block text-white text-sm md:text-[20px] lg:text-[20px] font-Space font-bold mb-[10px]"
              >
                Resoure Link
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="http://webflow.com/"
                value={resource_link}
                onChange={handleChange("resource_link")}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor=""
                className="block text-white text-sm md:text-[20px] lg:text-[20px] font-Space  font-bold mb-[10px]"
              >
                Category
              </label>
              <Select
                className="shadow appearance-none border rounded w-full pr-4 text-white leading-tight focus:outline-none focus:shadow-outline flex justify-center pl-3 bg-white"
                value={category}
                onChange={handleChange("category")}
                placeholder="Illustration"
              >
                {categories.map((category, i) => {
                  return (
                    <MenuItem value={category} key={i}>
                      {category}
                    </MenuItem>
                  );
                })}
              </Select>
            </div>
            <div className="mb-[20px]">
              <label
                htmlFor=""
                className="block text-white text-sm md:text-[20px] lg:text-[20px] font-Space  font-bold mb-[10px]"
              >
                Twitter handle
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="NitinSingh7"
                value={twitter_id}
                onChange={handleChange("twitter_id")}
              />
            </div>
            <div className="">
              <button
                type="button"
                class="mt-[24px] relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
              >
                <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                <span class="relative text-white">Submit Now</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewResource;
