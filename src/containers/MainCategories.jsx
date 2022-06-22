import React from "react";
import { MainPageCard } from "../components";
import { useSubCategory } from "../context/SubCategory";

const MainCategories = () => {
  // const categories = [
  //   {
  //     name: "Illustration",
  //     imagesrc:
  //       "https://ik.imagekit.io/6djsamqli/Dev-Tools/FONTS-tools_lvHGmIwro.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655280494019",
  //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     link: "/category/illustration",
  //   },
  //   {
  //     name: "Illustration",
  //     imagesrc:
  //       "https://ik.imagekit.io/6djsamqli/Dev-Tools/FONTS_DB9rRCBJD.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655280615305",
  //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     link: "/category/icon",
  //   },
  //   {
  //     name: "Illustration",
  //     imagesrc:
  //       "https://uploads-ssl.webflow.com/5ce10a4d0b5f0b560c22e756/5de3c78d59d27b7e17282489_Image-LoremIpsum.jpg",
  //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     link: "/category/color",
  //   },
  //   {
  //     name: "Illustration",
  //     imagesrc:
  //       "https://uploads-ssl.webflow.com/5ce10a4d0b5f0b560c22e756/5de77f8a524e509909f338df_Image-Wireframer.jpg",
  //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     link: "/category/font",
  //   },
  //   {
  //     name: "Illustration",
  //     imagesrc:
  //       "https://uploads-ssl.webflow.com/5ce10a4d0b5f0b560c22e756/5f532d846ce296437d4f6086_random-user.gif",
  //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     link: "/category/icon",
  //   },
  //   {
  //     name: "Illustration",
  //     imagesrc:
  //       "https://uploads-ssl.webflow.com/5ce10a4d0b5f0b560c22e756/5feb394d7b9f08329593c81e_2020-ipsum.svg",
  //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     link: "/category/icon",
  //   },
  //   {
  //     name: "Illustration",
  //     imagesrc:
  //       "https://caphe.sfo2.digitaloceanspaces.com/assets/images/nikuu-free-3d-illustration-for-figma-thumb.jpg",
  //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     link: "/category/icon",
  //   },
  //   {
  //     name: "Illustration",
  //     imagesrc:
  //       "https://caphe.sfo2.digitaloceanspaces.com/assets/images/nikuu-free-3d-illustration-for-figma-thumb.jpg",
  //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     link: "/category/icon",
  //   },
  // ];
  const { SubCategory } = useSubCategory();

  return (
    <div className="w-full px-[60px] py-[60px] white-light-shadow dark:bg-[#2F2F2F] bg-[#ECF2F5]">
      <div className="w-full grid grid-cols-4 gap-x-[32px] gap-y-[32px]">
        {SubCategory.data.map((category, i) => {
          return (
            <MainPageCard
              image={category.imageSrc}
              name={category.title}
              description={category.text}
              category={category.category.name}
              link={`category/${category.title}`}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MainCategories;
