import React from "react";
import Image from "next/image";
import hungryhands_1 from "/public/assets/projects/hungryhands_1.png";
import restaurant_1 from "/public/assets/projects/restaurant_1.png";
import pinterest1 from "/public/assets/projects/pinterest1.png";
import spherelogo from "/public/assets/projects/spherelogo.jpeg";
import bibliotecha1 from "/public/assets/projects/bibliotecha1.png";
//import Link from "next/link";
import ProjectItem from "@/components/ProjectItem";


//w-full outline-dashed md:h-screen p-10 flex items-center justify-center py-1 bg-gradient-to-b from-[#99AEAD] to-[#D8D8D8] lg:py-20
//w-full mx-auto px-20 py-2 bg-[#D8D8D8] outline-dashed
const Projects = () => {
  return (
    <div id="projects" className="w-full mx-auto px-4 md:px-20 py-2 bg-black lg:py-20">
      <div className="flex flex-col items-center">
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
            Projects
          </h1>
     
      </div>
      
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <ProjectItem
          title="Sphere VR  Product Development"
          backgroundImg={spherelogo}
          projectTech=""
          projectUrl="/SphereProject"
        />

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
          projectUrl="/restaurantapp"
        />
        {/* Add more ProjectItem components as needed */}
        <ProjectItem
          title="Pinterest Clone"
          backgroundImg={pinterest1}
          projectTech="Next.JS | Tailwind CSS | Firebase"
          projectUrl="/"
        />
      
        <ProjectItem
          title="Library Mangment Software"
          backgroundImg={bibliotecha1}
          projectTech="Java | NetBeans"
          projectUrl="/SphereProject"
        />
        
      </div>
      
    </div>
  );
};

export default Projects;
