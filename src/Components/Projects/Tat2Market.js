import React from "react";

function Tat2Market() {
  return (
    <article className="tab-content">
      <section id="Tat2Market">
        
        <aside class="card-details">
          <section>
            <h3>Stack used</h3>
            <ul>
              <li>Ruby</li>
              <li>Rails</li>
              <li>PostgreSQL</li>
              <li>SCSS</li>
            </ul>
            <h3>Developer Tools</h3>
            <ul>
              <li>Devise (users)</li>
              <li>Rolify (roles)</li>
              <li>Cloudinary (image uploads)</li>
              <li>Stripe (Payment integration)</li>
            </ul>
          </section>
          <section>
            <h3>links</h3>
            <ul>
              <li>
                <a href="https://github.com/CoderCarl1/T2A2-Rails-Marketplace/tree/master/src">
                  Github
                </a>
              </li>
              <li>
                <a href="https://tat2-market.herokuapp.com/">Website</a>{" "}
                <em>(hosted on Heroku)</em>
              </li>
            </ul>
          </section>
        </aside>
        <aside class="card-blurb">
          <h3>About Tat2Market</h3>
          <h4>Key learnings</h4>
          <ul>
            <li>MVC</li>
            <li></li>
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

export default Tat2Market
;
