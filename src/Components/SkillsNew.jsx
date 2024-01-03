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
import express from "../Components/images/express.png";
import { Msg } from "./Projects";
import Fend from "../Videos/FendAnimation.json";
import server from "../Videos/server.json";
import other from "../Videos/othernew.json";
import Lottie from "lottie-react";

const SkillsNew = () => {
  const skillData = [
    {
      gif: Fend,
      title: "FRONT END DEVELOPMENT",
      skills: [Reactimg, Js, html, css, figma, tailwind, Bstrap, saas],
    },
    {
      gif: server,
      title: "BACK END DEVELOPMENT",
      skills: [node, express, Java, spring, Postman, Mdb, sql, Azure],
    },
    {
      gif: other,
      title: "MISCELLANEOUS",
      skills: [github, proc, xml],
    },
  ];
  return (
    <div
      id="skills"
      className=" bg-gradient-to-b from-white to-blue-200  pt-32"
    >
      <div className="flex flex-col items-center">
        <h1 className="text-black">Peek Into My</h1>
        <h1 className="pb-5 font-semibold py-2 text-black">Skills</h1>
        <Msg message="Peekabo 😉" />
      </div>
      <div className="flex justify-around items-center flex-wrap">
        {skillData.map((item, index) => {
          return (
            <div key={index} className="flex flex-col justify-center">
              <Lottie animationData={item?.gif} className="h-80 w-80" />
              <h1 className=" text-sm pl-7 rounded-lg relative text-center text-black">
                <span className="bg-gradient-to-r from-white to-blue-200 bg-opacity-50 p-1 rounded text-xl ">
                  {item?.title}
                </span>
              </h1>
              <div className="bg-gradient-to-r rounded-lg from-white to-blue-200 h-44 w-96 flex flex-wrap flex-row mt-5">
                {item.skills.map((img) => {
                  return <img src={img} className="h-16 m-2 p-2" alt="" />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsNew;
