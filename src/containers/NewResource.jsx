import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { MenuItem, Select } from "@mui/material";
import axios from "axios";
import { FiCheck, FiX } from "react-icons/fi";
import { useAnalyticsEventTracker } from "../components";

const NewResource = () => {
  const gaEventTracker = useAnalyticsEventTracker("New Resource Button");

  // Default values
  const [values, setValues] = useState({
    resource_name: "",
    resource_link: "",
    category: "Illustrations",
    full_name: "",
  });

  // regex to test whether url is valid or not
  const is_url = (str) => {
    var pattern = new RegExp(
      "^" +
        "(?:(?:https?|ftp)://)" +
        "(?:\\S+(?::\\S*)?@)?" +
        "(?:" +
        "(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
        "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
        "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})" +
        "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
        "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
        "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
        "|" +
        "(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)" +
        "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*" +
        "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" +
        ")" +
        "(?::\\d{2,5})?" +
        "(?:/\\S*)?" +
        "$",
      "i"
    );
    return pattern.test(str);
  };

  //   destructuring values
  const { resource_name, resource_link, category, full_name } = values;

  // handleChange for Input Values
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  //   Submit event
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(resource_name, resource_link, category, full_name);

    if (is_url(resource_link)) {
      try {
        const res = await axios.post("/email", {
          resourceName: resource_name,
          resourceLink: resource_link,
          category: category,
          name: full_name,
        });

        console.log(res);

        // React Toast
        toast.success("Successfully Submitted!");

        // Making State variable default value after submittion
        setValues({
          resource_name: "",
          resource_link: "",
          category: "Illustrations",
          full_name: "",
        });
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
    } else {
      toast.error("Resource link is not valid!");
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
    <div className="bg-background-4 bg-cover bg-no-repeat bg-center px-[35px] md:px-[60px] md:py-[60px] ">
      {/* // <div className="w-full h-full bg-[#831C6E]"> */}
      <Toaster
        toastOptions={{
          // Define default options
          // className: "",
          // duration: 5000,
          style: {
            // background: "#363636",
            // color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
          },

          error: {
            duration: 3000,
          },
        }}
      />
      <div className="min-h-screen text-[#ecf2f5] w-full flex items-center justify-center flex-col ">
        <h1 className="text-2xl md:text-4xl lg:text-4xl xl:text-4xl font-bold mb-[16px] lg:mb-[16px] xl:mb-[16px]  text-center font-Space hero-heading-gradient font-Inter">
          Suggest a New Resource
        </h1>
        <p className="text-[18px] lg:text-[24px] font-semibold text-center font-Inter hero-heading-gradient mb-[32px]">
          Help Designers Lobby provide better and more beautiful content by
          suggesting new & trending design resources.
        </p>
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
                placeholder="Amritpal Toy Faces Library"
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
              <div
                className={`flex border-[1.75px] mb-3 rounded-md bg-white items-center ${
                  is_url(resource_link) ? "border-green-500" : "border-red-500"
                }`}
              >
                <input
                  className="appearance-none font-Inter rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-[#868e96] placeholder:font-Inter"
                  placeholder="https://amritpaldesign.com/toy-faces"
                  value={resource_link}
                  onChange={handleChange("resource_link")}
                />
                {is_url(resource_link) ? (
                  <FiCheck className="text-green-500 text-2xl mr-2" />
                ) : (
                  <FiX className="text-red-500 text-2xl mr-2" />
                )}
              </div>
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
                type="text"
                className="shadow appearance-none border font-Inter rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-[#868e96] placeholder:font-Inter"
                placeholder="John Doe"
                value={full_name}
                onChange={handleChange("full_name")}
              />
            </div>
            <div className="">
              <button
                type="submit"
                className="mt-[24px] relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
                onClick={() => gaEventTracker("New Resource Btn")}
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
