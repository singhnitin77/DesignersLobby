import {useEffect, useState} from "react";
import DesignserLobbyBanner from "../components/DesignserLobbyBanner";
import ContributeCard from "../components/ContributeCard";
import { ContributeBanner, ResourceContributors } from "../components";

const Contributors = () => {
  const [contributors, setContributors] = useState([]);
  const getContributors = async () => {
    const response = await fetch("https://api.github.com/repos/singhnitin77/DesignersLobby/contributors");
    const data = await response.json();
    setContributors(data);
  }

  useEffect(() => {
    getContributors();
  }, []);

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
          <div className="flex items-center w-full px-3 my-2 mt-3">
            <div className="w-4/12 mx-auto h-[2px] rounded-sm bg-[#ddd] bg-gradient-3"></div>
            <h3 className="mx-2 text-[#3d53ff] capitalize font-bold text-lg w-auto dark:text-white">
              Github Contributors
            </h3>
            <div className="w-4/12 mx-auto h-[2px] rounded-sm bg-[#ddd] bg-gradient-3"></div>
          </div>
        </div>
      </div>

      {/* Contributors card */}
      <div className="w-full h-full py-[72px] md:py-[80px] lg:py-[100px] px-[60px] dark:bg-[#333333]">
        <div className="grid lg:grid-cols-4 gap-x-4">
          {contributors.map((person, i) => (
              <ContributeCard
                url={person.url}
                key={i}
              />
            )
          )}
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
