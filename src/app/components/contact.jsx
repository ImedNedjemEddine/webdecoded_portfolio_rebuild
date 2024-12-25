import { useRef, useEffect, useState } from "react";


export function Contact() {
  return (
    <div
      id="contact"
      className="flex flex-col items-center mt-8 justify-center md:min-h-svh"
    >

      <h2 className="font-bold text-white text-[38px] md:text-[60px] py-2">
        Contact <span className="font-bold text-[#01EEFF]">Me</span>
      </h2>


      <div className="justify-center items-center w-[715px]">
        <div className="flex max-ms:flex-col pr-4 pl-4">
            <input className="m-1 h-14 w-[350px] bg-[#2C3333] rounded-xl" type="text" />
            <input className="m-1 h-14 w-[350px] bg-[#2C3333] rounded-xl" type="text" />
        </div>
        <div className="flex max-ms:flex-col pr-4 pl-4">
            <input className="m-1 h-14 w-[350px] bg-[#2C3333] rounded-xl" type="text" />
            <input className="m-1 h-14 w-[350px] bg-[#2C3333] rounded-xl" type="text" />
        </div>
        <div className="p-4">
        <textarea className="h-[400px] w-full bg-[#2C3333] rounded-xl"/>
        </div>
        
        <button ><p>submit</p></button>
      </div>
    </div>
  );
}
