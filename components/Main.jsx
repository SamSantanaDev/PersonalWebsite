import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import pfppic from "/public/assets/pfp2024.png";
import pfppic2 from "/public/assets/Subject.png";
import VRimage from "/public/VRHeadset.png";



const Main = () => {
  return (
    <div
      id="home"
      className=" py-40  w-full h-[70vh]text-center bg-gradient-to-br  from-[#ffff]  via-[#bbbbbb] to-black  flex flex-col justify-center items-center"
    >
      {/* Main Container: Photo and Info*/}
      <div className="mx-autojustify-center flex flex-col items-center sm:flex-row px-10">
        {/* Main Photo */}
        <div className=" w-full sm:w-1/2 flex items-center justify-center hover:scale-105 ease-in duration-300 ">
          <Image
            src={VRimage}
            alt="/"
            width={800}
            height={800}
            className="   shadow-[#000000]"
          />
        </div>

        {/* Info */}
        <div className="  flex  flex-col w-full mx-10 sm:mx-10 sm:py-10">
          {/* Name and title */}
          <div className="items-center justify-center  ">

            <div className="">
              <h1 className="w-full py-4 text-center text-[#504F4F]">
                SAM SANTANA
              </h1>
            </div>

          <div className="py-1 w-full">
            <h2 className="w-full py-1 text-center  text-[#504F4F]">
              Virtual Reality | Immersive Tech
            </h2>
          </div>

        </div>

           {/* Social Buttons/Links*/}
        <div className="flex flex-row items-center w-full justify-evenly my-4 lg:flex-row ">

          <div className="rounded-xl shadow-lg  shadow-[#504F4F] p-4 cursor-pointer hover:scale-150 ease-in duration-300">
            <a
              href="https://www.linkedin.com/in/samuel-santana-08209122b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn color="#504F4F" size={"30px"}  />
            </a>
          </div>
          <div className="rounded-xl shadow-lg shadow-[#504F4F] p-4 cursor-pointer hover:scale-150 ease-in duration-300">
            <a
              href="https://github.com/SamSantanaDev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub color="#504F4F" size={"30px"} />
            </a>
          </div>
          <div className="rounded-xl shadow-lg shadow-[#504F4F] p-4 cursor-pointer hover:scale-150 ease-in duration-300">
            <a
              href="/#contact"
              
              rel="noopener noreferrer"
            >
              <AiOutlineMail color="#504F4F" size={"30px"}  />
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
