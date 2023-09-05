"use client";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import pfppic from "/public/assets/pfpsam2.png";
// import {
//   Container,
//   FormControl,
//   Formlabel,
//   Heading,
//   Input,
// } from "@chakra-ui/react";

// const initvalues = { name: "", email: "", subject: "", message: "" };
// const initState = { values: initvalues };

function Contact() {
  // const [state, setState] = useState(initState);
  // const { values } = state;

  // const handleChange = ({ target }) =>
  //   setState((prev) => ({
  //     ...prev,
  //     values: {
  //       ...prev.values,
  //       [target.name]: target.value,
  //     },
  //   }));

  return (
    <div
      id="contact"
      className="pb-20 items-center justify-center bg-gradient-to-b from-[#D8D8D8] to-[#CBC2B8] w-full lg: h-screen "
    >
      <div className=" flex flex-col max-w-[1240px] items-center justify-center m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest font-mono  text-[#868079]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap=8">
          {/* LEFT */}
          <div className=" col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-[#3C3C3C] rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div className="hover:scale-105 ease-in duration-300">
                <Image src={pfppic} alt="/" width={400} height={400} />
              </div>
              <div>
                <h2 className="py-2">Sam Santana</h2>
                <p>Web Developer</p>
                <p className="py-4">
                  I am availible for freelance or Full-time positions. Contact
                  me and let's talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me!</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-[#3C3C3C] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a
                      href="https://www.linkedin.com/in/samuel-santana-08209122b/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-[#3C3C3C] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a
                      href="https://github.com/SamSantanaDev"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-[#3C3C3C] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a href="">
                      <AiOutlineMail />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="flex col-span-3 w-full justify-center items-center h-auto shadow-xl shadow-[#3C3C3C] rounded-xl lg:p-4">
            <div className="flex flex-col p-4 justify-center items-center ">
              <p className="justify-center items-center ">Email me at sam@samsantana.dev for an inquires</p>
              <div>  <p className="justify-center items-center ">direct contact form feature in progress</p></div>
              {/* <FormControl isRequired>
                <div className="flex flex-col py-2">
                  <div className="flex flex-col">
                    <Formlabel className="font-mono text-sm py-2">Name</Formlabel>
                    <Input
                      className="border-2 rounded-lg p-3 flex border-[#868079]"
                      type="text"
                      value={values.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="font-mono text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-[#868079]"
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="font-mono text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-[#868079]"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="font-mono text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-[#868079] "
                    rows="10"
                  ></textarea>
                </div>
                <button className=" w-full font-mono p-4 text-black mt-4">
                  Send Message
                </button>
              </FormControl> */}
            </div>
          </div>
        </div>
        <div className=" justify-center items-center flex flex-col py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg  shadow-[#3C3C3C] p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#3c3c3c]" size={30} />
            </div>
          </Link>
          <div className="py-10">
            <p>samsantana.dev</p>
            <p>Work In Progress</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
