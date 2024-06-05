import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";

// Images
import spherebanner from "public/assets/projects/spherelogo.jpeg";
import sphere1 from "/public/assets/projects/sphere1.png";
import sphere2 from "/public/assets/projects/sphere2.png";
import sphere3 from "/public/assets/projects/sphere3.png";
import sphere4 from "/public/assets/projects/sphere4.png";
import sphere5 from "/public/assets/projects/sphere5.png";

const SphereProjectPage = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#99AEAD] via-[#D8D8D8] to-[#99AEAD]">
      <Navbar />
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={spherebanner}
          alt="Sphere VR App Banner"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Sphere VR App | Product Development</h2>
         
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        {/* Text container */}
        <div className="col-span-4">
          
          <h2>Overview</h2>
          <p className="p-4">
            During my internship at Sphere Entertainment Co. & Madison Square
            Garden Entertainment Corp, I led the development of an innovative
            Virtual Reality (VR) application aimed at enhancing user
            experiences within the entertainment sector. This project involved
            creating immersive and interactive environments, leveraging
            advanced VR technologies to provide users with unique and engaging
            experiences.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <Image
              className="rounded-xl ml-4 hover:scale-105 ease-in duration-300"
              src={sphere5}
              alt="Sphere VR Environment"
              width="600"
              height="600"
            />
            <p className="p-4">
              The VR application was designed to offer users an engaging
              platform where they could explore virtual environments, interact
              with digital assets, and experience immersive storytelling. The
              app's primary objective was to enhance user engagement and provide
              a novel medium for entertainment.
            </p>
          </div>

        

          {/* Key Responsibilities */}
          <div className="my-4 items-center justify-center flex flex-col">
            <h2 className="p-4 font-bold">Key Responsibilities:</h2>
            <ul className="p-4 list-disc list-inside">
              <li>
                <b>Requirements Analysis:</b> Analyzed complex business
                requirements, translating them into comprehensive technical
                specifications and user stories ready for development. Ensured
                each story met strict acceptance criteria for successful
                implementation.
              </li>
              <li>
                <b>Wireframe Design:</b> Designed and validated prototype
                wireframes in Figma to meet both business objectives and enhance
                user experience. This directly contributed to the product
                concept development and feature definition.
              </li>
              <li>
                <b>Stakeholder Presentation:</b> Presented product concepts and
                implementation plans to corporate business leaders, effectively
                communicating the product vision, market analysis, and
                technological approach. Ensured alignment with strategic
                business goals.
              </li>
            </ul>
          </div>

          {/* Key Features */}
          <div className="my-4 items-center justify-center flex flex-col">
            <h2 className="p-4 font-bold">Key Features:</h2>
            <ul className="p-4 list-disc list-inside">
              <li>
                <b>Immersive Environments:</b> Enabled users to explore highly
                detailed and interactive virtual environments, providing a rich
                and engaging user experience.
              </li>
              <li>
                <b>Interactive Content:</b> Users could interact with various
                digital assets within the VR space, such as viewing 3D models,
                watching trailers, and accessing exclusive content.
              </li>
              <li>
                <b>User-Friendly Interface:</b> Designed an intuitive navigation
                system that facilitated seamless interaction within the virtual
                world.
              </li>
            </ul>
            <div className="flex md:flex-row md:space-x-4 sm:flex-col">
            <Image
            className="rounded-xl hover:scale-105 ease-in duration-300 my-4"
            src={sphere1}
            alt="Sphere VR App Feature"
            width="450"
            height="450"
          />
          <Image
            className="rounded-xl hover:scale-105 ease-in duration-300 my-4"
            src={sphere2}
            alt="Sphere VR App Feature"
            width="450"
            height="450"
          />
          </div>
          </div>

          {/* Outcome and Impact */}
          <div className="my-4 items-center justify-center flex flex-col">
            <h2 className="p-4">Outcome and Impact</h2>
            <p className="p-4">
              The VR application successfully created an engaging and immersive
              platform for users to explore and interact with entertainment
              content. It demonstrated the potential of VR technology in
              enhancing user experiences and provided valuable insights into VR
              development processes. The project showcased technical proficiency
              and emphasized the importance of user-centered design in creating
              impactful digital experiences. Through this project, I gained
              extensive experience in VR development, including 3D modeling,
              interactive scripting, and performance optimization. This
              internship allowed me to apply my skills in a real-world setting,
              contributing to a cutting-edge entertainment solution and
              furthering my expertise in VR technologies.
            </p>
          </div>

          <div className="flex items-center justify-center md:flex-row md:space-x-4 sm:flex-col">
            <Image
            className="rounded-xl hover:scale-105 ease-in duration-300 my-4"
            src={sphere3}
            alt="Sphere VR App Feature"
            width="450"
            height="450"
          />
          <Image
            className="rounded-xl hover:scale-105 ease-in duration-300 my-4"
            src={sphere4}
            alt="Sphere VR App Feature"
            width="450"
            height="450"
          />
          </div>
        </div>
      {/* Technologies Used Coloumn */}
        <div className="col-span-4 md:h-[200px] md:col-span-1 shadow-lg shadow-[#3C3C3C] rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Figma
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Excel
              </p>
       
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Unity 3D
              </p>
            </div>
          </div>
        </div>


        <Link href="/#projects">
            <p className="py-2 my-5 text-[#2F575D]  font-mono cursor-pointer ">
              <span className="mt-20 text-[#2F575D] bg-black p-4 rounded-xl shadow-xl shadow-[#2F575D] border-solid border-2 border-b-[#2F575D] border-transparent hover:bg-[#2F575D] hover:text-black hover:scale-105 ease-in duration-300">
                Back
              </span>
            </p>
          </Link>
      </div>
      <Footer/>
    </div>
  );
};

export default SphereProjectPage;
