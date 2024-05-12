const Projects = () => {
    return ( 
        <section className="projects">
            <h1 className="section-title">Projects</h1>
            <div className="tiles">   
                <div className="tile">
                    {/* <a href="/"> */}
                        <div className='tile-header' id="five">
                            <img className="tile-img" src='FIVE-title.gif' alt="five"></img>
                        </div>
                    {/* </a> */}
                    <div className="tile-desc">
                        <h2 id="in-progress">In Progress</h2>
                        <h2>.FIVE</h2>
                        <div className="project-responsibilities">
                            <h3>Product Designer</h3>
                            <h3>App Developer</h3>
                        </div>  
                        <p className="sub-text">React Native, Figma, Expo Go</p>
                        {/* <p className="project-description">Designing a social media app.</p> */}
                    </div>
                </div>
                <div className="tile">
                    <a href="https://windanmarket.com" target="_blank" rel="noreferrer">
                        <div className='tile-header' id="windan">
                            <img className="tile-img" src='wm_logo_white.png' alt="windan market logo"></img>
                        </div>
                    </a>
                    <div className="tile-desc">
                        <h2>Windan Market Concept</h2>
                        <div className="project-responsibilities">
                            <h3>Founder</h3>
                            <h3>Software Developer</h3>
                        </div>
                        <p className="sub-text">JavaScript, HTML, CSS</p>
                        <p className="project-description">Pioneered the development of an online menswear concept shop, optimizing shopping for young men by curating a selection of high-quality, local, and reputable brands that are rarely found collectively in typical retailers. </p>
                    </div>
                </div>
            </div>
        </ section>
    );
};

export default Projects;