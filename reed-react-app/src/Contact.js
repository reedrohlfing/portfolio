const Contact = () => {
  return (
    <section className="contact div-background">
      <h1 className="section-title">Contact</h1>

      <div className="contact-variables">
        <div className="contact-info">
          <h2 className="name">Email</h2>
          <p className="email">rdavisrohlfing@gmail.com</p>
        </div>

        <div className="contact-info">
          <h2 className="name">LinkedIn</h2>
          <a
            className="link"
            href="https://www.linkedin.com/in/reedrohlfing/"
            target="_blank"
            rel="noreferrer"
          >
            <p className="link">www.linkedin.com/in/reedrohlfing &#x2197;</p>
          </a>
        </div>

        <div className="contact-info">
          <h2 className="name">Resume</h2>
          <a
            className="link"
            href="https://drive.google.com/uc?export=download&id=1GE2AaquxaFhhfFfBU3IOyN_YduTsJ5d_"
          >
            <p className="link">download &#x2197;</p>
          </a>
          <p className="sub-text">last updated: 03-26-2025</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
