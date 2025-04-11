const Accordion = ({ activeSection, setActiveSection }) => {
  const toggleCategory = (category) => {
    setActiveSection(category);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="accordion">
      <section
        onClick={() => toggleCategory("projects")}
        className={`${
          activeSection === "projects" ? "activeTab div-background" : ""
        }`}
      >
        <div className="accordion-subheader">
          <div className="accordion-link">
            <h3>projects</h3>
          </div>
        </div>
      </section>
      <section
        onClick={() => toggleCategory("background")}
        className={`${
          activeSection === "background" ? "activeTab div-background" : ""
        }`}
      >
        <div className="accordion-subheader">
          <div className="accordion-link">
            <h3>background</h3>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Accordion;
