import React, { useState } from "react";

import { MenuItem, Select } from "@mui/material";
import axios from "axios";

const NewResource = () => {
  // Default values
  const [values, setValues] = useState({
    resource_name: "",
    resource_link: "",
    category: "Illustrations",
    full_name: "",
  });

  //   destructuring values
  const { resource_name, resource_link, category, full_name } = values;

  // handleChange
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  //   Submit event
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(resource_name, resource_link, category, full_name);
    try {
      const res = await axios.post("/email", {
        resourceName: resource_name,
        resourceLink: resource_link,
        category: category,
        name: full_name,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const categories = [
    "Illustrations",
    "Icons",
    "Typography",
    "Design Inspiration",
    "Stock Content",
    "Colors",
    "Design Tools",
    "General Tools",
    "Developer Tools",
    "No Code Tools",
    "Wireframing Tools",
    "Prototyping Tools",
    "Mockup Tools",
    "Freebies & Assets",
    "Figma Resources",
    "Design Learning",
  ];

  return (
    <div className="w-full h-full bg-background-4 bg-cover bg-no-repeat bg-center">
      {/* // <div className="w-full h-full bg-[#831C6E]"> */}
      <div className="h-full min-h-screen text-[#ecf2f5] w-full p-3 flex items-center justify-center flex-col ">
        <h1 className="text-2xl md:text-4xl lg:text-4xl xl:text-4xl font-bold mb-[32px] lg:mb-[32px] xl:mb-[32px]  text-center font-Space hero-heading-gradient font-Inter">
          Suggest a New Resource
        </h1>
        <div className="w-full lg:w-7/12 xl:w-7/12 h-full bg-white rounded-xl m-1 new-resource-glass">
          <form
            className="bg-transparent rounded-xl h-full px-8 pt-8 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <div className="mb-[25px]">
              <label
                htmlFor=""
                className="block text-white text-sm md:text-[20px] lg:text-[20px] font-Inter font-semibold mb-[10px]"
              >
                Resource Name
              </label>
              <input
                type="text"
                className="shadow appearance-none border font-Inter rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-[#868e96] placeholder:font-Inter"
                placeholder="Sally Illustrations Set"
                value={resource_name}
                onChange={handleChange("resource_name")}
              />
            </div>
            <div className="mb-[25px]">
              <label
                htmlFor=""
                className="block text-white text-sm md:text-[20px] lg:text-[20px] font-Inter font-semibold mb-[10px]"
              >
                Resoure Link
              </label>
              <input
                className="shadow appearance-none font-Inter border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-[#868e96] placeholder:font-Inter"
                placeholder="http://webflow.com/"
                value={resource_link}
                onChange={handleChange("resource_link")}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor=""
                className="block text-white text-sm md:text-[20px] lg:text-[20px] font-Inter font-semibold mb-[10px]"
              >
                Category
              </label>
              <Select
                className="shadow appearance-none font-Inter rounded w-full pr-4 text-black leading-tight focus:outline-none focus:shadow-outline focus:border-none flex justify-center pl-3 bg-white"
                value={category}
                onChange={handleChange("category")}
              >
                {categories.map((category, key) => {
                  return (
                    <MenuItem value={category} key={key}>
                      {category}
                    </MenuItem>
                  );
                })}
              </Select>
            </div>
            <div className="mb-[25px]">
              <label
                htmlFor=""
                className="block text-white text-sm md:text-[20px] lg:text-[20px] font-Inter font-semibold mb-[10px]"
              >
                Your Full Name
              </label>
              <input
                required
                type="text"
                className="shadow appearance-none border font-Inter rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-[#868e96] placeholder:font-Inter"
                placeholder="Nitin Singh"
                value={full_name}
                onChange={handleChange("full_name")}
              />
            </div>
            <div className="">
              <button
                type="submit"
                className="mt-[24px] relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                <span className="relative text-white">Submit Now</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewResource;
