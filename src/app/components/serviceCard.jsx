import React,{useEffect,useState} from "react";
import { Icons } from "./icons";
export const ServiceCard = ({title,content,iconName}) =>{
  const [isShown , setIsShown] = useState(false)
    return(
        <div className="flex max-sm:my-4 my-10 mx-3 max-sm:mx-0" data-aos="zoom-in-down" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
          <div className="pt-10 flex flex-col items-center justify-center transition-colors duration-700 hover:scale-105 hover:bg-[#0F1012] hover:border-4 hover:border-[#01EEFF] w-[300px] h-[400px] md:w-[400px] md:h-[600px] rounded-xl bg-[#01EEFF]">
            <div className="py-10 md:py-4">
            <Icons name={iconName} color={isShown ? "#01EEFF":"#0F1012"} />
            </div>
            <div className="flex-col  md:p-10 p-6 items-center justify-center">
              <h1 className={`text-center font-bold md:text-[28px]  md:py-6 text-${isShown ? "[#01EEFF]":"[#0F1012]"}`} >
              {title}
              </h1>
              <p className={`text-center font-bold text-[12px] md:text-[14px] py-6 text-${isShown ? "[#01EEFF]":"[#0F1012]"}`}>
              {content}
              </p>
            </div>
          </div>
      </div>
    )
}