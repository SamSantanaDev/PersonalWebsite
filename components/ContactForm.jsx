"use client";

import React from 'react'
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
    const [submit, handleSubmit] = useForm("xyyrvlvr");
    if (submit.succeeded) {
      return <p className='text-white font-semibold'>Message Sent</p>;
    }



  return (
<div className="items-center justify-center p-4 w-full lg:grid-cols-5 gap-8">
  {/* CONTACT FORM ELEMENTS */}
  <form
    onSubmit={handleSubmit}
    action="https://formspree.io/f/xyyrvlvr"
    method="POST"
    className="justify-between p-10 items-center w-full flex flex-col"
  >
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col w-full mb-4">
        <label htmlFor="full-name" className="text-[#2F575D] text-xl text-left w-full mb-2 ">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          id="full-name"
          placeholder="First and Last Name"
          required
          className="text-white w-full bg-transparent p-4 border-[#2F575D] border-solid border-2 rounded-xl"
        />
      </div>

      <div className="flex flex-col w-full mb-4">
        <label htmlFor="email" className="text-[#2F575D] text-xl text-left w-full mb-2 mt-10">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder="abc@email.com"
          className="text-white w-full bg-transparent p-4  border-[#2F575D]   border-solid border-2 rounded-xl"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={submit.errors}
        />
      </div>

      <div className="flex flex-col w-full mb-4">
        <label htmlFor="message" className="text-[#2F575D] text-xl text-left w-full mb-2 mt-10">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full text-white bg-transparent p-4 border-[#2F575D] border-solid border-2 rounded-xl"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={submit.errors}
        />
      </div>
    </div>

    <button
      type="submit"
      disabled={submit.submitting}
      className="mt-20 "
    >
      Submit
    </button>
  </form>
</div>
  )
}

export default ContactForm