import React from "react";
import Image from "next/image";


const Skills = () => {
  const skills = [
    {
      title: "Quality Assurance",
      description:
        "Experienced in leading cross-functional testing efforts, developing extensive test cases, and managing the Agile Software Testing Life Cycle for Web, VR, and NativeOS apps.",
    },
    {
      title: "Front End Development",
      description:
        "Skilled in creating responsive and interactive user interfaces using modern web technologies like React, HTML5, CSS3, and JavaScript.",
    },
    {
      title: "Product Management",
      description:
        "Proficient in overseeing product development stages, defining product vision, and aligning project objectives with business goals.",
    },
    {
      title: "Your Skill 4",
      description:
        "Brief description of your fourth skill or area of expertise.",
    },
  ];

  return (
    <div
      id="skills"
      className="bg-gradient-to-b from-black via-[#2F575D] to-black w-full min-h-screen p-4 flex flex-col items-center justify-center"
    >
      <div className="outline-double  items-center justify-center w-full px-4">
        <div className="text-center mb-10 outline-dotted w-full">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
            Skills
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full place-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border-2 border-white rounded-xl px-6 py-3 mb-6 text-center flex flex-col items-center shadow-lg w-full md:max-w-md"
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
