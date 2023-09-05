import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {HiOutlineChevronDoubleUp} from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

function Contact() {
  return (
    <div id="contact" className=" items-center justify-center bg-gradient-to-b from-[#D8D8D8] to-[#CBC2B8] w-full lg: h-screen outline-dashed">
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
              <Image
            src="/../public/assets/pfpsam2.png"
            alt="/"
            width={400}
            height={400}
          />
              </div>
              <div>
                <h2 className="py-2">Sam Santana</h2>
                <p>Web & Mobile Developer</p>
                <p className="py-4">
                  I am availible for freelance or Full-time positions. Contact
                  me and let's talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me!</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-[#3C3C3C] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-[#3C3C3C] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-[#3C3C3C] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-[#3C3C3C] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-[#3C3C3C] rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="font-mono text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-[#868079]"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-mono text-sm py-2">Phone Number</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-[#868079]"
                      type="text"
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
                <textarea className="border-2 rounded-lg p-3 border-[#868079] " rows='10'></textarea>
                </div>
                <button className=" w-full font-mono p-4 text-black mt-4">Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
        <Link href="/">
            <div className="rounded-full shadow-lg  shadow-[#3C3C3C] p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp className="text-[#3c3c3c]" size={30}/>
            </div>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
