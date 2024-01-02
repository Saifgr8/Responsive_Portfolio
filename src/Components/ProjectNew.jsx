import React, { useEffect, useState } from "react";
import { Msg } from "./Projects";
import kyfVideo from "../Videos/kyfcompressed.mp4";
import cardsVideo from "../Videos/ccCardscompressed.mov";
import YTVideo from "../Videos/YTCOMPREED.mp4";
import Wdpool from "../Videos/WDCOMPRESSED.mp4";
import Js from "../Components/images/js-file.png";
import html from "../Components/images/html5.png";
import css from "../Components/images/css-3.png";
import Java from "../Components/images/java.png";
import spring from "../Components/images/Spring.png";
import Mdb from "../Components/images/MDB.png";
import Postman from "../Components/images/POSTMAN.png";
import github from "../Components/images/GIT.png";
import figma from "../Components/images/Figma.png";
import Azure from "../Components/images/Azure.png";
import proc from "../Components/images/Proc.png";
import Reactimg from "../Components/images/React.png";
import express from "../Components/images/express.png";
import node from "../Components/images/nodejs.png";

const ProjectNew = () => {
  const projectData = [
    {
      video: kyfVideo,
      title: "Know-Your-Food",
      tech: [
        Js,
        html,
        css,
        Java,
        spring,
        Mdb,
        Postman,
        github,
        figma,
        Azure,
        Reactimg,
      ],
      demoLink: "https://kyf-frontend.azurewebsites.net/",
      gitLink: "https://github.com/Saifgr8/Kyf-frontend",
      desc: "A full stack web deployed app contributing to the health and fitness industry. Users can browse among 1000s of food items, set goal, create recipes and track progress",
    },
    {
      video: cardsVideo,
      title: "Custom Cards",
      tech: [Js, Reactimg, Postman, node, express, html, css, Azure, github],
      demoLink: "https://mern-custcards.azurewebsites.net/",
      gitLink: "https://github.com/Saifgr8/CCfrontEnd",
      desc: "A full MERN(MongoDB, Expressjs, Reactjs and Nodejs) stack website created for adding a personal touch to your boring bank cards, pay off in style next time.",
    },
    {
      video: YTVideo,
      title: "YouTube_Clone",
      tech: [Js, Reactimg, html, css, Azure, github],
      demoLink: "https://saifyt.azurewebsites.net/",
      gitLink: "https://github.com/Saifgr8/Saif_YT",
      desc: "Created a fully functional clone of YouTube from scratch. Implemented industry-standard practices like API Management, Redux and RTK, Caching api, Debouncing, Nested Comments and API Polling.",
    },
    {
      video: Wdpool,
      title: "Wizard Pool",
      tech: [Java, proc, github],
      demoLink: "https://www.youtube.com/watch?v=MSVUIefDKOQ",
      gitLink: "https://github.com/UoB-COMSM0110/2023-group-6",
      desc: "Wizard Pool is an innovative game that combines the novel gameplay of 8-ball Pool, with a twist of magic. In this game, players can play as wizards and utilize among a set of RNG spells to beat other player, providing a magical twist.",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {}, [currentIndex, projectData]);

  const handleDemoLink = () => {
    const demoLinkDemo = projectData[currentIndex]?.demoLink;
    if (demoLinkDemo) {
      window.location.href = demoLinkDemo;
    }
  };
  const handleGitLink = () => {
    const gitLinkDemo = projectData[currentIndex]?.gitLink;
    if (gitLinkDemo) {
      window.location.href = gitLinkDemo;
    }
  };

  return (
    <div
      id="projects"
      className="xl:h-[120vh]  bg-gradient-to-b from-blue-200 to-white"
    >
      <div className="flex flex-col items-center">
        <h1 className="text-black">Browse My Recent</h1>
        <h1 className="font-semibold py-2 text-black">Projects</h1>
        <Msg message="Demos at your service 😉" />
      </div>

      <div className="flex flex-col gap-1 justify-center items-center">
        <h1 className="text-3xl font-bold mb-4  text-blue-800">
          {projectData[currentIndex]?.title}
        </h1>
        {currentIndex === 0 && (
          <video className="rounded-xl" width="650px" height="350px" controls>
            <source src={kyfVideo} type="video/mp4" />
          </video>
        )}
        {currentIndex === 1 && (
          <video className="rounded-xl" width="650px" height="350px" controls>
            <source src={cardsVideo} type="video/mp4" />
          </video>
        )}
        {currentIndex === 2 && (
          <video className="rounded-xl" width="650px" height="350px" controls>
            <source src={YTVideo} type="video/mp4" />
          </video>
        )}
        {currentIndex === 3 && (
          <video className="rounded-xl" width="650px" height="350px" controls>
            <source src={Wdpool} type="video/mp4" />
          </video>
        )}
        <div>
          <h1 className="text-center py-2 text-2xl font-bold mb-4 text-blue-800">
            Tech stack:
          </h1>
          <div className="flex flex-wrap justify-center gap-2">
            {projectData[currentIndex].tech.map((item, index) => {
              return (
                <img
                  key={index}
                  className="h-7 w-7 xl:h-12 xl:w-12"
                  src={item}
                  alt=""
                />
              );
            })}
          </div>
        </div>
        <div className="flex gap-10 my-2">
          <button
            onClick={handleDemoLink}
            className=" active:bg-blue-800 active:text-white  cursor-pointer bg-gradient-to-b from-blue-400 to-white py-2 px-3 rounded-lg"
          >
            Demo
          </button>
          <button
            onClick={handleGitLink}
            className=" active:bg-blue-800 active:text-white  cursor-pointer bg-gradient-to-b from-blue-400 to-white py-2 px-3 rounded-lg"
          >
            Git
          </button>
        </div>

        <div className="bg-slate-200  rounded-lg py-2">
          <h1 className="mx-2 px-2 text-center ">
            {projectData[currentIndex]?.desc}
          </h1>
        </div>
      </div>
      <div className=" flex justify-center gap-6 mt-5">
        <button
          onClick={() => setCurrentIndex(0)}
          className=" active:bg-blue-800 active:text-white  cursor-pointer bg-gradient-to-b from-white to-blue-400 py-2 px-3 rounded-lg"
        >
          KYF
        </button>
        <button
          onClick={() => setCurrentIndex(1)}
          className=" active:bg-blue-800 active:text-white  cursor-pointer bg-gradient-to-b from-white to-blue-400 py-2 px-3 rounded-lg"
        >
          CCards
        </button>
        <button
          onClick={() => setCurrentIndex(2)}
          className=" active:bg-blue-800 active:text-white  cursor-pointer bg-gradient-to-b from-white to-blue-400 py-2 px-3 rounded-lg"
        >
          YT_Clone
        </button>
        <button
          onClick={() => setCurrentIndex(3)}
          className=" active:bg-blue-800 active:text-white  cursor-pointer bg-gradient-to-b from-white to-blue-400  py-2 px-3 rounded-lg"
        >
          Wizard Pool
        </button>
      </div>
    </div>
  );
};

export default ProjectNew;
