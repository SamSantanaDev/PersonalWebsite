import React from "react";
import Link from "next/link";
import Image from "next/image";
import aboutpic1 from "/public/assets/sdps1.png";
import aboutpic2 from "/public/assets/sdps2.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="w-full outline-dashed md:h-screen p-10 flex items-center justify-center py-1 bg-gradient-to-b from-[#CBC2B8] to-[#D8D8D8] lg:py-20"
    >
      <div className="max-w-[1240px] flex flex-col md:flex-row items-center justify-center m-auto md:grid grid-cols-3 gap-8">
        <div className="md:col-span-2 p-2 justify-center rounded-xl">
          <p className="py-2 text-black font-mono">
            Hello, and welcome to my portfolio website! My name is Sam Santana
            and I am a senior Computer Science student at CSUN. I am eagerly
            anticipating my graduation in the fall of 2023. With a strong desire
            to grow and expand my skills in the technology industry, I am
            constantly seeking new challenges and opportunities to enhance my
            knowledge.
          </p>
          <p className="py-2 text-black font-mono">
            Passion is what drives my work, and I am particularly drawn to
            projects that allow me to explore my creativity, solve complex
            problems, and collaborate with others. I firmly believe that the
            best results are achieved through teamwork and leveraging diverse
            perspectives. As an individual who thrives in collaborative
            environments, I am always excited to work with like-minded
            professionals who share my passion for pushing the boundaries of
            what is possible.
          </p>
          <p className="py-2 text-black font-mono">
            My specialization and passion lie in front-end software development,
            with a solid background in web and mobile development. I find great
            joy in crafting intuitive user interfaces and creating seamless
            experiences that delight users. Through my experiences and ongoing
            learning, I have gained expertise in HTML, CSS, JavaScript, and
            various frameworks.
          </p>
          <p className="py-2 text-black font-mono">
            In addition to my technical pursuits, I have a keen interest in
            staying up-to-date with the latest advancements in technology. The
            ever-evolving nature of the industry fascinates me, and I actively
            seek opportunities to expand my knowledge and skills.
          </p>

          <p className="py-2 text-black font-mono">
            I invite you to explore my work, get to know me better, and reach
            out if you would like to collaborate or discuss exciting projects.
            Let's create something amazing together!
          </p>
          <p className="py-2 text-white"></p>
          <Link href="/#projects">
            <p className="py-2 text-[#D8D8D8]  font-mono cursor-pointer">
              Check out some of my lastest projescts
            </p>
          </Link>
        </div>

        <div className="w-full h-auto m-auto flex flex-col items-center justify-center p-4  ">
          <div className="py-3  hover:scale-105 ease-in duration-300">
            <Image
              className="rounded-xl"
              src={aboutpic1}
              alt=""
              width="600"
              height="600"
            />
          </div>
          <div className="py-3 hover:scale-105 ease-in duration-300">
            <Image
              className="rounded-xl"
              src={aboutpic2}
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
