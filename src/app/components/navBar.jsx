"use client";
import React, { useState, useEffect } from "react";

import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { NavLinks } from "./navLinks";
import { MenuOverlay } from "./menuOverlay";
export function NavBar() {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const hide = () => {
    console.log("true");
    setNavBarOpen(false);
  };
  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-[#212428] backdrop-blur-sm	 bg-opacity-90">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-8">
        <Link
          href="/"
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <span className="text-[#01E8F9]">N</span>edjem
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navBarOpen ? (
            <button
              onClick={() => setNavBarOpen(true)}
              className="flex items-center px-3 py-2 rounded border border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavBarOpen(false)}
              className="flex items-center px-3 py-2 rounded border border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="menu hidden md:block md:w-auto">
          <ul className="flex md:flex-row p-4 md:p-0 md:space-x-8 mt-0">
            <li>
              <NavLinks title="about" path={"#about"} hideMenu={hide} />
            </li>
            <li>
              <NavLinks title="services" path={"#services"} hideMenu={hide} />
            </li>
            <li>
              <NavLinks title="skills" path={"#skills"} hideMenu={hide} />
            </li>
            <li>
              <NavLinks title="Projects" path={"#projects"} hideMenu={hide} />
            </li>
          </ul>
        </div>
      </div>
      <div className="mobile-menu block md:hidden">
        {navBarOpen && <MenuOverlay hideMenu={hide} />}
      </div>
    </div>
  );
}
