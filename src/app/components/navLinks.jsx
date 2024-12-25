"use client"
import React from "react";
import Link from "next/link";
export const NavLinks = ({title, path , hideMenu}) => {
    return (
      <button onClick={hideMenu}>
      <div className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#01E8F9] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
        <Link
          href={path}
          className="block hover:text-[#01E8F9]  py-2   text-[#fafafa] sm:text-xl rounded md:pl-0"
        >
          {title}
        </Link>
      </div>
      </button>
    );
  };