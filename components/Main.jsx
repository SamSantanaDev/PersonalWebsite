import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import pfppic from "/public/assets/pfpsam2.png";

const Main = () => {
  return (
    <div
      id="home"
      className=" py-40 w-full h-[70vh]text-center bg-gradient-to-b  from-[#CBC2B8] via-[#D8D8D8] to-[#CBC2B8]  flex flex-col justify-center items-center"
    >
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex flex-col items-center sm:flex-row">
        <div className="flex  sm:w-1/2 h-800 items-center justify-center">
          <div className="">
            <h1 className="w-full  py-4 text-black items-center justify-center font-mono text-center sm:text-left">
              Sam Santana
            </h1>
          </div>
        </div>
        <div className=" w-full sm:w-1/2 flex items-center justify-center hover:scale-105 ease-in duration-300">
          <Image
            src={pfppic}
            alt="/"
            width={400}
            height={400}
          />
        </div>
        <div className="h-100 rounded-xl sm:w-1/2">
          <h1 className="w-full py-4 text-black items-center justify-center font-mono text-center sm:text-left">
            Web & Mobile Developer
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center font-mono text-[#868079]">
  <p>Guided by Innovation: Building the Future of Applications</p>
  <div className="flex items-center justify-evenly my-4 w-full sm:w-[80%]">
    <div className="rounded-full shadow-lg  shadow-[#3C3C3C] p-3 cursor-pointer hover:scale-105 ease-in duration-300">
      <FaLinkedinIn color="black" />
    </div>
    <div className="rounded-full shadow-lg shadow-[#3C3C3C] p-3 cursor-pointer hover:scale-105 ease-in duration-300">
      <FaGithub color="black" />
    </div>
    <div className="rounded-full shadow-lg shadow-[#3C3C3C] p-3 cursor-pointer hover:scale-105 ease-in duration-300">
      <AiOutlineMail color="black" />
    </div>
    <div className="rounded-full shadow-lg shadow-[#3C3C3C] p-3 cursor-pointer hover:scale-105 ease-in duration-300">
      <BsFillPersonLinesFill color="black" />
    </div>
  </div>
</div>

    </div>
  );
};

export default Main;
