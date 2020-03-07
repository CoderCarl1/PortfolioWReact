import React, { useState } from "react";
import "../Styles/Projects.scss";
import Keylord from "./Projects/Keylord";
import HTMLPortfolio from "./Projects/HTMLPortfolio";
import Tat2Market from "./Projects/Tat2Market";
import ProjectTab4 from "./Projects/CMCFlow";
import ProjectTab5 from "./ProjectTab5";

function Projects() {
  const [tab, setTab] = useState("tab1");

  console.log(tab);
  return (
    <section className="tab-wrap">
      <section className="tab-select">
        <button onClick={() => setTab("tab1")}>tab1</button>
        <button onClick={() => setTab("tab2")}>tab2</button>
        <button onClick={() => setTab("tab3")}>tab3</button>
        <button onClick={() => setTab("tab4")}>tab4</button>
        <button onClick={() => setTab("tab5")}>tab5</button>
      </section>
      <section className="tab-info">
        {(function() {
          switch (tab) {
            case "tab1":
              return <Keylord />;
            case "tab2":
              return <HTMLPortfolio />;
            case "tab3":
              return <Tat2Market />;
            case "tab4":
              return <ProjectTab4 />;
            case "tab5":
              return <ProjectTab5 />;
            default:
              return null;
          }
        })()}


      </section>
    </section>
  );
}

export default Projects;
