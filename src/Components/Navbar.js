import React from "react";
import "../Styles/Navbar.scss";
import Github from '../assetts/Github.svg'
import LinkedIn from '../assetts/Linkedin.svg'
import CV from '../assetts/CV.svg'


function Navbar() {
  return (
    <div className="navbar">
      <ul className="navLinks">
        <li><a href="#" >Home</a></li>
        <li><a href="#" >Projects</a></li>
        <li>
          <ul className="icons">
            <li>
              <a href="https://www.linkedin.com/in/carl-davidson/"><img src={LinkedIn} alt="LinkedIn of Carl Davidson" title="LinkedIn" className="icon" /> </a>
            </li>
            <li>
              <a href="https://github.com/CoderCarl1"><img src={Github} alt="Github of Carl Davidson" title="Github" className="icon" /> </a>
            </li>
            <li>
              <a href="#" ><img src={CV} alt="PDF Resume of Carl Davidson" title="Resume" className="icon" /></a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
