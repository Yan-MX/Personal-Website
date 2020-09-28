import React from "react";
import "./App.css";
import Navigator from "./component/Navigator";
import LandingPage from "./component/LandingPage";
import Decor from "./component/Decor";
import Project from "./component/Project";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import About from "./component/About";
import Form from "./component/Form";
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
            <LandingPage setScreen={setScreen} />
            <Decor /> <About />
            <Decor />
            <Project />
            <Decor />
            <Contact setScreen={setScreen} />
            <Footer />
          </div>
        );
      case "about":
        return (
          <div>
            <Navigator setScreen={setScreen} />
            <About />
            <Footer />
          </div>
        );
      case "contact":
        return (
          <div>
            <Navigator setScreen={setScreen} />
            <Form />

            <Footer />
          </div>
        );

      default:
        return (
          <div>
            <Navigator setScreen={setScreen} />
            <Project />
            <Footer />
          </div>
        );
    }
  };
  return <div>{show()}</div>;
}

export default App;
