import React from "react";
import { Msg } from "./Projects";
import linkedin from "../Components/images/LinkedContact.png";
import email from "../Components/images/email.png";
import git from "../Components/images/github.png";

const Contact = () => {
  return (
    <div
      id="contact"
      class="bg-gradient-to-b from-blue-200 to-white   h-[100vh] flex flex-col justify-center items-center"
    >
      <h1>Get In Touch</h1>
      <h1 className="font-semibold py-2">Contact Me</h1>
      <Msg message="Gateway to my DMs 🫠, just kidding; we are very professional here 🤫." />

      <div className="flex lg:flex-row flex-col items-center justify-center ">
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
          <img
            className="h-20 sm:h-20 md:h-20 lg:h-20"
            alt="LinkedIn"
            src={email}
          ></img>
          <a
            className="link link-success"
            href="https://www.linkedin.com/in/sfud/"
          >
            <h1 className="pr-10 text-2xl">Email</h1>
          </a>
        </div>
        <div className="flex my-2 justify-between items-center  h-20 w-72 rounded-full bg-white shadow-2xl ">
          <img
            className="h-[70px] sm:h-20 md:h-[70px] lg:h-20"
            alt="LinkedIn"
            src={git}
          ></img>
          <a
            className="link link-error"
            href="https://www.linkedin.com/in/sfud/"
          >
            <h1 className="pr-10 text-2xl">Git</h1>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
