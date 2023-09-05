"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineClose,
  AiOutlineMacCommand,
  AiOutlineMail,
  AiOutlineMenu,
} from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import logo from "/public/logo_black.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('transparent'); // Start with transparent background
  const [linkColor, setLinkColor] = useState('#black');
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
        setNavBg('#CBC2B8'); // Change background color when scrolled down
      } else {
        setShadow(false);
        setNavBg('transparent'); // Reset background color when at the top
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };


  return (
    <div
      style={{ backgroundColor: navBg,  transition: 'background-color 0.7s ease',}}
      className={shadow ? 'fixed w-full h-50 shadow-xl z-[100]' : 'fixed w-full h-50 z-[100]'}
    >
      <div className="flex justify-between items-center w-full h-full px-10 2xl:px-16">
        <Link href="/#home">
          <Image
            src={logo}
            alt="/"
            width="100"
            height="50"
          />
        </Link>

        <div className="">
          <ul style={{ color: "#D8D8D8" }} className="hidden md:flex">
            <Link href="/#home">
              <li className="ml-10 text-sm uppercase hover:border-b  font-mono text-black">HOME</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b font-mono text-black ">ABOUT</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b font-mono text-black">SKILLS</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b font-mono text-black">
                PROJECTS
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b font-mono text-black">
                CONTACT
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} color='#AEA397' />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
         {/* Side menu for mobile */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#CBC2B8] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/../public/logo_black.png"
                alt="/"
                width="87"
                height="35"
              />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-[#3C3C3C] p-3 cursor-pointer"
              >
                <AiOutlineClose color="black"/>
              </div>
            </div>
            <div className=" border-b border-[#AEA397] my-4">
              <p className="w-[85%] md:w-[95%] py-4 font-mono text-black" >
                Lets build something awesome!
              </p>
            </div>
          </div>
         
          <div className="py-4 flex-col ">
            <ul>
              <Link href="/#home">
                <li onClick={() => setNav(false)} className="py-4 text-sm font-mono  text-black">
                  HOME
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm font-mono text-black">
                  ABOUT
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm font-mono text-black">
                  SKILLS
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm font-mono text-black">
                  PROJECTS
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm font-mono text-black">
                  CONTACT
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="upperscase tracking-widest font-mono text-black">
                LET'S CONNECT
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-[#3C3C3C] p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn color="black"/>
                </div>
                <div className="rounded-full shadow-lg shadow-[#3C3C3C] p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub color="black" />
                </div>
                <div className="rounded-full shadow-lg shadow-[#3C3C3C] p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail color="black"/>
                </div>
                <div className="rounded-full shadow-lg shadow-[#3C3C3C] p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill color="black"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
