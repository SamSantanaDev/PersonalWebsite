import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import pfppic from "/public/assets/pfpsam2.png";
import app from"/public/assets/app.png";
import mobile from"/public/assets/mobile.png";
//added correct pfp pi
const Main = () => {
  return (
    <div
      id="home"
      className=" py-40 w-full h-[70vh]text-center bg-gradient-to-b  from-[#CBC2B8] via-[#D8D8D8] to-[#CBC2B8]  flex flex-col justify-center items-center"
    >
      <div className="max-w-[1240px] w-full h-full mx-auto  justify-center flex flex-col items-center sm:flex-row">
        <div className="flex  sm:w-1/2 h-800 items-center justify-center">
          <div className="">
            <h1 className="w-full  py-4  items-center justify-center text-center sm:text-left">
              Sam Santana
            </h1>
          </div>
        </div>
        <div className=" w-full sm:w-1/2 flex items-center justify-center hover:scale-105 ease-in duration-300">
          <Image src={pfppic} alt="/" width={400} height={400} />
        </div>
        <div className="h-100 rounded-xl sm:w-1/2">
          <h1 className="w-full py-4 items-center justify-center text-center sm:text-left">
            Web Developer
          </h1>
         
        </div>
      </div>
      <div className=" w-full flex flex-col items-center justify-center font-mono text-[#868079]">
 
        <div className=" flex items-center justify-evenly  w-full sm:w-[80%] ">
        <Image className=" hover:scale-105 ease-in duration-300" src={mobile} alt="/" width={400} height={400} />

          <div >
          <p>Guided by Innovation: Building the Future of Applications</p>
          <div className=" flex items-center justify-evenly my-4 w-full sm:w-[80%]">
          <div className="rounded-full shadow-lg  shadow-[#3C3C3C] p-3 cursor-pointer hover:scale-150 ease-in duration-300">
            <a
              href="https://www.linkedin.com/in/samuel-santana-08209122b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn color="black" />
            </a>
          </div>
          <div className="rounded-full shadow-lg shadow-[#3C3C3C] p-3 cursor-pointer hover:scale-150 ease-in duration-300">
            <a  href="https://github.com/SamSantanaDev"
              target="_blank"
              rel="noopener noreferrer" >
                  <FaGithub color="black" />
              </a>
            
          </div>
          <div className="rounded-full shadow-lg shadow-[#3C3C3C] p-3 cursor-pointer hover:scale-150 ease-in duration-300">
            <a href="https://www.youtube.com/watch?v=wcgHYngrexM"
              target="_blank"
              rel="noopener noreferrer">
 <AiOutlineMail color="black" />
              </a>
           
          </div>
          <div className="rounded-full shadow-lg shadow-[#3C3C3C] p-3 cursor-pointer hover:scale-150 ease-in duration-300">
            <BsFillPersonLinesFill color="black" />
            </div>

          </div>
          </div>
          <Image className="hover:scale-105 ease-in duration-300"  src={app} alt="/" width={400} height={400} />
        </div>
       
      </div>
    </div>
  );
};

export default Main;
