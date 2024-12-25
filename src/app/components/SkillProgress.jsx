import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SkillProgress = ({ skill, percentage, color }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-full bg-[rgba(1,238,255,0.2)] max-sm:min-h-[40px] max-sm:min-w-[40px] min-w-[80px] min-h-[80px]" >
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textColor: color,
            pathColor: color,
            trailColor: "#d6d6d6",
            
          })}
        />
      </div>
      {/* <p className="mt-4 text-center text-lg text-[rgb(1,238,255)] font-semibold">{skill}</p> */}
    </div>
  );
};

export default SkillProgress;
