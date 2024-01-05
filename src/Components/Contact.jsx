import React from "react";
import { Msg } from "./Projects";
import linkedin from "../Components/images/LinkedContact.png";
import email from "../Components/images/email.png";
import git from "../Components/images/github.png";
import Lottie from "lottie-react";
import contact from "../Videos/contact.json";

const Contact = () => {
  return (
    <div
      id="contact"
      class="bg-gradient-to-b from-blue-200 to-white  py-32 flex flex-col justify-center items-center"
    >
      <h1 className="text-black">Get In Touch</h1>
      <h1 className="font-semibold py-2 text-black">Contact Me</h1>
      <Msg message="Gateway to my DMs 🫠, just kidding; we are very professional here 🤫." />

      <Lottie animationData={contact} className="h-80 w-80" />

      <div className="flex  flex-col items-center justify-center ">
        <div className="flex my-2 justify-between items-center mx-auto h-20 w-72 rounded-full bg-white shadow-2xl">
          <img
            className="h-20 sm:h-20 md:h-20 lg:h-20"
            alt="LinkedIn"
            src={linkedin}
          ></img>
          <a
            className="link link-accent"
            href="https://www.linkedin.com/in/sfud/"
          >
            <h1 className="pr-10 text-2xl">LinkedIn</h1>
          </a>
        </div>

        <div className="flex my-2 justify-between items-center mx-auto h-20 w-72 rounded-full bg-white shadow-2xl">
          <a
            className="link link-success"
            href="https://www.linkedin.com/in/sfud/"
          >
            <h1 className="pl-10 text-2xl">Email</h1>
          </a>
          <img
            className="h-20 sm:h-20 md:h-20 lg:h-20"
            alt="LinkedIn"
            src={email}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Contact;
