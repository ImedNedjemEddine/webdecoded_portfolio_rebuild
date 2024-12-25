import { useState } from "react";
import { Icons } from "./icons";
import  {SkillsCards}  from "./skillsCards";
export function Skills() {
  const [activeTab, setActiveTab] = useState("fullstack");

  return (
    <div
      id="skills"
      className="flex flex-col items-center mt-8 justify-center md:min-h-svh"
    >
      <h2 className="font-bold  text-white text-[38px] md:text-[60px] py-2">
        My <span className="font-bold text-[#01EEFF]">Skills</span>
      </h2>
      <div className="flex max-md:flex-col">
        <SkillsCards />
      </div>
    </div>
  );
}
{/* <Icons name="html" size={1.25} />
<Icons name="css" size={1.25} />
<Icons name="nodejs" size={1.25} />
<Icons name="js" size={1.20} />
<Icons name="react" size={1.25} />
<Icons name="nextjs" size={1.25} />
<Icons name="wp" size={1.25} />
<Icons name="firebase" size={1.25} />
<Icons name="db" size={1.25} /> */}