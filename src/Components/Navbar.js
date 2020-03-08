import React from "react";
import "../Styles/Navbar.scss";
import Github from "../assetts/Github.svg";
import LinkedIn from "../assetts/Linkedin.svg";
import CV from "../assetts/CV.svg";
import DarkLight from "./DarkLight.js";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <ul className="nav-links">
        <li><h3>LOGO</h3></li>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/Projects">
          <li>Projects</li>
        </Link>
        <Link to="/Contact">
          <li>Contacts</li>
        </Link>
        <li>
          <ul className="icons">
            <li>
              <a href="https://www.linkedin.com/in/carl-davidson/">
                <img
                  src={LinkedIn}
                  alt="LinkedIn of Carl Davidson"
                  title="LinkedIn"
                  className="icon"
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/CoderCarl1">
                <img
                  src={Github}
                  alt="Github of Carl Davidson"
                  title="Github"
                  className="icon"
                />
              </a>
            </li>
            <Link to="/CV-Carl">
              <li>
                <img
                  src={CV}
                  alt="PDF Resume of Carl Davidson"
                  title="Resume"
                  className="icon"
                />
              </li>
            </Link>
            <li>
              <DarkLight />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
