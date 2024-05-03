import React from "react";
import Image from "next/image";


const Skills = () => {
  const skills = [
    {
      title: "Quality Assurance",
      description:
        "Expert in leading cross-functional testing efforts, developing comprehensive test cases, and overseeing the Agile Software Testing Life Cycle for diverse platforms including Web, VR, and NativeOS applications. Known for meticulous attention to detail and a commitment to delivering flawless software solutions.",
    },
    {
      title: "Front End Development",
      description:
        "Highly skilled in crafting responsive and dynamic user interfaces utilizing cutting-edge web technologies such as React, HTML5, CSS3, and JavaScript. Experienced in optimizing web aesthetics and functionality, ensuring superb user experience across multiple devices.",
    },
    {
      title: "Product Management",
      description:
        "Proficient in steering product development from concept through execution, adept at defining product strategies, setting vision, and aligning project goals with broader business objectives. Effective in leading teams and managing projects to successful launches.",
    },
    {
      title: "Mobile Development",
      description:
        "Experienced in developing high-performance mobile applications for iOS and Android platforms. Skilled in leveraging native and cross-platform technologies to create apps that offer engaging user experiences and integrate seamlessly with a range of services and systems.",
    },
  ];


  return (
    <div
      id="skills"
      className="bg-gradient-to-b from-black to-[#2F575D] w-full min-h-screen p-4 flex flex-col items-center justify-center"
    >
      <div className=" items-center justify-center w-full px-4">
        <div className="text-center mb-10  w-full">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
            Skills
          </h1>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-3 w-full place-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg border-2 border-white rounded-xl p-10 mb-6 text-center flex flex-col items-center shadow-lg w-full md:max-w-md"
          >
            <h2 className="text-white text-xl sm:text-2xl font-bold">
              {skill.title}
            </h2>
            <p className="text-white mt-2 text-base sm:text-lg">
              {skill.description}
            </p>
          </div>
        ))}

        </div>
       
      </div>
    </div>
  );
};

export default Skills;
