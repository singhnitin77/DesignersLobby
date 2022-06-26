import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  CategoryHeader,
  Loader,
  DesignserLobbyBanner,
  NavHeader,
  BannerCard,
} from "../components";
import { useResource } from "../context/Resource";
import { useSubCategory } from "../context/SubCategory";
import ResourceContainer from "../Resources/ResourceContainer";

const Categories = ({}) => {
  const { categories } = useParams();

  const { resource, dispatchResource } = useResource();
  const { SubCategory } = useSubCategory();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const init = async () => {
      let id;
      if (SubCategory.data.length > 0) {
        id = SubCategory.data.filter((el) => {
          return el.title === categories;
        })[0]._id;
      }
      if (id) {
        dispatchResource({
          type: "RESOURCE_LOADER",
        });
        await axios
          .post(`/resource/${id}`)
          .then((res) => {
            console.log(res);
            dispatchResource({
              type: "RESOURCE_SUCCESS",
              payload: res.data.data,
            });
          })
          .catch((err) => {
            console.log(err);
            dispatchResource({
              type: "RESOURCE_ERR",
            });
          });
      }
    };
    init();
  }, [SubCategory, categories]);

  useEffect(() => {
    console.log(resource);
  }, [resource]);

  // if (resource.loader) {
  //   return <Loader />;
  // }

  return (
    <>
      <DesignserLobbyBanner />
      <NavHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="w-full px-[35px] py-[40px] md:px-[80px] md:py-[80px] bg-[#F3F4FD] dark:bg-[#2f2f2f] overflow-hidden">
        {/* <CategoryHeader name={categories} /> */}

        <BannerCard />
        {resource.loader ? <Loader /> : null}

        <ResourceContainer searchTerm={searchTerm} />
      </div>
    </>
  );
};

export default Categories;
