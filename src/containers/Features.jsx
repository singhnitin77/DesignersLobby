import React from "react";

import {
  FiCloudLightning,
  FiDatabase,
  FiFolderPlus,
  FiGithub,
  FiLayers,
  FiMoon,
  FiPackage,
  FiPlay,
  FiRss,
  FiUsers,
  FiPlusCircle,
  FiTrendingUp,
  FiFilter,
  FiUser,
  FiSearch,
  FiPenTool,
} from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

import { Feature_Card } from "../components";

const Features = () => {
  const features = [
    {
      name: "1300 Resources",
      description:
        "DesignersLobby is world's biggest collection of best design Resources & Tools.",
      icon: <FiDatabase className="text-2xl lg:text-4xl xl:text-4xl" />,
    },

    {
      name: "Category Filter",
      description:
        "By filtering by categories, you can find what you are looking for more easily.",
      icon: <FiFilter className="text-2xl lg:text-4xl xl:text-4xl" />,
    },
    {
      name: "Search Filter",
      description: "You can filter resources and tools by Search Filter.",
      icon: <FiSearch className="text-2xl lg:text-4xl xl:text-4xl" />,
    },
    {
      name: "Add new Resource",
      description:
        "You can add a new resource to designers Lobby, in the new resource section.",
      icon: <FiPlusCircle className="text-2xl lg:text-4xl xl:text-4xl" />,
    },
    {
      name: "Clean User Interface",
      description:
        "Designers Lobby is crafted with a minimal, intuitive, and sleek design.",
      icon: <FiPenTool className="text-2xl lg:text-4xl xl:text-4xl" />,
    },
    {
      name: "Newsletter feature",
      description:
        "Subscribe to our minimal and beautiful newsletter to get 5 fresh resources",
      icon: <HiOutlineMail className="text-2xl lg:text-4xl xl:text-4xl" />,
    },
    {
      name: "Contributors Page",
      description:
        "Our contributors are proudly displayed on our contributor's page.",
      icon: <FiUsers className="text-2xl lg:text-4xl xl:text-4xl" />,
    },
    {
      name: "Trending Resources",
      description:
        "Dedicated section for latest and trending design resources and tools",
      icon: <FiTrendingUp className="text-2xl lg:text-4xl xl:text-4xl" />,
    },
    {
      name: "Dark Mode",
      description: "You can choose between Light or Dark Mode.",
      icon: <FiMoon className="text-2xl lg:text-4xl xl:text-4xl" />,
    },
    {
      name: "Built for Everyone",
      description:
        "Our aim is to help design teams, developers, content creators, & freelancers",
      icon: <FiUser className="text-2xl lg:text-4xl xl:text-4xl" />,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-[#16154d] to-[#421779] md:py-[96px] py-[48px]">
      <div className="h-auto w-full flex items-center justify-center p-7">
        <div className="h-auto min-h-[80vh] w-full rounded-md bg-[rgba(0,0,0,0.6)] bg-black flex items-center justify-center flex-wrap border border-[#b84f90] py-[48px] overflow-x-hidden">
          <div className="flex items-center justify-between">
            <h1 className="text-[30px] lg:text-[36px] xl:text-[36x] text-white font-semibold font-Space text-center mb-[24px]">
              Features
            </h1>
          </div>
          <div className="flex flex-wrap w-full justify-center mt-10">
            {features.map((feature, i) => {
              return (
                <Feature_Card
                  name={feature.name}
                  description={feature.description}
                  icon={feature.icon}
                  key={i}
                />
              );
            })}
          </div>

          {/* How it works */}

          {/*   <div
            className="w-full p-7 mt-10 mb-5 flex flex-col lg:flex-row xl:flex-row"
            id="howitworks"
          >
            <div className="w-full lg:w-4/12 xl:w-4/12">
              <h3 className="text-sm lg:text-lg xl:text-lg bg-text-gradient font-bold mb-2 uppercase tracking-wider">
                How it works
              </h3>
              <h1 className="text-lg lg:text-2xl xl:text-2xl font-semibold">
                3 easy steps to be a contributor and help code house grow 🎉
              </h1>
            </div> */}

          {/*   <div
              className="w-full lg:w-8/12 xl:w-8/12 flex items-start justify-center pt-7 flex-col lg:flex-row xl:flex-row"
              data-aos="fade-left"
            >
              <div className="w-full lg:w-[28%] xl:w-[28%] my-3 lg:my-0 xl:my-0 lg:mx-3 xl:mx-3">
                <div className="flex w-full items-center">
                  <h3 className="font-bold text-2xl">1</h3>
                  <div className="w-full rounded-sm h-[1px] ml-2 bg-[#ECF2F580]"></div>
                </div>
                <h3 className="text-sm lg:text-lg xl:text-lg">
                  Join Code House, sign In using google or github.
                </h3>
              </div>
              <div className="w-full lg:w-[28%] xl:w-[28%] my-3 lg:my-0 xl:my-0 lg:mx-3 xl:mx-3">
                <div className="flex w-full items-center">
                  <h3 className="font-bold text-2xl">2</h3>
                  <div className="w-full rounded-sm h-[1px] ml-2 bg-[#ECF2F580]"></div>
                </div>
                <h3 className="text-sm lg:text-lg xl:text-lg">
                  Add a new cheatsheet if you have found one.
                </h3>
              </div>
              <div className="w-full lg:w-[28%] xl:w-[28%] my-3 lg:my-0 xl:my-0 lg:mx-3 xl:mx-3">
                <div className="flex w-full items-center">
                  <h3 className="font-bold text-2xl">3</h3>
                  <div className="w-full rounded-sm h-[1px] ml-2 bg-[#ECF2F580]"></div>
                </div>
                <h3 className="text-[0.9rem]">
                  Your cheatsheet will be reviewed and added to the app, also
                  see yourself in contributors.
                </h3>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Features;
