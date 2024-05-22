"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import pfppic from "/public/assets/pfp2024.png";

import ContactForm from "./ContactForm";


function Contact() {
  

  return (
    <div
      id="contact"
      className="pb-20 items-center justify-center bg-black w-full lg: h-screen "
    >
      <div className=" flex flex-col max-w-[1240px] items-center justify-center m-auto px-2 py-16 w-full">
      <h1 className="text-white text-3xl mt-20 sm:text-4xl md:text-5xl font-bold">
            Contact Me
          </h1>
        <h2 className="py-4">Get In Touch</h2>
        <div className="flex flex-row w-full">
        <ContactForm />


        <div className="w-full hidden sm:hidden md:flex items-center justify-center">
          <Image
            src={pfppic}
            alt="/"
            width={400}
            height={400}
            className="rounded-full shadow-lg  shadow-[#2F575D] "
          />
        </div>
        </div>

    
      </div>
    </div>
  );
}

export default Contact;
