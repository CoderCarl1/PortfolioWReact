import React from "react";
import CodeIMG from '/home/carl/projects/portfolioWreact/codercarl/src/assetts/Code.svg'
import SiteIMG from '/home/carl/projects/portfolioWreact/codercarl/src/assetts/Site.svg'

function HTMLPortfolio() {
  return (
    <article className="tab-content">
      <section className="project">
        <aside>
          <section class="techstack">
            <h3>Tech</h3>
            <ul>
              <li>HTML</li>
              <li>SCSS</li>
            </ul>
          </section>

          
        </aside>
        <aside>
          <h3>About Portfolio</h3>
          <h4>Key learnings</h4>
          <ul>
            <li>Solidying my use of CSS</li>
            <li>Website accessibility</li>
            <li>Keyframes, SCSS partials</li>
            <li>
              Refactoring the CSS into smaller code is possible (again and
              again) but it will never be perfect.
            </li>
            <li>plan each component properly the 1st time</li>
          </ul>
          <h4>Hardest Parts</h4>
          <ul>
            <li>Learning/ Ensuring acessibility</li>
            <li>life interruptions & still getting the work done</li>
            <li>Identifying the MVP</li>
          </ul>
        </aside>
      </section>
      <section className="project-links">
            <h3>links</h3>
            <ul>
              <li>
                <a href="https://github.com/CoderCarl1/Portfolio">
                <img
                  src={CodeIMG}
                  alt="Github Repo for first Portfolio"
                  title="Github Repo"
                  className="icon"
                />
                  <span>Code</span></a>
              </li>
              <li>
                <a href="https://codercarl1.github.io/Portfolio/">
                <img
                  src={SiteIMG}
                  alt="first Portfolio"
                  title="first Portfolio"
                  className="icon"
                />
                  Deployed Site
                </a>
              </li>
            </ul>
          </section>
    </article>
  );
}

export default HTMLPortfolio;
