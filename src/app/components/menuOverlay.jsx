import React from "react";
import { NavLinks } from "./navLinks";
export function MenuOverlay ({links,hideMenu}) {
    return(
        <div>
            <ul className="flex flex-col py-4 items-center">
            <li>
                <button onClick={hideMenu}>
                <NavLinks title="About" path={"#about"}/>
                </button>
              
            </li>
            <li>
            <button onClick={hideMenu}>
            <NavLinks title="Services" path={"#services"}/>
            </button>
            </li>
            <li>
            <button onClick={hideMenu}>
            <NavLinks title="Skills" path={"#skills"}/>
            </button>
            </li>
            <li>
            <button onClick={hideMenu}>
            <NavLinks title="Projects" path={"#projects"}/>
            </button>
            </li>
            <li>
            <button onClick={hideMenu}>
            <NavLinks title="contact" path={"#contact"}/>
            </button>
            </li>
            </ul>
        </div>
    )
}