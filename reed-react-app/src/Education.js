import { useTheme } from 'styled-components';

const Education = () => {
    const theme = useTheme();
    return ( 
        <section className="education">
            {/* <img className="background-img" src={theme.pictures.educationBackground}></img> */}
            <h1>Education</h1>
            <div className="degree">
                <img className="tile-img" src='SDSU_seal.png' alt="sdsu seal"></img>
                <h2>San Diego State University '20</h2>
                <h3>Electrical Engineering</h3>
                <p>Emphasis in Communication Systems</p>
            </div>
            <div className="sdsu-tiles">   
                <div>
                    <a href="https://foundation.sdsu.edu/" target="_blank">
                        <div className='tile-header' id="sdsu-red">
                            <img className="tile-img" src='sdsu-research.jpg' alt="sdsu-research logo"></img>
                        </div>
                    </a>
                    <div className="tile-desc">
                        <h2>SDSU Research Foundation</h2>
                        <h3>2020 IoT Intern</h3>
                        <p>Collaborated with graduate student to program Bluetooth Low Energy beacons in embedded C. Correlated RSSI values to physical distance by performing distance and interference testing between beacon. Wrote comprehensive report in IEEE format, and presented findings at 2021 Research Symposium. MCU’s are expected to help primatologists better understand chimpanzee behavior at an animal sanctuary in Congo, Africa.</p>
                    </div>
                </div>

                <div>
                    <a href="https://as.sdsu.edu/greenfest/" target="_blank">
                        <div className='tile-header' id="greenfest-green">
                            <img className="tile-img" src='greenfest-logo-white.png' alt="greenfest logo"></img>
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