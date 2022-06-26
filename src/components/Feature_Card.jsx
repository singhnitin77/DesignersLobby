import React from "react";

const FeatureComponent = ({ name, description, icon }) => {
  return (
    <div
      className="mx-4 my-4 lg:my-6 xl:my-6 relative flex items-center justify-start flex-col w-full lg:w-[17%] xl:w-[17%] text-center overflow-hidden"
      data-aos="fade-left"
    >
      <div className="p-3 lg:p-5 xl:p-5 icons-bg text-white">{icon}</div>
      <h3 className="font-semibold  mt-[16px] mb-[8px] text-[20px] font-Space text-white">
        {name}
      </h3>
      <p className="text-white font-Inter text-[16px]">{description}</p>
    </div>
  );
};

export default FeatureComponent;
