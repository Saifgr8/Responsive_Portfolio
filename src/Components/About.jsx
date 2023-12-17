import React from "react";
import { Typography } from "@mui/material";
import goal from "../Components/images/GOAL.webp";
import edu from "../Components/images/education.png";
import work from "../Components/images/experience.png";
import { Msg } from "./Projects";

const About = () => {
  return (
    <div id="about" class="bg-gradient-to-b from-white to-blue-200 h-[100vh] flex flex-col justify-center items-center">
      <h1>Get To Know Me More</h1>
      <h1 className="font-semibold">About Me</h1>
      <Msg message="Swipe right 👉" />
      <div className="carousel carousel-center max-w-sm p-4 space-x-4 bg-base rounded-box">
        <div className="carousel-item">
          <div className="flex flex-col items-center justify-center rounded-xl bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700 w-[300px] h-[400px]">
            <Typography sx={{ textAlign: "center", fontSize: "2em" }}>
              Summary
            </Typography>
            <img src={goal} alt="goal" className="h-10 w-10" />
            <br />
            <Typography sx={{ padding: "0 5px", textAlign: "justify" }}>
              Recent MSc in Computer Science from a top Uni with industry
              experience in Front End, Back End Development and CI/CD with
              proven skills in React.js, Node.js, JavaScript, database
              management and Microsoft Azure DevOps. Seeking a challenging {""}
              <span style={{ fontWeight: "bold" }}>
                Software Development
              </span>{" "}
              role. Eager to contribute to dynamic teams and drive impactful
              solutions.
            </Typography>
          </div>
        </div>
        <div className="carousel-item">
          <div className="flex flex-col items-center justify-center rounded-xl bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700 w-[300px] h-[400px]">
            <div className="pb-9 flex flex-col items-center">
              <Typography sx={{ textAlign: "center", fontSize: "2em" }}>
                Education
              </Typography>
              <img src={work} alt="goal" className="h-10 w-10" />
            </div>
            <br />
            <Typography sx={{ fontWeight: "bold" }}>
              University of Bristol
            </Typography>
            <Typography sx={{ fontStyle: "italic" }}>
              MSc Computer Science
            </Typography>
            <Typography>London, UK</Typography>
            <br />
            <Typography sx={{ fontWeight: "bold" }}>
              Osmania University
            </Typography>
            <Typography sx={{ fontStyle: "italic", textAlign: "center" }}>
              B.E Electrical and Electronics Engineering
            </Typography>
            <Typography>Hyderabad, India</Typography>
          </div>
        </div>
        <div className="carousel-item">
          <div className="flex flex-col items-center justify-center rounded-xl bg-gradient-to-br from-green-300 via-green-500 to-green-700 w-[300px] h-[400px]">
            <div className="pb-12 flex flex-col items-center">
              <Typography sx={{ textAlign: "center", fontSize: "2em" }}>
                Work Experience
              </Typography>
              <img src={edu} alt="goal" className="h-10 w-10" />
            </div>
            <br />
            <Typography sx={{ fontWeight: "bold" }}>MindQube Tech</Typography>
            <Typography sx={{ fontStyle: "italic" }}>
              Associate Software Developer
            </Typography>
            <Typography>London, UK</Typography>
            <br />
            <Typography sx={{ fontWeight: "bold" }}>Accenture</Typography>
            <Typography sx={{ fontStyle: "italic" }}>
              Workday Inegration Consultant
            </Typography>
            <Typography>Hyderabad, India</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
