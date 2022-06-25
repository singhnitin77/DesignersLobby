import React from "react";
import DesignHouseInfo from "../components/DesignHouseInfo";
import ContributeCard from "../components/ContributeCard";
import { ContributeBanner, ResourceContributors } from "../components";

// const Contributors = () => {
//   contributordata = [
//     {
//       name: "Nitin Singh",
//       link: "github.com/singhnitin77",
//     },
//     {
//       name: "Nitin Singh",
//       link: "github.com/singhnitin77",
//     },
//     {
//       name: "Nitin Singh",
//       link: "github.com/singhnitin77",
//     },
//   ];
//   return (
//     <div className="bg-[#ecf2f5] h-full w-full overflow-visible min-h-screen pb-10">
//       <DesignHouseInfo />
//       <div className="flex flex-col items-center justify-center">
//         <h1 className="text-[30px] font-semibold font-Space text-center mb-[24px]">
//           Contributors
//         </h1>
//         <p>
//           A big thanks to all contributors who helped code house grow and help
//           many! Thank you! Keep helps us grow!
//         </p>
//         <div className="flex justify-center w-full">
//           <div className="w-10/12 py-2">
//             <div className="w-full flex px-3 my-2 mt-3 items-center">
//               <div className="w-1/12 h-[1px] rounded-sm bg-[#ddd]"></div>
//               <h3 className="mx-2 text-[#555] capitalize font-bold text-lg w-auto">
//                 Github Contributors
//               </h3>
//               <div className="w-8/12 h-[1px] rounded-sm bg-[#ddd]"></div>
//             </div>
//             <div className="grid grid-cols-4">
//               {contributordata.map((person, i) => {
//                 return (
//                   <ContributeCard
//                     name={person.name}
//                     link={person.link}
//                     key={i}
//                   />
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contributors;

const Contributors = () => {
  const contributordata = [
    {
      image: "https://avatars.githubusercontent.com/u/77439529?v=4",
      name: "Nitin Singh",
      link: "github.com/singhnitin77",
      work: "Front-End & UI/UX",
    },
    {
      image: "https://avatars.githubusercontent.com/u/77439529?v=4",
      name: "Bharat Kumar",
      link: "github.com/singhnitin77",
      work: "Backend Dev",
    },
    {
      image: "https://avatars.githubusercontent.com/u/77439529?v=4",
      name: "Prashant Kumar",
      link: "github.com/singhnitin77",
      work: "BackEnd Data",
    },
  ];

  const resourcecontributors = [
    {
      name: "Vishal",
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
    <div className="bg-[#F5F9FF] w-full min-h-screen pb-10 dark:bg-[#2F2F2F] overflow-x-hidden">
      <DesignHouseInfo />
      <h1 className="text-[32px] text-gradient-how-it-works font-bold md:text-[36px] lg:text-[44px] my-[24px] flex items-center justify-center">
        Contributors
      </h1>
      <ContributeBanner
        // text="Contributors"
        description="Designer's Lobby is empowered by various contributors who have compiled the highest quality resources.
A big thanks to all the contributors who helped Designers Lobby and the Design community grow! Thank you! We thank all of them wholeheartedly."
      />

      <div className="flex justify-center w-full ">
        <div className="w-10/12 py-2">
          <div className="w-full flex px-3 my-2 mt-3 items-center">
            <div className="w-5/12 h-[2px] rounded-sm bg-[#ddd] bg-gradient-3"></div>
            <h3 className="mx-2 text-[#3d53ff] capitalize font-bold text-lg w-auto dark:text-white">
              Design House built by
            </h3>
            <div className="w-5/12 h-[2px] rounded-sm bg-[#ddd] bg-gradient-3"></div>
          </div>
        </div>
      </div>

      {/* Contributors card */}
      <div className="px-[40px] my-[24px] w-full sm:w-full md:w-[70%] lg:w-[70%] xl:w-[70%] mx-auto">
        <div className="flex flex-col gap-y-[24px] items-center sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-between lg:gap-x-4 md:gap-x-3 xl:gap-x-4">
          {contributordata.map((person, i) => {
            return (
              <ContributeCard
                image={person.image}
                name={person.name}
                link={person.link}
                work={person.work}
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
            <div className="w-5/12 h-[2px] rounded-sm bg-[#ddd] bg-gradient-3"></div>
            <h3 className="mx-2 text-[#3d53ff] capitalize font-bold text-lg w-auto dark:text-white">
              Resource Contributors
            </h3>
            <div className="w-5/12 h-[2px] rounded-sm bg-[#ddd] bg-gradient-3"></div>
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
