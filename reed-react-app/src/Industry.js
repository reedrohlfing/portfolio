import React, { useState } from 'react';

const Industry = () => {
    const [showViasatDesc, setShowViasatDesc] = useState(false);
    const toggleViasatDesc = () => {
        setShowViasatDesc(!showViasatDesc);
    };

    const [showPpgDesc, setShowPpgDesc] = useState(false);
    const togglePpgDesc = () => {
        setShowPpgDesc(!showPpgDesc);
    };

    return ( 
        <section className="industry">
            <h1 className="title-placeholder hide">Industry Experience</h1>
            <h1 className="section-title">Industry</h1>
            <div className="corporate-job">
                <div className="job-overview">
                    <img className="job-img viasat" src='viasat.webp' alt="viasat logo"></img>
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

            <div className="corporate-job">
                <div className="job-overview">
                    <img className="job-img" src='ppg.png' alt="ppg logo"></img>
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
        </section>
     );
}
 
export default Industry;
