import React from "react";
import "./App.css";
import Navigator from "./component/Navigator";
import LandingPage from "./component/LandingPage";
import Decor from "./component/Decor";
import Project from "./component/Project";
import Contact from "./component/Contact";
import About from "./component/About";
function App() {
  return (
    <div>
      <Navigator />
      <LandingPage />
      <Decor />
      <Project />
      <Decor />
      <Contact />
      <About />
    </div>
  );
}

export default App;
