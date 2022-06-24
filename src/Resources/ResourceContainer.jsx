import React from "react";
import { SubMainCard, Loader } from "../components";
import { useResource } from "../context/Resource";

const ResourceContainer = ({ searchTerm }) => {
  const { resource } = useResource();

  return (
    <>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[40px] gap-y-[48px]">
        {resource.data
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
            ) {
              return val;
            }
          })
          .map((item, i) => {
            return (
              <SubMainCard
                name={item.title}
                description={item.description}
                image={item.imagesrc}
                category_name={item.subCategory.title}
                link={item.link}
                key={i}
              />
            );
          })}
      </div>
    </>
  );
};

export default ResourceContainer;
