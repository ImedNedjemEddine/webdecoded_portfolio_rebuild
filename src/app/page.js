"use client"
import { HeroSection } from "./components/heroSection";
import React,{useEffect} from "react";
import { NavBar } from "./components/navBar";
import { AboutSection } from "./components/aboutSection";
import AOS from "aos";
import 'aos/dist/aos.css';
import { Services } from "./components/services";
import { Skills } from "./components/skills";
import { Projects} from "./components/projects";
import {Contact} from "./components/contact";
export default function Home() {
  useEffect(()=>{
    AOS.init({
        duration: 800,
        once: false,
    })
},[])
  return (
    <div className="flex min-h-screen flex-col bg-[#212428] ">
      <NavBar/>
      <div className="container max-md:mt-24 mx-auto px-12 py-4 ">
        <HeroSection/>
        <AboutSection />
        {true && <Services />}
        {true && <Skills/>}
        {true && <Projects/>}
        {true && <Contact/>}
        </div>
      
    </div>
  );
}
