import React from "react";
import DesignHouseInfo from "../components/DesignHouseInfo";
import ContributeCard from "../components/ContributeCard";

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
      work: "Front-End and UI/UX",
    },
    {
      image: "https://avatars.githubusercontent.com/u/77439529?v=4",
      name: "Bharat Kumar",
      link: "github.com/singhnitin77",
      work: "Backend Development",
    },
    {
      image: "https://avatars.githubusercontent.com/u/77439529?v=4",
      name: "Prashant Kumar",
      link: "github.com/singhnitin77",
      work: "BackEnd Data Management",
    },
  ];
  return (
    <div className="bg-[#ecf2f5] h-full w-full overflow-visible min-h-screen pb-10 dark:bg-[#2F2F2F]">
      <DesignHouseInfo />
      <div className="flex flex-col items-center justify-center py-[52px]">
        <h1 className="md:text-[32px] lg:text-[40px] xl:text-[40px] dark:text-white font-semibold font-Space text-center mb-[26px] mt-[48px]">
          Contributors
        </h1>
        <p className="text-[24px] font-Space font-semibold dark:text-white text-center">
          A big thanks to all contributors who helped Design House grow and help
          many! Thank you! Keep helps us grow!
        </p>
        <div className="flex justify-center w-full">
          <div className="w-10/12 py-2">
            <div className="w-full flex px-3 my-2 mt-3 items-center mb-[16px]">
              <div className="w-5/12 h-[2px] rounded-sm bg-[#ddd] bg-gradient-3"></div>
              <h3 className="mx-2 text-[#3d53ff] capitalize font-bold text-lg w-auto dark:text-white">
                Design House built by
              </h3>
              <div className="w-5/12 h-[2px] rounded-sm bg-[#ddd] bg-gradient-3"></div>
            </div>
          </div>
        </div>

        {/* Contributors card */}
        <div className="px-[40px] my-[24px] flex items-center justify-between w-[75%]">
          <div className="flex items-center justify-between space-x-[24px] space-y-0">
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
      </div>
    </div>
  );
};

export default Contributors;
