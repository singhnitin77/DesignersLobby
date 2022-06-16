import React from "react";
import { SubMainCard } from "../components";
import nikku from "../assets/nikku.png";

const Illustration = () => {
  const illustration = [
    {
      title: "Bush Modular Illustration Kit",
      description:
        "A collection of tools to create unique patterns, shapes, and backgrounds with just a few clicks. just a few",
      imagesrc:
        "https://ik.imagekit.io/6djsamqli/Design-Inspiration/Web-design-inspiration/httpster_97myhk8Bv.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1655239883441",
      category: "Illustration",
      link: "https://designresourc.es",
    },
    {
      title: "Your Home Helper - Free Illustrations Pack",
      description:
        "Need to help with your home daily routine? You're welcome. Just download and use or edit our new illustrations pack",
      imagesrc:
        "https://ik.imagekit.io/6djsamqli/Design-Inspiration/Portfolio-Inspiration/Miniverse_M-pTHP-g6M.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655240752864",
      category: "Illustration",
      link: "https://designresourc.es",
    },
    {
      title: "Scribbbles Illustrations",
      link: "https://www.scribbbles.design/",
      description:
        "100+ vectorized scribbbles to spice up your design projects",
      imagesrc:
        "https://ik.imagekit.io/6djsamqli/Illustrations/3d-illustrations/Miniverse_9qvK7Bjxb.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1655232137615",
      category: "Illustration",
    },
    {
      title: "Muzli",
      description: "Beautiful free &amp; premium SVG illustrations",
      imagesrc:
        "https://ik.imagekit.io/6djsamqli/Illustrations/3d-illustrations/Handz_afH22bFyC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1655232134351",
      link: "https://designresourc.es",
    },
    {
      title: "Muzli",
      description: "Online community for showcasing user artwork",
      imagesrc:
        "https://ik.imagekit.io/6djsamqli/Illustrations/3d-illustrations/Handy_Hand_s_A7TMu2--k.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1655232134138",
      category: "Illustration",
      link: "https://designresourc.es",
    },
    {
      title: "Muzli",
      description: "Online community for showcasing user artwork",
      imagesrc:
        "https://ik.imagekit.io/6djsamqli/Illustrations/3d-illustrations/Headz_0Qhcj6FGv.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1655232134653",
      category: "Illustration",
      link: "https://designresourc.es",
    },
    {
      title: "Muzli",
      description: "Online community for showcasing user artwork",
      imagesrc:
        "https://ik.imagekit.io/6djsamqli/Illustrations/3d-illustrations/Headz_0Qhcj6FGv.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1655232134653",
      category: "Illustration",
      link: "https://designresourc.es",
    },
    {
      title: "Muzli",
      description: "Online community for showcasing user artwork",
      imagesrc:
        "https://ik.imagekit.io/6djsamqli/Design-Inspiration/Portfolio-Inspiration/Handz_7l2WFK6wn.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655240749105",
      category: "Illustration",
      link: "https://designresourc.es",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-4 gap-x-[40px] gap-y-[48px] px-[60px]">
        {illustration.map((item, i) => {
          return (
            <SubMainCard
              name={item.title}
              description={item.description}
              image={item.imagesrc}
              category_name={item.category}
              link={item.link}
              key={i}
            />
          );
        })}
      </div>
    </>
  );
};

export default Illustration;
