import React from "react";
import "./App.css";
import Navigator from "./component/Navigator";
import LandingPage from "./component/LandingPage";
import Decor from "./component/Decor";
import Project from "./component/Project";
import Contact from "./component/Contact";
import About from "./component/About";
import { useState } from "react";
function App() {
  const [screen, setScreen] = useState("main");
  const show = () => {
    console.log("set screen to ", screen);
    switch (screen) {
      case "main":
        return (
          <div>
            <Navigator setScreen={setScreen} />
            <LandingPage />
            <Decor />
            <Project />
            <Decor />
            <Contact />
            <About />
          </div>
        );
      case "about":
        return (
          <div>
            <Navigator setScreen={setScreen} />
            <About />
          </div>
        );
      case "contact":
        return (
          <div>
            <Navigator setScreen={setScreen} />
            <Contact />
          </div>
        );

      default:
        return (
          <div>
            <Navigator setScreen={setScreen} />
            <Project />
          </div>
        );
    }
  };
  return <div>{show()}</div>;
}

export default App;
