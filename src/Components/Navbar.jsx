import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="navbar bg-gradient-to-r from-slate-100 to-blue-200 rounded-bl-2xl shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <Link to="about" spy={true} smooth={true} duration={500}>
              <li>
                <a>About</a>
              </li>
            </Link>
            <Link to="projects" spy={true} smooth={true} duration={500}>
              <li>
                <a>Projects</a>
                <ul className="p-2">
                  <li>
                    <a>
                      Know Your Food
                      <div className="badge  badge-primary">1</div>
                    </a>
                  </li>
                  <li>
                    <a>
                      Custom Cards <div className="badge  badge-primary">2</div>
                    </a>
                  </li>
                  <li>
                    <a>
                      YouTube Clone
                      <div className="badge  badge-primary">3</div>
                    </a>
                  </li>
                  <li>
                    <a>
                      Wizard Pool <div className="badge  badge-primary">4</div>
                    </a>
                  </li>
                </ul>
              </li>
            </Link>
            <Link to="skills" spy={true} smooth={true} duration={500}>
              <li>
                <a>Skills</a>
              </li>
            </Link>
          </ul>
        </div>
        <Typography
          variant="h4"
          sx={{
            marginBottom: "0.5rem",
            fontFamily: "cursive",
            backgroundImage: "linear-gradient(90deg, black, blue)",
            WebkitBackgroundClip: "text",
            color: "black",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            // Responsive styles
            "@media screen and (max-width: 600px)": {
              backgroundImage: "linear-gradient(90deg, black, blue)",
              color: "black",
            },
          }}
        >
          Mohammad Saifuddin
        </Typography>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font">
          <Link to="about" spy={true} smooth={true} duration={500}>
            <li>
              <a>About</a>
            </li>
          </Link>
          <li>
            <details>
              <summary>Projects</summary>
              <ul className="w-48 z-40">
                <li>
                  <Link to="projects" spy={true} smooth={true} duration={500}>
                    <a>Know Your Food</a>
                    <div className="badge  badge-primary">1</div>
                  </Link>
                </li>
                <li>
                  <Link to="projects" spy={true} smooth={true} duration={500}>
                    <a>Custom Cards</a>
                    <div className="badge  badge-primary">2</div>
                  </Link>
                </li>
                <li>
                  <Link to="projects" spy={true} smooth={true} duration={500}>
                    <a>YouTube Clone</a>
                    <div className="badge  badge-primary">3</div>
                  </Link>
                </li>
                <li>
                  <Link to="projects" spy={true} smooth={true} duration={500}>
                    <a>Wizard pool</a>
                    <div className="badge  badge-primary">4</div>
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <Link to="skills" spy={true} smooth={true} duration={500}>
            <li>
              <a>Skills</a>
            </li>
          </Link>
        </ul>
      </div>
      <div className="navbar-end flex flex-col items-end pr-2">
        <Link to="contact" spy={true} smooth={true} duration={500}>
          <a className="inline-block px-6 py-3 font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-md hover:shadow-white ">
            Contact
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
