import React,{useEffect,useState} from "react";
import { Icons } from "./icons";
import Image from "next/image";
import Link from "next/link";
export const ProjectCard = ({title="Mobile app landing design & app maintain",iconName}) =>{
  const [isShown , setIsShown] = useState(false)
    return(
        <div className="flex max-sm:my-4 my-10 mx-3 max-sm:mx-0" data-aos="zoom-in-down" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
          <div className=" flex-col items-center justify-center transition-colors duration-700 max-sm:shadow-xy2 shadow-[rgba(153,153,153,0.1)] bg-[#1e1f25] hover:scale-105 hover:bg-[#1b1d22]  w-[300px] h-[360px] md:w-[450px] md:h-[520px] rounded-xl ">
            <div className="flex-col items-center justify-center">
            <Image className="rounded-t-md" src={"/car.jpeg"} alt="carapp" width={600} height={200} />
            <div className="p-2 w-full">
                
            </div>
                <Link href={"/"}>
              <h1 className={`text-left p-3 font-bold md:text-[24px]  text-${isShown ? "[#01EEFF]":"white"}`} >
              {title}
              </h1>
              </Link>
              <div className="flex max-ms:flex-col px-4 space-x-2">

              <Icons size={0.2} name={"nodejs"} color={"#01EEFF"} />
              <Icons size={0.2} name={"react"} color={"#01EEFF"} />
            </div>

            </div>
          </div>
      </div>
    )
}