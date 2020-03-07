import React from "react";

function Keylord() {
  return (
    <article className="tab-content">
      <section className="project">
        
        <aside  className="">
          <section>
            <h3>Stack used</h3>
            <ul>
              <li>Ruby</li>
            </ul>
          </section>
          <section>
            <h3>links</h3>
            <ul>
              <li>Github</li>
            </ul>
          </section>
        </aside>




        <aside >
          <h3>About Keylord</h3>
          <h4>Key learnings</h4>
          <ul>
            <li>Class models</li>
            <li>Communication with partials</li>
            <li>Loops</li>
            <li>Structure of code and commenting</li>
            <li>TDD</li>
          </ul>
          <h4>Hardest Parts</h4>
          <ul>
            <li>Getting the class methods to execute in the correct order</li>
            <li>
              planning and then still going down the rabbit hole of 'if I do
              this...'
            </li>
            <li>
              Using/Integrating gems that required hashes when my understanding
              of hashes was limited (at best) i.e.{" "}
              <a href="https://github.com/piotrmurach/tty-prompt#ttyprompt-">
                TTY-Prompt
              </a>
            </li>
            <li>TDD</li>

          </ul>
        </aside>
      </section>
      <section className="project-links">
        <ul>
          <li>
            <a href="#">Code</a>
          </li>
          <li>
            <a href="#">Project</a>
          </li>
        </ul>
      </section>
    </article>
  );
}

export default Keylord;
