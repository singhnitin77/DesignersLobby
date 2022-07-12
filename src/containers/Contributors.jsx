import React from "react";
import DesignserLobbyBanner from "../components/DesignserLobbyBanner";
import ContributeCard from "../components/ContributeCard";
import { ContributeBanner, ResourceContributors } from "../components";

const Contributors = () => {
  const contributordata = [
    {
      image: "https://avatars.githubusercontent.com/u/77439529?v=4",
      name: "Nitin Singh",
      github_link: "https://github.com/singhnitin77",
      work: "Full Stack Dev & UI/UX Designer",
      email: "mailto:thenitinsingh77@gmail.com",
      insta_link: "https://www.instagram.com/thenitinsingh7/",
      website_link: "https://www.thenitinsingh.com/",
    },
    {
      image: "https://avatars.githubusercontent.com/u/77439529?v=4",
      name: "Bharat Kumar",
      github_link: "https://github.com/Bharat-kr",
      work: "Full Stack Web Developer",
      email: "mailto: kumarbharat661@gmail.com",
      insta_link: "https://www.instagram.com/bharatkr_15/",
      website_link: "https://bharat-kr.github.io/Profile/",
    },
    {
      image: "https://avatars.githubusercontent.com/u/77439529?v=4",
      name: "Prashant kumar",
      github_link: "https://github.com/devprashantt",
      work: "Android & Web Developer",
      email: "mailto:officialprashanttt@gmail.com",
      insta_link: "https://www.instagram.com/king11prashant11/",
      website_link: "https://prashant-kumar.herokuapp.com/",
    },
  ];

  const resourcecontributors = [
    {
      name: "Jeffrey Betts",
    },
    {
      name: "Shahadat Rahman",
    },
    {
      name: "Zion",
    },
    {
      name: "Vishal",
    },
    {
      name: "Bhavesh Vaid",
    },
    {
      name: "Aditya Singh",
    },

    {
      name: "Sagar Bhan",
    },
    {
      name: "Harshvardhan",
    },
    {
      name: "Hitendra Singh",
    },
    {
      name: "Manish Kumar",
    },
    {
      name: "Aditya Rawat",
    },
    {
      name: "Tamish Bajaj",
    },
  ];

  return (
    <div className="bg-[#F5F9FF] w-full min-h-screen pb-10 dark:bg-[#2b2b2b] overflow-x-hidden">
      <DesignserLobbyBanner />
      <h1 className="text-[32px] text-gradient-how-it-works font-bold md:text-[36px] lg:text-[44px] my-[24px] flex items-center justify-center">
        Contributors
      </h1>
      <ContributeBanner
        // text="Contributors"
        description="Designers Lobby is empowered by various contributors who have compiled the highest quality resources.
A big thanks to all the contributors who helped Designers Lobby and the Design community grow! Thank you! We thank all of them wholeheartedly."
      />

      <div className="flex justify-center w-full">
        <div className="w-10/12 py-2">
          <div className="w-full flex px-3 my-2 mt-3 items-center">
            <div className="w-4/12 mx-auto h-[2px] rounded-sm bg-[#ddd] bg-gradient-3"></div>
            <h3 className="mx-2 text-[#3d53ff] capitalize font-bold text-lg w-auto dark:text-white">
              Github Contributors
            </h3>
            <div className="w-4/12 mx-auto h-[2px] rounded-sm bg-[#ddd] bg-gradient-3"></div>
          </div>
        </div>
      </div>

      {/* Contributors card */}
      <div className="px-[40px] my-[24px] w-full sm:w-full md:w-[70%] lg:w-[75%] xl:w-[75%] mx-auto">
        <div className="flex flex-col gap-y-[24px] items-center sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-between lg:gap-x-4 md:gap-x-3 xl:gap-x-4">
          {contributordata.map((person, i) => {
            return (
              <ContributeCard
                image={person.image}
                name={person.name}
                github_link={person.github_link}
                work={person.work}
                email={person.email}
                website_link={person.website_link}
                insta_link={person.insta_link}
                key={i}
              />
            );
          })}
        </div>
      </div>

      {/* Resource Contributors */}
      <div className="flex justify-center w-full">
        <div className="w-10/12 py-2">
          <div className="w-full flex px-3 my-2 mt-3 items-center mb-[16px]">
            <div className="w-4/12 mx-auto h-[2px] rounded-sm bg-[#ddd] bg-gradient-3"></div>
            <h3 className="mx-2 text-[#3d53ff] capitalize font-bold text-lg w-auto dark:text-white">
              Resource Contributors
            </h3>
            <div className="w-4/12 mx-auto h-[2px] rounded-sm bg-[#ddd] bg-gradient-3"></div>
          </div>
        </div>
      </div>

      <div className="px-[40px] my-[24px] w-full sm:w-full md:w-[65%] lg:w-[70%] xl:w-[70%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-3 gap-y-3">
          {resourcecontributors.map((person, i) => {
            return <ResourceContributors name={person.name} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Contributors;
