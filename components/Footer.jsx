import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full h-[150px] outline-double items-center justify-center flex flex-col bg-black">
      <div className="flex flex-row items-center justify-center space-x-20 my-4 lg:flex-row x">
        <div className="rounded-xl shadow-lg  shadow-[#2F575D] p-4 cursor-pointer hover:scale-150 ease-in duration-300">
          <a
            href="https://www.linkedin.com/in/samuel-santana-08209122b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn color="teal" size={"30px"} />
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
          <a href="/#contact" rel="noopener noreferrer">
            <AiOutlineMail color="teal" size={"30px"} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
