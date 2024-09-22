import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import pfppic from "/public/assets/pfp2024.png";
import pfppic2 from "/public/assets/subject.png";


const Main = () => {
  return (
    <div
      id="home"
      className=" py-40  w-full h-[70vh]text-center bg-gradient-to-b  from-[#2F575D] via-[#000000] to-[#000000]  flex flex-col justify-center items-center"
    >
      {/* Main Container: Photo and Info*/}
      <div className="mx-autojustify-center flex flex-col items-center sm:flex-row px-10">
        {/* Main Photo */}
        <div className=" w-full sm:w-1/2 flex items-center justify-center hover:scale-105 ease-in duration-300 ">
          <Image
            src={pfppic2}
            alt="/"
            width={400}
            height={400}
            className="rounded-full shadow-xl  shadow-[#2F575D]"
          />
        </div>
        {/* Info */}
        <div className="flex flex-col w-auto mx-10 sm:mx-10 sm:py-10">
          {/* Name and title */}
          <div className="">
            <h1 className="w-full py-4 text-center sm:text-left text-white">
              Sam Santana
            </h1>
          </div>

          <div className="pt-5 w-full">
            <h2 className="w-full py-4 text-center sm:text-left text-white">
              Product Manager
            </h2>
          </div>

          <div className="py-1 w-full">
            <h2 className="w-full py-1 text-center sm:text-left text-white">
              Software Engineer
            </h2>
          </div>

           {/* Social Links*/}
           <div className="flex flex-row items-center justify-evenly my-4 lg:flex-row x">

          <div className="rounded-xl shadow-lg  shadow-[#2F575D] p-4 cursor-pointer hover:scale-150 ease-in duration-300">
            <a
              href="https://www.linkedin.com/in/samuel-santana-08209122b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn color="teal" size={"30px"}  />
            </a>
          </div>
          <div className="rounded-xl shadow-lg shadow-[#2F575D] p-4 cursor-pointer hover:scale-150 ease-in duration-300">
            <a
              href="https://github.com/SamSantanaDev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub color="teal" size={"30px"} />
            </a>
          </div>
          <div className="rounded-xl shadow-lg shadow-[#2F575D] p-4 cursor-pointer hover:scale-150 ease-in duration-300">
            <a
              href="/#contact"
              
              rel="noopener noreferrer"
            >
              <AiOutlineMail color="teal" size={"30px"}  />
            </a>
          </div>
          
        </div>
      
        </div>
      </div>
      {/* ------------------------------------------- */}
     
    </div>
  );
};

export default Main;
