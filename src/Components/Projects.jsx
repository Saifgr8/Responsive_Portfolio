import React from "react";
import KYF from "../Components/images/KYFporto.png";
import YT from "../Components/images/YT.png";
import Wpool from "../Components/images/WDPOOL.png";
import { Typography } from "@mui/material";
import Reactimg from "../Components/images/React.png";
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
import proc from '../Components/images/Proc.png'
import saif from '../Components/images/SAIF.png'

const Projects = () => {
  return (
    <div
      id="projects"
      class="bg-gradient-to-b from-blue-200 to-white  h-[200vh] sm:h-[100vh] md:h-[200vh] lg:h-[100vh] xl:h-[100vh flex flex-col justify-center items-center"
    >
      <h1 className="text-black">Browse My Recent</h1>
      <h1 className="font-semibold py-2 text-black">Projects</h1>
      <Msg message="Demos at your service 😉" />
      <div className="flex flex-wrap gap-6 justify-center md:justify-evenly lg:justify-center xl:justify-around">
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={KYF} alt="KYF" />
          </figure>
          <div className="card-body">
            <h2 className="card-title ">Know Your Food</h2>
            <p>
              A full stack web deployed app contributing to the health and
              fitness industry. Users can browse among 1000s of food items, set
              goal, create recipes and track progess.
            </p>
            <span>Tech used: </span>
            <div className="flex flex-wrap items-center justify-center gap-4 space-x-4">
              <img
                className="h-8 sm:h-8 md:h-9 lg:h-10 xl:h-11"
                alt="React"
                src={Reactimg}
              ></img>
              <img
                className="h-8 sm:h-8 md:h-9 lg:h-10 xl:h-11"
                alt="Figma"
                src={figma}
              ></img>
              <img
                className="h-8 sm:h-8 md:h-9 lg:h-10 xl:h-11"
                alt="JavaScript"
                src={Js}
              ></img>
              <img
                className="h-8 sm:h-8 md:h-9 lg:h-10 xl:h-11"
                alt="HTML"
                src={html}
              ></img>
              <img
                className="h-8 sm:h-8 md:h-9 lg:h-10 xl:h-11"
                alt="CSS"
                src={css}
              ></img>
              <img
                className="h-8 sm:h-8 md:h-9 lg:h-10 xl:h-11"
                alt="Java"
                src={Java}
              ></img>
              <img
                className="h-8 sm:h-8 md:h-9 lg:h-10 xl:h-11"
                alt="Spring"
                src={spring}
              ></img>
              <img
                className="h-8 sm:h-8 md:h-9 lg:h-10 xl:h-11"
                alt="MongoDB"
                src={Mdb}
              ></img>
              <img
                className="h-8 sm:h-8 md:h-9 lg:h-10 xl:h-11"
                alt="Azure"
                src={Azure}
              ></img>
              <img
                className="h-8 sm:h-8 md:h-9 lg:h-10 xl:h-11"
                alt="POSTMAN"
                src={Postman}
              ></img>
              <img
                className="h-8 sm:h-8 md:h-9 lg:h-10 xl:h-11"
                alt="Git"
                src={github}
              ></img>
            </div>
            <div className="card-actions justify-end">
              <a href="https://github.com/Saifgr8/Kyf-frontend">
                <button className="btn btn-primary">Git</button>
              </a>
              <a href="https://kyf-frontend.azurewebsites.net/">
                <button className="btn btn-primary">Demo</button>
              </a>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={YT} alt="Yt" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">YouTube Clone</h2>
            <p>
              Created a fully functional clone of YouTube from scratch.
              Implemented industry-standard practices like API Management, Redux
              and RTK, Caching api, Debouncing, Nested Comments and API Polling.
            </p>
            <span>Tech used: </span>
            <div className="flex flex-wrap items-center justify-center  gap-4  space-x-4">
              <img
                className="h-8 sm:h-8 md:h-9 lg:h-10 xl:h-11"
                alt="React"
                src={Reactimg}
              ></img>
              <img
                className="h-8 sm:h-8 md:h-9 lg:h-10 xl:h-11"
                alt="JavaScript"
                src={Js}
              ></img>
              <img
                className="h-8 sm:h-8 md:h-9 lg:h-10 xl:h-11"
                alt="HTML"
                src={html}
              ></img>
              <img
                className="h-8 sm:h-8 md:h-9 lg:h-10 xl:h-11"
                alt="CSS"
                src={css}
              ></img>
              <img
                className="h-8 sm:h-8 md:h-9 lg:h-10 xl:h-11"
                alt="Azure"
                src={Azure}
              ></img>

              <img
                className="h-8 sm:h-8 md:h-9 lg:h-10 xl:h-11"
                alt="Git"
                src={github}
              ></img>
            </div>
            <div className="card-actions justify-end">
              <a href="https://github.com/Saifgr8/Saif_YT">
                <button className="btn btn-primary">Git</button>
              </a>
              <a href="https://saifyt.azurewebsites.net/">
                <button className="btn btn-primary">Demo</button>
              </a>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={Wpool} alt="Wpool" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Wizard pool</h2>
            <p>
              Wizard Pool is an innovative game that combines the novel gameplay
              of 8-ball Pool, with a twist of magic. In this game, players can
              play as wizards and utilize among a set of RNG spells to bea other
              player, providing a magical twist.
            </p>
            <span>Tech used: </span>
            <div className="flex flex-wrap items-center justify-center   gap-4 space-x-4">
              <img
                className="h-8 sm:h-8 md:h-9 lg:h-10 xl:h-11"
                alt="JavaScript"
                src={Java}
              ></img>
              <img
                className="h-8 sm:h-8 md:h-9 lg:h-10 xl:h-11"
                alt="HTML"
                src={proc}
              ></img>
              <img
                className="h-8 sm:h-8 md:h-9 lg:h-10 xl:h-11"
                alt="Git"
                src={github}
              ></img>
            </div>
            <div className="card-actions justify-end">
              <a href="https://github.com/UoB-COMSM0110/2023-group-6">
                <button className="btn btn-primary">Git</button>
              </a>
              <a href="/">
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    window.alert(
                      "Opps, something's broke. Hang tight I am working on it"
                    )
                  }
                >
                  Demo
                </button>
              </a>
              <a href="https://www.youtube.com/watch?v=MSVUIefDKOQ">
                <button className="btn btn-primary">Video</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

 export const Msg = ({message}) => {
   const time = new Date().toTimeString().split(" ")[0];

    return (
      <div className="">
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img alt="Saif" src={saif} />
            </div>
          </div>
          <div className="chat-header">
            Saif {""}
            <time className="text-xs opacity-50">{time}</time>
          </div>
          <div className="chat-bubble">{message}</div>
          <div className="chat-footer opacity-50">Delivered</div>
        </div>
      </div>
    );
}
export default Projects;
