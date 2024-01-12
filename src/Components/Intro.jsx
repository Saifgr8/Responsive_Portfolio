import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Typography, Dialog, DialogContent } from "@mui/material";
import saif from "../Components/images/SAIF.png";
import CVF from "../Components/images/SAIFCVFNEW.png";
import CVB from "../Components/images/saifcvb.png";
import { useState } from "react";
import { Msg } from "./Projects";
import Lottie from "lottie-react";
import intro from "../Videos/blue.json";
import { TypeAnimation } from "react-type-animation";

const Intro = () => {
  return (
    <div class="bg-gradient-to-b from-blue-200 h-[90vh] to-white ">
      <Navbar />
      <div className="flex  justify-center ">
        <IntroContent />
      </div>
    </div>
  );
};

const IntroContent = () => {
  const [showCV, SetShowCV] = useState(false);


  const handleOpen = () => {
    SetShowCV(true);
  };
  const handleClose = () => {
    SetShowCV(false);
  };
  return (
    <div className="flex flex-col items-center">
      <div className="absolute">
        <Lottie animationData={intro} className="h-60 w-60" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <img
          className="rounded-full h-64 md:h-80 lg:h-96 xl:h-112 2xl:h-128 mr-5 "
          src={saif}
          alt="SaifGoodLookingImg"
          onMouseOver={(e) => {
            const scaleValue = window.innerWidth >= 1024 ? 1.2 : 1; // Adjust the breakpoint as needed
            const translateValue =
              window.innerWidth >= 1024
                ? "translateX(2rem)"
                : "translateX(0.3rem)";

            e.currentTarget.style.transform = "scale(1.2)";
            e.currentTarget.nextElementSibling.style.transform = translateValue;
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.nextElementSibling.style.transform =
              "translateX(-1rem)";
          }}
        />

        <div>
          <Typography
            variant="body2"
            className="sm:text-sm lg:text-lg text-black "
          >
            I'm
          </Typography>
          <Typography
            sx={{ fontFamily: "cursive" }}
            variant="h5"
            className="sm:text-xs lg:text-3xl  text-black"
          >
            Mohammad Saifuddin
          </Typography>
          <Typography className=" text-black">
            A
            <div className="inline px-2">
              <TypeAnimation
                sequence={[
                  "Software Developer",
                  1000,
                  "Software Engineer",
                  1000,
                  "Web Developer",
                  1000,
                ]}
                wrapper="span"
                speed={20}
                style={{ fontFamily: "monospace", fontSize: "1.3em" }}
                repeat={Infinity}
              />
            </div>
            <div className="block">
              with eye-catching code and personality ✨
            </div>
          </Typography>

          <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <button
              onClick={() => handleOpen()}
              className="inline-block px-6 py-3 font-semibold text-white
    bg-gradient-to-br from-white to-blue-300 rounded-lg shadow-md
    hover:shadow-blue-500 text-black
    md:px-8 md:py-4 md:text-xl"
            >
              Show CV
            </button>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <a href="https://www.linkedin.com/in/sfud/">
              <img height="50px" src="" style={{ marginRight: "0.5rem" }} />
            </a>
            <a href="https://github.com/Saifgr8">
              <img height="50px" src="" />
            </a>
          </div>
        </div>
        <Dialog open={showCV} onClose={handleClose}>
          <DialogContent>
            <img
              src={CVF}
              alt="CV"
              style={{ width: "100%", maxWidth: "600px", borderRadius: "10px" }}
            />
            <img
              src={CVB}
              alt="CV"
              style={{ width: "100%", maxWidth: "600px", borderRadius: "10px" }}
            />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Intro;
