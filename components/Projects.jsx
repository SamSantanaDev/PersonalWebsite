import React from "react";
import Image from "next/image";
import hungryhands_1 from "/public/assets/projects/hungryhands_1.png";
import restaurant_1 from "/public/assets/projects/restaurant_1.png";
//import Link from "next/link";
import ProjectItem from "@/components/ProjectItem";


//w-full outline-dashed md:h-screen p-10 flex items-center justify-center py-1 bg-gradient-to-b from-[#99AEAD] to-[#D8D8D8] lg:py-20
//w-full mx-auto px-20 py-2 bg-[#D8D8D8] outline-dashed
const Projects = () => {
  return (
    <div id="projects" className="w-full mx-auto px-4 md:px-20 py-2 bg-gradient-to-b from-black to-[#2F575D] lg:py-20">
      <div className="flex flex-col items-center">
      <p className="text-xl tracking-widest font-mono text-[#868079]">Projects</p>
     
      </div>
      
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ProjectItem
          title="Hungry Hands Mobile Ordering"
          backgroundImg={hungryhands_1}
          projectTech="Flutter | Firebase"
          projectUrl="/foodapp"
        />
        <ProjectItem
          title="Hungry Hands Restaurant Dashboard"
          backgroundImg={restaurant_1}
          projectTech="Flutter | Firebase"
          projectUrl="/"
        />
        {/* Add more ProjectItem components as needed */}
        <ProjectItem
          title="Pinterest Clone"
          backgroundImg={restaurant_1}
          projectTech="Flutter | Firebase"
          projectUrl="/"
        />
        <ProjectItem
          title="Sphere VR  Product Development"
          backgroundImg={restaurant_1}
          projectTech="Flutter | Firebase"
          projectUrl="/"
        />
      </div>
      
    </div>
  );
};

export default Projects;
