import React from "react";
import Link from "next/link";
import Image from "next/image";
import aboutpic1 from "/public/assets/sdps1.png";
import aboutpic2 from "/public/assets/sdps2.jpg";
import msg1 from "/public/assets/msg1.jpg";
import msg2 from "/public/assets/msg2.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="w-full  md:h-screen p-5 flex items-center justify-center py-1 bg-black lg:py-5"
    >
      {/* MAIN CONTAINER */}
      <div className=" outline-double max-w-[1340px] flex flex-col md:flex-row items-start justify-center m-auto md:grid grid-cols-3 gap-8">
        {/* TEXT CONTAINER */}
        <div className="outline-dashed md:col-span-2 p-2  justify-between rounded-xl">
          <p className="py-2 text-white font-mono">
            Hello, and welcome to my portfolio website! My name is Sam Santana,
            a recent Computer Science graduate from CSUN and a burgeoning
            professional in the fields of Software Quality Assurance and web and
            mobile development.
          </p>
          <p className="py-2 text-white font-mono">
            Since completing my degree, I have embarked on an exciting career
            path with Sphere Entertainment Co. & Madison Square Garden
            Entertainment Corp., where I serve as a Quality Assurance Engineer.
            In this role, I am responsible for managing and executing the Agile
            Software Testing Life Cycle across multiple platforms including Web,
            VR, and NativeOS apps. My work ensures that all products not only
            meet but exceed the rigorous standards expected in today’s
            competitive tech landscape.
          </p>
          <p className="py-2 text-white font-mono">
            My technical foundation is deeply rooted in web and mobile
            development, with extensive experience in crafting user-centric
            interfaces using HTML, CSS, JavaScript, and various frameworks. This
            blend of development and rigorous QA testing allows me to ensure
            that end products are not only functional but also intuitive and
            engaging.
          </p>
          <p className="py-2 text-white font-mono">
            II am driven by a passion for technology and a commitment to
            excellence. My approach involves continuous learning and applying
            innovative solutions to complex technical challenges. I believe that
            the most impactful software products emerge from a collaborative
            process, leveraging diverse skills and perspectives to achieve
            superior results.
          </p>

          <p className="py-2 text-white font-mono">
            Please feel free to explore my projects and learn about my
            experiences. If you're interested in discussing potential
            collaborations or have exciting projects in mind, don't hesitate to
            reach out. Let’s work together to create exceptional digital
            experiences that push technological boundaries and delight users!
          </p>
          <p className="py-2 text-white"></p>
          <Link href="/#projects">
            <p className="py-2 text-[#D8D8D8]  font-mono cursor-pointer">
              Check out some of my lastest projescts
            </p>
          </Link>
        </div>
        {/* PHOTO CONTAINER */}
        <div className=" outline-dotted w-full h-auto m-auto flex flex-col items-center justify-center p-4  ">
          {/* <div className="py-3 hover:scale-105 ease-in duration-300">
            <Image
              className="rounded-xl"
              src={aboutpic1}
              alt=""
              width="600"
              height="600"
            />
          </div> */}
          <div className="py-3 hover:scale-105 ease-in duration-300">
            <Image
              className="rounded-xl"
              src={aboutpic2}
              alt=""
              width="600"
              height="600"
            />
          </div>
          <div className="py-3 hover:scale-105 ease-in duration-300">
            <Image
              className="rounded-xl"
              src={msg1}
              alt=""
              width="600"
              height="600"
            />
          </div>
          <div className="py-3 hover:scale-105 ease-in duration-300">
            <Image
              className="rounded-xl"
              src={msg2}
              alt=""
              width="600"
              height="600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
