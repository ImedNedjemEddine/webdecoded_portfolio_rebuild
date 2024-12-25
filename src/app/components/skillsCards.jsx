"use client"
import React , {useState,useEffect} from "react";
import SkillProgress from "./SkillProgress";
import {Icons} from "./icons";
export const SkillsCards =()=>{
    const skills = [
        { skill: "HTML",icon:"html", percentage: 99, color: "#01EEFF" },
        { skill: "CSS",icon:"css", percentage: 99, color: "#01EEFF" },
        { skill: "JS", icon:"js",percentage: 85, color: "#01EEFF" },
        { skill: "React  Native", icon:"react",percentage: 80, color: "#01EEFF" },
        { skill: "Next.js", icon:"nextjs",percentage: 80, color: "#01EEFF" },
        { skill: "Nodejs", icon:"nodejs",percentage: 90, color: "#01EEFF" },
        { skill: "Mysql", icon:"db",percentage: 85, color: "#01EEFF" },
        { skill: "Firebase", icon:"firebase",percentage: 65, color: "#01EEFF" },
        { skill: "Wordpress", icon:"wp",percentage: 55, color: "#01EEFF" },
        { skill: "Figma", icon:"figma",percentage: 70, color: "#01EEFF" },
      ];
    
    return(

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {skills.map((skill, index) => (
        <div data-aos="flip-down" className="min-w-[120px] min-h-[120px] items-center justify-center">
          <div className="flex relative z-0 m-10">
            <div className="">
            <Icons name={skill.icon} size={0.8} />
            </div>
            <div className="absolute h-14 w-14 max-sm:-right-8 max-sm:-bottom-[10px] -right-4 -bottom-[-40px]">
            <SkillProgress
                
                key={index}
                skill={skill.skill}
                percentage={skill.percentage}
                color={skill.color}
                size={4}
              />
            </div>
          </div>
      <p className="mt-2 text-center text-lg text-[rgb(1,238,255)] font-semibold">{skill.skill}</p>

        </div>
      ))}
    </div>

    )
}
