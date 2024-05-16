const Projects = ({ setActiveSection }) => {
    const toggleCategory = (category) => {
        setActiveSection(category);
        window.scrollTo(0, 0);
    };

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
                    <div className="tile-desc div-background">
                        <h2 id="in-progress">In Progress</h2>
                        <h2>.FIVE</h2>
                        <div className="project-responsibilities">
                            <h3>Product Designer</h3>
                            <h3>App Developer</h3>
                        </div>  
                        <p className="sub-text">React Native, Figma, Expo Go</p>
                    </div>
                </div>
                <div className="tile">
                    <div className='tile-header' id="windan" onClick={() => toggleCategory('windan')}>
                        <img className="tile-img" src='wm_logo_white.png' alt="windan market logo"></img>
                    </div>
                    <div className="tile-desc div-background">
                        <h2>Windan Market Concept</h2>
                        <div className="project-responsibilities">
                            <h3>Software Developer</h3>
                        </div>
                        <p className="sub-text">JavaScript, HTML, CSS</p>
                    </div>
                </div>
            </div>
        </ section>
    );
};

export default Projects;