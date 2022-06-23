import React from "react";
import { SubMainCard, Loader } from "../components";
import { useResource } from "../context/Resource";

const ResourceContainer = ({ searchTerm }) => {
  const { resource } = useResource();

  return (
    <>
      <div className="grid grid-cols-4 gap-x-[40px] gap-y-[48px] px-[60px]">
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
