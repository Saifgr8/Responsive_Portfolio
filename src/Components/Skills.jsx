import React from "react";
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
import proc from "../Components/images/Proc.png";
import tailwind from "../Components/images/tailwind.png";
import Bstrap from "../Components/images/bootstrap.png";
import saas from "../Components/images/SASS.png";
import node from "../Components/images/nodejs.png";
import sql from "../Components/images/sql-server.png";
import xml from "../Components/images/xml.png";
import { Msg } from "./Projects";

const Skills = () => {
  return (
    <div id="skills" class="bg-gradient-to-b from-white to-blue-200   h-[100vh] flex flex-col justify-center items-center">
      <h1>Peek Into My</h1>
      <h1 className="pb-5 font-semibold py-2">Skills</h1>
      <Msg message="Swipe up 👆" />
      <div className="h-96 carousel carousel-vertical rounded-box">
        <div className="flex flex-col carousel-item h-ful items-center justify-center rounded-xl bg-gradient-to-br from-pink-300 via-pink-500 to-pink-700 w-[300px] h-[400px]">
          <h1 className="pb-10 font-semibold">Front End</h1>
          <div className="flex flex-wrap items-center justify-evenly space-x-4 ">
            <img
              className="h-12 sm:h-12 md:h-12 lg:h-10 xl:h-11 mx-3 my-3"
              alt="React"
              src={Reactimg}
            ></img>
            <img
              className="h-12 sm:h-8 md:h-12 lg:h-12 xl:h-11 mx-3 my-3"
              alt="Figma"
              src={figma}
            ></img>
            <img
              className="h-12 sm:h-8 md:h-12 lg:h-12 xl:h-14 mx-3 my-3"
              alt="JavaScript"
              src={Js}
            ></img>
            <img
              className="h-12 sm:h-8 md:h-12 lg:h-12 xl:h-14 mx-3 my-3"
              alt="HTML"
              src={html}
            ></img>
            <img
              className="h-12 sm:h-8 md:h-12 lg:h-12 xl:h-14 mx-3 my-3"
              alt="CSS"
              src={css}
            ></img>
            <img
              className="h-12 sm:h-8 md:h-12 lg:h-12 xl:h-14 mx-3 my-3"
              alt="CSS"
              src={tailwind}
            ></img>
            <img
              className="h-12 sm:h-8 md:h-12 lg:h-12 xl:h-14 mx-3 my-3"
              alt="CSS"
              src={Bstrap}
            ></img>
            <img
              className="h-12 sm:h-8 md:h-12 lg:h-12 xl:h-14 mx-3 my-3"
              alt="CSS"
              src={saas}
            ></img>
          </div>
        </div>
        <div className="flex flex-col carousel-item h-ful items-center justify-center rounded-xl bg-gradient-to-br from-orange-300 via-orange-500 to-orange-700 w-[300px] h-[400px]">
          <h1 className="pb-10 font-semibold">Back End</h1>
          <div className="flex flex-wrap items-center justify-evenly space-x-4 ">
            <img
              className="h-12 sm:h-12 md:h-12 lg:h-10 xl:h-11 mx-3 my-3"
              alt="React"
              src={node}
            ></img>
            <img
              className="h-12 sm:h-8 md:h-12 lg:h-12 xl:h-11 mx-3 my-3"
              alt="Figma"
              src={spring}
            ></img>
            <img
              className="h-12 sm:h-8 md:h-12 lg:h-12 xl:h-14 mx-3 my-3"
              alt="JavaScript"
              src={Java}
            ></img>
            <img
              className="h-12 sm:h-8 md:h-12 lg:h-12 xl:h-14 mx-3 my-3"
              alt="HTML"
              src={Mdb}
            ></img>
            <img
              className="h-12 sm:h-8 md:h-12 lg:h-12 xl:h-14 mx-3 my-3"
              alt="CSS"
              src={Postman}
            ></img>
            <img
              className="h-12 sm:h-8 md:h-12 lg:h-12 xl:h-14 mx-3 my-3"
              alt="CSS"
              src={sql}
            ></img>
          </div>
        </div>
        <div className="flex flex-col carousel-item h-ful items-center justify-center rounded-xl bg-gradient-to-br from-teal-300 via-teal-500 to-teal-700 w-[300px] h-[400px]">
          <h1 className="pb-10 font-semibold">MISCELLANEOUS</h1>
          <div className="flex flex-wrap items-center justify-evenly space-x-4 ">
            <img
              className="h-12 sm:h-12 md:h-12 lg:h-10 xl:h-11 mx-3 my-3"
              alt="React"
              src={Azure}
            ></img>
            <img
              className="h-12 sm:h-8 md:h-12 lg:h-12 xl:h-11 mx-3 my-3"
              alt="Figma"
              src={github}
            ></img>
            <img
              className="h-12 sm:h-8 md:h-12 lg:h-12 xl:h-14 mx-3 my-3"
              alt="JavaScript"
              src={proc}
            ></img>
            <img
              className="h-12 sm:h-8 md:h-12 lg:h-12 xl:h-14 mx-3 my-3"
              alt="HTML"
              src={xml}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
