import React from "react";
import { useState } from "react";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
const AltRouting = () => {
  const [activeComponent, setActiveComponent] = useState("AboutMe");
  const renderComponent = () => {
    switch (activeComponent) {
      case "AboutMe":
        return <AboutMe />;
      case "Skills":
        return <Skills />;
      case "Project":
        return <Project />;
      case "ContactMe":
        return <ContactMe />;
    }
  };
  return (
    <div>
      <div>
        <button onClick={() => setActiveComponent("AboutMe")}>About me</button>
        <button onClick={() => setActiveComponent("Skills")}>Skills</button>
        <button onClick={() => setActiveComponent("Project")}>Project</button>
        <button onClick={() => setActiveComponent("ContactMe")}>
          Contact Me
        </button>
      </div>
      {renderComponent()}
    </div>
  );
};

export default AltRouting;
