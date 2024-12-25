import { useRef, useEffect, useState } from "react";
import { ProjectCard } from "./projectCard";

export function Projects() {
  const scrollContainerRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  // Calculate card width dynamically
  useEffect(() => {
    if (scrollContainerRef.current) {
      const card = scrollContainerRef.current.querySelector(".card");
      if (card) {
        setCardWidth(card.offsetWidth + 16); // 16px for the gap (adjust as per your design)
      }
    }
  }, []);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -cardWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <div
      id="projects"
      className="flex flex-col items-center mt-8 justify-center md:min-h-svh"
    >
      {/* Title */}
      <h2 className="font-bold text-white text-[38px] md:text-[60px] py-2">
        My <span className="font-bold text-[#01EEFF]">Projects</span>
      </h2>

      {/* Scrollable Projects */}
      <div className="relative w-full max-w-[1500px]">
        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-4 scrollbar-hide"
          style={{ scrollBehavior: "smooth" }}
        >
          <div className="card">
            <ProjectCard />
          </div>
          <div className="card">
            <ProjectCard />
          </div>
          <div className="card">
            <ProjectCard />
          </div>
          <div className="card">
            <ProjectCard />
          </div>
          <div className="card">
            <ProjectCard />
          </div>
          <div className="card">
            <ProjectCard />
          </div>
        </div>

        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-[-20px] max-sm:hidden top-1/2 transform -translate-y-1/2 h-[60px] w-[60px] bg-gray-800 text-white p-4 rounded-full shadow-md hover:bg-gray-700"
        >
          ←
        </button>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="absolute right-[-30px] max-sm:hidden top-1/2 transform -translate-y-1/2 h-[60px] w-[60px] bg-gray-800 text-white p-4 rounded-full shadow-md hover:bg-gray-700"
        >
          →
        </button>
      </div>
    </div>
  );
}
