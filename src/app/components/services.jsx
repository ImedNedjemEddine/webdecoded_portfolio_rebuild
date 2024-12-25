"use client";
import React,{useEffect,useState} from "react";
import { ServiceCard } from "./serviceCard";
const services = [
  {
    title: "Fullstack Development",
    content:
      "Building Complete Web Solutions I specialize in developing robust and scalable web applications. From crafting intuitive frontends to architecting powerful backends, I deliver seamless user experiences that meet your business needs.",
    iconName: "web-dev",
  },
  {
    title: "Mobile Development",
    content:
      "Creating Engaging Mobile Apps I design and build cross-platform mobile applications that combine performance and aesthetics. With expertise in technologies like React Native, I ensure your app works flawlessly on both Android and iOS.",
    iconName: "mobile-dev",
  },
  {
    title: "UI/UX Design",
    content:
      "Designing Delightful Experiences I create intuitive and visually stunning designs that prioritize user satisfaction. By blending creativity with usability principles, I craft interfaces that not only look good but also feel great to use.",
    iconName: "design",
  },
];
export const Services = () => {


  return (
    <div
      id="services"
      className="flex flex-col items-center mt-8 justify-center md:min-h-svh"
    >
      <h2 className="font-bold  text-white text-[38px] md:text-[60px] py-2">
        My <span className="font-bold text-[#01EEFF]">Services</span>
      </h2>
      <div className="flex max-md:flex-col">
        {services.map((p) => {
          return (
            <div>
            <ServiceCard
              title={p.title}
              content={p.content}
              iconName={p.iconName}

            
            />
             </div>
          );
        })}
      </div>
    </div>
  );
};
