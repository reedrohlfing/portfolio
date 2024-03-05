const Education = () => {
    return ( 
        <section className="education">
            <h1 className="title-placeholder hide">Education</h1>
            <h1 className="section-title">Education</h1>
            <div className="degree">
                <img className="tile-img" src='SDSU_seal.png' alt="sdsu seal"></img>
                <h2>San Diego State University</h2>
                <h3>Electrical Engineering</h3>
                <h3>Class of 2020</h3>
                <p>Emphasis in Communication Systems</p>
            </div>
            <div className="degree">
                <div>
                    <img id="grad-photo" src='grad-photo.jpg' alt="grad"></img>
                </div>
            </div>
            <div className="tiles">   
                <div className="tile">
                    <a href="https://foundation.sdsu.edu/" target="_blank" rel="noreferrer">
                        <div className='tile-header' id="sdsu-red">
                            <img className="tile-img" src='sdsu-research.jpg' alt="sdsu-research"></img>
                        </div>
                    </a>
                    <div className="tile-desc">
                        <h2>SDSU Research Foundation</h2>
                        <h3>2020 IoT Intern</h3>
                        <p>Programmed Bluetooth Low Energy (BLE) beacons in embedded C, and correlated RSSI values to physical distance by performing distance and interference testing between beacons. Wrote comprehensive report in IEEE format, and presented findings at 2021 Research Symposium. MCU’s are expected to help primatologists better understand chimpanzee behavior at an animal sanctuary in Congo, Africa.</p>
                    </div>
                </div>

                <div className="tile">
                    <a href="https://www.aztecelectricracing.com/" target="_blank" rel="noreferrer">
                        <div className='tile-header' id="aer">
                            <img className="tile-img" src='aer.png' alt="aer"></img>
                        </div>
                    </a>
                    <div className="tile-desc">
                        <h2>AER Senior Design Project</h2>
                        <h3>Team Lead</h3>
                        <p>Collaborated with the Aztec Electric Racing club to build a motor controller for their electric race car.</p>
                    </div>
                </div>

                <div className="tile">
                    <a href="https://mslc.sdsu.edu/" target="_blank" rel="noreferrer">
                        <div className='tile-header' id="mslc">
                            <img className="tile-img" src='mslc.png' alt="mslc"></img>
                        </div>
                    </a>
                    <div className="tile-desc">
                        <h2>SDSU Math and Stats Learning Center</h2>
                        <h3>Tutor and TA</h3>
                        <p>Tutored students in a variety of courses, ranging from College Algebra to Calculus III.</p>
                    </div>
                </div>

                <div className="tile">
                    <a href="https://as.sdsu.edu/greenfest/" target="_blank" rel="noreferrer">
                        <div className='tile-header' id="greenfest-green">
                            <img className="tile-img" src='greenfest-logo-white.png' alt="greenfest"></img>
                        </div>
                    </a>
                    <div className="tile-desc">
                        <h2>GreenFest</h2>
                        <h3>Committee Member</h3>
                        <p>Volunteered to help plan and coordinate the 2017 GreenFest concert.</p>
                    </div>
                </div>

            </div>
        </section>
     );
}
 
export default Education;