"use client";
import React, { useState } from "react";

;
import ContactForm from "./ContactForm";


function Contact() {
  

  return (
    <div
      id="contact"
      className="pb-20 items-center justify-center bg-gradient-to-b from-black via-black to-[#99AEAD] w-full lg: h-screen "
    >
      <div className=" flex flex-col max-w-[1240px] items-center justify-center m-auto px-2 py-16 w-full">
      <h1 className="text-white text-3xl mt-20 sm:text-4xl md:text-5xl font-bold">
            Contact Me
          </h1>
        <h2 className="py-4">Get In Touch</h2>

        <ContactForm />
        {/* <div className=" justify-center items-center flex flex-col py-12 outline dashed">
          <div className="">
            <p>samsantana.dev</p>
            <p>Work In Progress</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Contact;
