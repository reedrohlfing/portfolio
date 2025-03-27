const Five = () => {
  return (
    <section className="five">
      <h1 className="section-title">.FIVE App</h1>
      <div className="project-what div-background">
        <h1>What</h1>
        <h3 className="what-description">
          I'm creating a web app to explore the boundary of social media and
          dating.
        </h3>
      </div>

      <div className="project-why div-background">
        <h1>Why</h1>
        <div className="why-description">
          <p>
            Many friends have used Instagram as a form of introduction to a
            mutual relationship. I see an opportunity to blur the lines between
            social media and a dating app. Why not be able to see your friends
            content and find mutual friends just outside your circle? This app
            aims to bring new life to the ad-filled Instagram and the demeaning
            swipe of Hinge.
          </p>
          <p>
            Plus, there hasn't been a social media app that's solely focused on
            the 0.5x fisheye lens for iPhone, hence .FIVE.
          </p>
        </div>
      </div>

      <div className="project-how div-background">
        <h1>How</h1>
        <div className="tools-features-resources">
          <div className="project-list-div">
            <h2>Tools</h2>
            <li className="project-list">
              <p>JavaScript</p>
              <p>React Native</p>
              <p>Figma</p>
              <p>Expo</p>
            </li>
          </div>
          <div className="project-list-div">
            <h2>Features</h2>
            <li className="project-list">
              <p>No follower count</p>
              <p>No infinite scroll</p>
              <p>More profile info</p>
              <p>Circular design</p>
              <p>No comments, just private messaging</p>
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
      </div>

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
