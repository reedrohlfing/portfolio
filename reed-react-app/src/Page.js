import { useState, useEffect } from "react";
import Background from "./Background";
import Music from "./Music";
import Accordion from "./Accordion";
import Projects from "./Projects";
import Windan from "./Windan";
import Greenhouse from "./Greenhouse";
import Five from "./Five";

const Page = () => {
  const [activeSection, setActiveSection] = useState("projects");

  const renderSection = () => {
    switch (activeSection) {
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
      const accordionDistance =
        document.querySelector(".main-title").scrollHeight;
      if (window.scrollY > accordionDistance) {
        accordionPlaceholder.classList.remove("hide");
      } else {
        accordionPlaceholder.classList.add("hide");
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  function handleNameClick() {
    window.location.reload();
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
      <div className="accordion-placeholder hide">
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
