import { useState } from 'react';

const Background = () => {
    const [showViasatDesc, setShowViasatDesc] = useState(false);
    const toggleViasatDesc = () => {
        setShowViasatDesc(!showViasatDesc);
    };

    const [showPpgDesc, setShowPpgDesc] = useState(false);
    const togglePpgDesc = () => {
        setShowPpgDesc(!showPpgDesc);
    };

    return ( 
        <section className="background">
            <h1 className="section-title">Industry</h1>
            <div className="corporate-job div-background">
                <div className="job-overview">
                    <img className="job-img viasat" src='viasat.webp' alt="viasat logo" decoding="async" ></img>
                    <div className="job-title">
                        <h2>Viasat</h2>
                        <h3>Systems Integration and Test Engineer</h3>
                        <p className="link" onClick={toggleViasatDesc}>{showViasatDesc ? 'Learn Less \u2191' : 'Learn More \u2193'}</p>
                    </div>
                </div>
                
                <div className={`job-desc ${showViasatDesc ? 'flex' : 'hide'}`}>
                    <h3 className='desc-list'>July 2021 - November 2023</h3>
                    <p className='desc-list'>Spearheaded multiple test efforts for an embeddable modem card stack, ensuring vendors’ implementation met system requirements. Testing ranged from simple physical interface functionality to setting up RF ground antenna assemblies for verification of OTA satellite data transmission.</p>
                    <p className='desc-list'>Supported the testing and integration of various software feature updates for a multi-waveform modem. Testing included in-lab point-to-point and full-mesh network topologies to verify feature functionality such as anti-jamming, comm-on-the-move, and adaptive MODCOD schemes.</p>
                    <p className='desc-list'>Automated FIPS certification testing for a data encryption device, while simultaneously working on a massive overhaul of its verification procedure for easy re-verification in future audits. </p>
                    <p className='desc-list'>Utilized Selenium to automate front-end testing of a Network Control Center web interface; a first-time implementation for this team / product.</p>
                    <p className='desc-list'>Helped implement a python test automation framework that works cross-functionally for the GS ground communications test team, ultimately bridging the gap between physical test devices and automated python scripts.</p>
                </div>
            </div>

            <div className="corporate-job div-background">
                <div className="job-overview">
                    <img className="job-img" src='ppg.png' alt="ppg logo" decoding="async" ></img>
                    <div className="job-title">
                        <h2>PPG Aerospace</h2>
                        <h3>R&D Engineering Intern</h3>
                        <p className="link" onClick={togglePpgDesc}>{showPpgDesc ? 'Learn Less \u2191' : 'Learn More \u2193'}</p>
                    </div>
                </div>

                <div className={`job-desc ${showPpgDesc ? 'flex' : 'hide'}`}>
                    <h3 className='desc-list'>Summers 2018 & 2019</h3>
                    <p className='desc-list'>Worked under technical director to develop successful process parameters for a conductive grid using photo-lithography.</p>
                    <p className='desc-list'>Findings were published internally, presented to executives within the aerospace research division, and are patent pending.</p>
                    <p className='desc-list'>Gained hands-on experience with R&D lab equipment, including optical and scanning electron microscope, sputtering vacuum chamber, precipitation static testing, and electroplating.</p>
                </div>
            </div>
            <h1 className="section-title">Education</h1>
            <div className="degree div-background">
                <img className="tile-img" src='SDSU_seal.png' alt="sdsu seal" decoding="async" ></img>
                <h2>San Diego State University</h2>
                <h3>Electrical Engineering</h3>
                <p className='sub-text'>Emphasis in Communication Systems</p>
            </div>
            <div className="degree div-background">
                <div>
                    <img id="grad-photo" src='grad-photo.jpg' alt="grad" decoding="async" ></img>
                </div>
            </div>
            <div className="tiles">   
                <div className="tile">
                    <a href="https://foundation.sdsu.edu/" target="_blank" rel="noreferrer">
                        <div className='tile-header' id="sdsu-red">
                            <img className="tile-img" src='sdsu-research.jpg' alt="sdsu-research" decoding="async" ></img>
                        </div>
                    </a>
                    <div className="tile-desc div-background">
                        <h2>SDSU Research Foundation</h2>
                        <h3>2020 IoT Intern</h3>
                        <p>Programmed Bluetooth Low Energy (BLE) beacons in embedded C, and correlated RSSI values to physical distance by performing distance and interference testing between beacons. Wrote comprehensive report in IEEE format, and presented findings at 2021 Research Symposium. MCU’s are expected to help primatologists better understand chimpanzee behavior at an animal sanctuary in Congo, Africa.</p>
                    </div>
                </div>

                <div className="tile">
                    <a href="https://aztecelectricracing.sdsu.edu/" target="_blank" rel="noreferrer">
                        <div className='tile-header' id="aer">
                            <img className="tile-img" src='aer.png' alt="aer" decoding="async" ></img>
                        </div>
                    </a>
                    <div className="tile-desc div-background">
                        <h2>AER Senior Design Project</h2>
                        <h3>Team Lead</h3>
                        <p>Collaborated with the Aztec Electric Racing club to build a motor controller for their electric race car.</p>
                    </div>
                </div>

                <div className="tile">
                    <a href="https://mslc.sdsu.edu/" target="_blank" rel="noreferrer">
                        <div className='tile-header' id="mslc">
                            <img className="tile-img" src='mslc.png' alt="mslc" decoding="async" ></img>
                        </div>
                    </a>
                    <div className="tile-desc div-background">
                        <h2>SDSU Math and Stats Learning Center</h2>
                        <h3>Tutor and TA</h3>
                        <p>Tutored students in a variety of courses, ranging from College Algebra to Calculus III. Engaged students by leading weekly problem-solving discussions to promote understanding and collaboration.</p>
                    </div>
                </div>

                <div className="tile">
                    <a href="https://as.sdsu.edu/greenfest/" target="_blank" rel="noreferrer">
                        <div className='tile-header' id="greenfest-green">
                            <img className="tile-img" src='greenfest-logo-white.png' alt="greenfest" decoding="async" ></img>
                        </div>
                    </a>
                    <div className="tile-desc div-background">
                        <h2>GreenFest</h2>
                        <h3>Committee Member</h3>
                        <p>Volunteered to help plan and coordinate the 2017 GreenFest concert.</p>
                    </div>
                </div>

            </div>
        </section>
     );
}
 
export default Background;