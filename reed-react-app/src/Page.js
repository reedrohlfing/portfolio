import { useState, useEffect } from "react";
import About from "./About";
import Background from "./Background";
import Music from "./Music";
import Accordion from "./Accordion";
import Projects from "./Projects";
import Windan from "./Windan";
import Greenhouse from "./Greenhouse";
import Five from "./Five";

const Page = () => {
  const [activeSection, setActiveSection] = useState("about");

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <About />;
      case "projects":
        return <Projects setActiveSection={setActiveSection} />;
      case "background":
        return <Background />;
      case "music":
        return <Music />;
      case "five":
        return <Five />;
      case "windan":
        return <Windan />;
      case "greenhouse":
        return <Greenhouse />;
      default:
        return <Projects />;
    }
  };

  // Keep accordion at the top on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled to Title
      const accordionPlaceholder = document.querySelector(
        ".accordion-placeholder"
      );
      const accordion = document.querySelector(".accordion-og");
      const accordionDistance =
        document.querySelector(".main-title").scrollHeight;
      if (window.scrollY > accordionDistance) {
        accordion.classList.add("invisible");
        accordionPlaceholder.classList.remove("invisible");
      } else {
        accordionPlaceholder.classList.add("invisible");
        accordion.classList.remove("invisible");
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  function handleNameClick() {
    setActiveSection("about");
    window.scrollTo(0, 0);
  }

  return (
    <nav className="page">
      <nav className="main-title">
        <div className="name-background">
          <p className="name-text" onClick={handleNameClick}>
            Reed Rohlfing
          </p>
        </div>
      </nav>
      <div className="accordion-og">
        <Accordion
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>
      <div className="accordion-placeholder invisible">
        <Accordion
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>

      <div className="section-content">{renderSection()}</div>
    </nav>
  );
};

export default Page;
