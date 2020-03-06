import React from "react";
import "./Styles/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CV from './assetts/Carl-Davidson-Resume.pdf'
import Body from "./Components/Body";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <Router>
      <div className="app">
      <Switch>
        <Route exact path="/" component={Body} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Contact" component={Contact} />
        <Route path="/CV-Carl" component={CV} />
      </Switch>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
