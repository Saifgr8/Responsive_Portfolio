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
