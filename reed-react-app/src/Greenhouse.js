const Greenhouse = () => {
    function toEmailVerify() {
        const element = document.getElementById("greenhouse_email_verify");
        element.scrollIntoView({ block: "center" });
    }
    return (
        <section className="windan">
            <h1 className="section-title">Greenhouse Proposal</h1>
            <div className="project-what div-background">
                <h1>What?</h1>
                <h3 className="what-description">
                    I proposed an Applicant Portal for 
                    <a href="https://greenhouse.com/" target="_blank" rel="noreferrer" className="link"> Greenhouse &#x2197;</a>
                </h3>
                <p className="windan-subtext sub-text">I am unaffiliated with Greenhouse.</p>
            </div>

            <div className="project-why div-background">
                <h1>Why?</h1>
                <div className="why-description">
                    <p>
                        Greenhouse is a growing leader in hiring and onboarding software. 
                        They have helped revolutionize the application process for 
                        many companies, as well as their applicants. By removing the need 
                        for a login, Greenhouse has drastically reduced the amount of 
                        time taken for an applicant to apply to a position.
                    </p>
                    <p>
                        The fall back of not creating a company-specific login is that candidates 
                        can't see the status of their application after they apply. To remedy this, I designed 
                        an Applicant Portal in theme with the Greenhouse style. Below, you'll get a 
                        glimpse of how an applicant could track the status of their applications industry-wide.
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
            </div>

            <div className="project-details project-greenhouse">
                <h1 className="project-greenhouse">Design Elements</h1>

                <div className="details-section">
                    <div className="product-page-views">
                        <div className="horizontal-product-view-div">
                            <img 
                                src="1_greenhouse_landing.PNG" 
                                alt="greenhouse-landing-page" 
                                className="horizontal-product-view project-greenhouse" 
                                decoding="async">
                            </img>
                            <img 
                                src="2_greenhouse_verify.PNG" 
                                alt="greenhouse-verify-page" 
                                className="horizontal-product-view project-greenhouse" 
                                decoding="async">
                            </img>
                            <img 
                                src="3_greenhouse_load.PNG" 
                                alt="greenhouse-load-page" 
                                id="greenhouse_email_verify"
                                className="horizontal-product-view project-greenhouse" 
                                decoding="async">
                            </img>
                        </div>
                        <p className="project-greenhouse windan-text">
                            An intuitive verification process to access applications 
                            associated with an email address.
                        </p>
                    </div>
                </div>

                <div className="details-section">
                    <div className="product-page-views">
                        <img 
                            src="4_greenhouse_applicantDashboard.PNG" 
                            alt="greenhouse_applicant_dash" 
                            className="horizontal-product-view project-greenhouse" 
                            decoding="async" 
                        >
                        </img>
                        <p className="project-greenhouse windan-text">
                            The Job dashboard tab showcases an overview of recent 
                            application status', location, date applied, and similar metrics.
                        </p>
                    </div>
                </div>

                <div className="details-section">
                    <div className="product-page-views">
                        <img 
                            src="5_greenhouse_applications.PNG" 
                            alt="greenhouse_applicantions" 
                            className="horizontal-product-view project-greenhouse" 
                            decoding="async" 
                        >
                        </img>
                        <p className="project-greenhouse windan-text">
                            The Applications tab enables users to filter, sort, and export their 
                             applications from all of the companies that utilize Greenhouse.
                        </p>
                    </div>
                </div>

                <div className="details-section">
                    <div className="product-page-views">
                        <img 
                            src="6_greenhouse_archived.PNG" 
                            alt="greenhouse_archived" 
                            className="horizontal-product-view project-greenhouse" 
                            decoding="async" 
                        >
                        </img>
                        <p className="project-greenhouse windan-text">
                            Applicants can archive applications that are no longer relevant.
                        </p>
                    </div>
                </div>

            </div>

            <div className="project-details">
                <h1>Technical Elements</h1>

                <div className="details-section">
                    <div className="code-view">
                        <img 
                            src="greenhouse_loader_code.PNG" 
                            alt="loader-code" 
                            className="code" 
                            decoding="async" 
                        ></img>
                        <div className="windan-text">
                            A template slide loader crafted using CSS Keyframes and animation. 
                            It's pictured under "Gathering applications..." in the 
                            <p 
                                onClick={toEmailVerify} 
                                className="link" 
                                style={{margin: 0, display: 'inline'}}
                            > email verification process&#x2197;</p>
                        </div>
                        
                    </div>
                </div>

                <div className="details-section">
                    <div className="code-view">
                        <img 
                            src="greenhouse_datagrid_code.PNG" 
                            alt="datagrid-code" 
                            className="code" 
                            decoding="async" 
                        ></img>
                        <p className="windan-text">
                            A
                            <a 
                                href="https://mui.com/x/react-data-grid/" 
                                className="link"
                                target="_blank" 
                                rel="noreferrer"
                            > Material UI DataGrid&#x2197; </a>
                            to organize and filter applications.
                        </p>
                    </div>
                </div>

                <div className="details-section">
                    <div className="code-view">
                        <img 
                            src="greenhouse_googleMap_code.PNG" 
                            alt="googleMap-code" 
                            className="code" 
                            decoding="async" 
                        ></img>
                        <p className="windan-text">
                            Leveraged
                            <a 
                                href="https://developers.google.com/maps/documentation/javascript" 
                                className="link"
                                target="_blank" 
                                rel="noreferrer"
                            > Google Maps API&#x2197; </a>
                            to map and display job locations.
                        </p>
                    </div>
                </div>

                {/* <div className="details-section">
                    <p className="windan-text">
                        If this proposal is something you'd also like to see implemented, 
                        feel free to share this with the people at Greenhouse. I, unfortunately, 
                        was unable to get this into the right hands.
                    </p>
                </div> */}

            </div>

        </ section>
    );
};

export default Greenhouse;
