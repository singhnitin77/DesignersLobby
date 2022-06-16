import React from "react";
import { MainPageCard } from "../components";

const Icon = () => {
  const icon = [
    {
      title: "FontAwesome",
      description: "Online community for showcasing user artwork",
      imagesrc:
        "https://designresourc.es/assets/image/5ea6cfa29a5ca9162765aed7_5ea04e67bc13ef6060f34b23_figma.png",
      category: "Icon",
    },
    {
      title: "FontAwesome",
      description: "Online community for showcasing user artwork",
      imagesrc:
        "https://designresourc.es/assets/image/5ea6cfa29a5ca9162765aed7_5ea04e67bc13ef6060f34b23_figma.png",
      category: "Icon",
    },
    {
      title: "FontAwesome",
      description: "Online community for showcasing user artwork",
      imagesrc:
        "https://designresourc.es/assets/image/5ea6cfa29a5ca9162765aed7_5ea04e67bc13ef6060f34b23_figma.png",
      category: "Icon",
    },
    {
      title: "FontAwesome",
      description: "Online community for showcasing user artwork",
      imagesrc:
        "https://designresourc.es/assets/image/5ea6cfa29a5ca9162765aed7_5ea04e67bc13ef6060f34b23_figma.png",
      category: "Icon",
    },
    {
      title: "FontAwesome",
      description: "Online community for showcasing user artwork",
      imagesrc:
        "https://designresourc.es/assets/image/5ea6cfa29a5ca9162765aed7_5ea04e67bc13ef6060f34b23_figma.png",
      category: "Icon",
    },
    {
      title: "FontAwesome",
      description: "Online community for showcasing user artwork",
      imagesrc:
        "https://designresourc.es/assets/image/5ea6cfa29a5ca9162765aed7_5ea04e67bc13ef6060f34b23_figma.png",
      category: "Icon",
    },
    {
      title: "FontAwesome",
      description: "Online community for showcasing user artwork",
      imagesrc:
        "https://designresourc.es/assets/image/5ea6cfa29a5ca9162765aed7_5ea04e67bc13ef6060f34b23_figma.png",
      category: "Icon",
    },
    {
      title: "FontAwesome",
      description: "Online community for showcasing user artwork",
      imagesrc:
        "https://designresourc.es/assets/image/5ea6cfa29a5ca9162765aed7_5ea04e67bc13ef6060f34b23_figma.png",
      category: "Icon",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-4 gap-x-[32px] gap-y-[32px]">
        {icon.map((item, i) => {
          return (
            <MainPageCard
              name={item.title}
              description={item.description}
              image={item.imagesrc}
              category_name={item.category}
              key={i}
            />
          );
        })}
      </div>
    </>
  );
};

export default Icon;
