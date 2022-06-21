import React from "react";

const ResourceContributors = ({ name }) => {
  return (
    <div
      className="p-2 w-full flex items-center justify-center border border-[#764dff] rounded-md my-[3px]"
      data-aos="fade-left"
    >
      <h3 className="font-semibold font-Inter text-[16px] dark:text-white continuous-line text-center text-[#222222]">
        {name}
      </h3>
    </div>
  );
};

export default ResourceContributors;
