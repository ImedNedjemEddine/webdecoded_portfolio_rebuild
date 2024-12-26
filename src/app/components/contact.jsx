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


      <div className="flex flex-col justify-center items-center ">
        <div className="flex max-sm:flex-col w-full ">
            <input placeholder="Full Name" className="m-1 pl-3 h-14 w-[350px] max-sm:w-full bg-[#3C4045] rounded-xl" type="text" />
            <input placeholder="Email Address" className="m-1 pl-3 h-14 w-[350px] max-sm:w-full bg-[#3C4045] rounded-xl" type="text" />
        </div>
        <div className="flex max-sm:flex-col ">
            <input placeholder="Mobile phone" className="m-1 pl-3 h-14 w-[350px] max-sm:w-full bg-[#3C4045] rounded-xl" type="text" />
            <input placeholder="Email Subject" className="m-1 pl-3 h-14 w-[350px] max-sm:w-full bg-[#3C4045] rounded-xl" type="text" />
        </div> 
        <div className="w-full">
        <textarea placeholder="your message ..." className=" p-4 pl-3 max-sm:h-[200px] max-sm:w-full h-[400px] w-[700px] bg-[#3C4045] rounded-xl"/>
        </div>
        <div className="justify-center items-center">
        <button
              className="shadow-xy1 mt-6 hover:shadow-[rgba(116,246,255,0.8)] hover:shadow-xy1 shadow-[rgba(116,246,255,0.8)] px-12 py-3 rounded-full bg-gradient-to-br from-[#01E8F9] to-[#4D5EF1] w-full sm:w-fit hover:bg-slate-200 text-[#0F1012] mr-4"
            >
              Submit 
            </button>
        </div>
      </div>
    </div>
  );
}
