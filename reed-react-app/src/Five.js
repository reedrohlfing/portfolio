const Five = () => {
  return (
    <section className="five">
      <h1 className="section-title">.FIVE App</h1>
      {/* <div className="project-what div-background">
        <h1>What?</h1>
        <h3 className="what-description">
          I proposed an Applicant Portal for
          <a
            href="https://greenhouse.com/"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            {" "}
            Greenhouse &#x2197;
          </a>
        </h3>
        <p className="windan-subtext sub-text" style={{ padding: 0 }}>
          I am unaffiliated with Greenhouse.
        </p>
      </div>

      <div className="project-why div-background">
        <h1>Why?</h1>
        <div className="why-description">
          <p>
            Greenhouse is a growing leader in hiring and onboarding software.
            They have helped revolutionize the application process for many
            companies, as well as their applicants. By removing the need for a
            login, Greenhouse has drastically reduced the amount of time taken
            for an applicant to apply to a position.
          </p>
          <p>
            The fall back of not creating a company-specific login is that
            candidates can't see the status of their application after they
            apply. To remedy this, I designed an Applicant Portal in theme with
            the Greenhouse style. Below, you'll get a glimpse of how an
            applicant could track the status of their applications
            industry-wide.
          </p>
        </div>
      </div>

      <div className="project-how div-background">
        <h1>How?</h1>
        <div className="tools-features-resources">
          <div className="project-list-div">
            <h2>Tools</h2>
            <li className="project-list">
              <p>JavaScript</p>
              <p>React</p>
              <p>Material UI</p>
              <p>Google Maps API</p>
            </li>
          </div>
          <div className="project-list-div">
            <h2>Features</h2>
            <li className="project-list">
              <p>Login Demo</p>
              <p>Data Grid</p>
              <p>Maps & Markers</p>
              <p>Filtering</p>
            </li>
          </div>
          <div className="project-list-div">
            <h2>Resources</h2>
            <li className="project-list">
              <p>ChatGPT</p>
              <p>YouTube</p>
              <p>Documentation</p>
            </li>
          </div>
        </div>
      </div> */}

      <div className="live-figma-div">
        <h2>Figma Prototype</h2>
        <p className="sub-text" style={{ padding: 0 }}>
          This may not work on some devices.
        </p>
        <iframe
          title="five-figma"
          style={{ border: "0px solid rgba(0, 0, 0, 0.1)" }}
          height="100%"
          width="100%"
          src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/3UuP6t5HutK7p1QobKJImd/.FIVE-app?page-id=0%3A1&node-id=217-494&viewport=194%2C311%2C0.28&t=Cm6JIDEcqmDvC4Bz-8&scaling=scale-down&starting-point-node-id=217%3A494&hide-ui=1"
          allowFullScreen={true}
          fallback={
            <img
              src="five-login.PNG"
              alt="Figma prototype not supported"
              style={{ width: "100%", height: "100%" }}
            />
          }
        ></iframe>
      </div>
    </section>
  );
};

export default Five;
