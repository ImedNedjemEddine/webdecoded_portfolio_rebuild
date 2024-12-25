"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { SocailMedia } from "./socialmedia";

export function HeroSection() {
  return (

      <div className="grid grid-cols-1 lg:grid-cols-12 md:mb-12 md:min-h-svh">
        {/* Image Section */}
        <div className="col-span-5 place-self-center my-8 lg:text-xl order-1 lg:order-2">
          <div className="shadow-xy3 shadow-[rgba(1,232,249,0.2)] hover:shadow-xy3 hover:shadow-[rgba(1,232,249,0.5)] overflow-hidden rounded-full bg-[#3bd2dd] w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] relative">
            <Image
              alt="profile"
              className="mt-10 absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src="/profile1.png"
              height={600}
              width={600}
            />
          </div>
        </div>
        {/* Text Section */}
        <div className="col-span-7 place-self-center text-center sm:text-left order-2 lg:order-1">
          <h1 className="text-white mb-4 text-4xl sm:text-6xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#41a9da] to-[#01EEFF]">
              Hi, It's Nedjem
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Mobile Developer",
                1000,
                "Web Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: ".8em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] mb-6 text-base sm:text-lg lg:text-xl">
          Turning ideas into modern, user-friendly digital solutions by crafting responsive websites, innovative mobile applications, and visually stunning designs that make an impact.
          </p>
          <div>
            <button className="px-12 py-3 rounded-full shadow-xy1 hover:shadow-[rgba(116,246,255,0.8)] hover:shadow-xy2 shadow-[rgba(116,246,255,0.8)]   bg-gradient-to-br from-[#01E8F9] to-[#4D5EF1] w-full sm:w-fit bg-white hover:bg-slate-200 text-[#0F1012] mr-4">
              Let's Talk
            </button>
            
          </div>
          <SocailMedia />
        </div>
      </div>

  );
}
