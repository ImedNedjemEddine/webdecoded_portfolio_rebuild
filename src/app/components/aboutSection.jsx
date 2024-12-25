"use client";

import Image from "next/image";
import { useState } from "react";

export const AboutSection = () => {
  const [onRead, setOnRead] = useState(true);
  return (
    <div
      id="about"
      className="flex text-white md:min-h-svh justify-center items-center"
    >
      <div className="flex max-md:flex-col-reverse md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div
          data-aos="fade-right"
          className="md:col-span-1 shadow-xy3 shadow-[rgba(1,232,249,0.2)] hover:shadow-xy3 hover:shadow-[rgba(1,232,249,0.5)] overflow-hidden rounded-full bg-[#3bd2dd] w-[250px] h-[250px] lg:w-[600px] lg:h-[600px] relative"
        >
          <Image
            alt="profile"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:mt-10"
            src="/profile1.png"
            height={600}
            width={600}
          />
        </div>

        <div
          data-aos="fade-top"
          className="row text-center md:text-left no-gutters"
          style={{ overflowX: "hidden" }}
        >
          <h2 className="font-bold  text-white text-[38px] md:text-[60px] py-2">
            About <span className="font-bold text-[#01EEFF]">Me</span>
          </h2>

          {onRead ? (
            <div data-aos="fade-left">
              <h2 className="text-xl md:text-4xl font-bold text-white mb-4">
                Hello, I am Benoudina Imed Nedjem Eddine
              </h2>
              <p className="text-base lg:text-lg">
                I'm a passionate React Native and Next.js developer with 3 years
                of experience creating dynamic, user-friendly applications. I’m
                also a dedicated UI/UX designer, striving to blend functionality
                with aesthetic appeal...
              </p>
            </div>
          ) : (
            <div data-aos="fade-left">
              <h2 className="text-4xl font-bold text-white mb-4">
                Hello, I am Benoudina Imed Nedjem Eddine
              </h2>
              <p className="text-base lg:text-lg">
                I'm a passionate React Native and Next.js developer with 3 years
                of experience creating dynamic, user-friendly applications. I’m
                also a dedicated UI/UX designer, striving to blend functionality
                with aesthetic appeal. As a freelancer, I take pride in
                delivering tailored solutions that meet and exceed client
                expectations. At 24 years old, I’ve worked on diverse projects
                that reflect my commitment to quality, innovation, and user
                satisfaction. Let’s build something amazing together!
              </p>
              <br />

              <span>Address : Constantine , Algeria</span>
              <br />
              <span>Phone Number : +213 796338860</span>
              <br />
              <span>Email : imadbenoudina2@gmail.com</span>
            </div>
          )}
          <div className="p-10" data-aos="fade-left">
            <button
              onClick={() => setOnRead(!onRead)}
              className="shadow-xy1 hover:shadow-[rgba(116,246,255,0.8)] hover:shadow-xy2 shadow-[rgba(116,246,255,0.8)] px-12 py-3 rounded-full bg-gradient-to-br from-[#01E8F9] to-[#4D5EF1] w-full sm:w-fit hover:bg-slate-200 text-[#0F1012] mr-4"
            >
              {onRead ? "Read More" : "Read Less"}
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .max-md\\:flex-col-reverse {
            flex-direction: column-reverse;
          }
        }
      `}</style>
    </div>
  );
};
