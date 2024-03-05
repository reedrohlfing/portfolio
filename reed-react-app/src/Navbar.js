import React, { useEffect } from 'react';

const Navbar = () => {
    function handleNameClick() {
        window.location.reload();
    }
    useEffect(() => {
        const handleScroll = () => {
            // Check if the user has scrolled to Title
            const title = document.querySelector('.section-title')
            const titlePlaceholder = document.querySelector('.title-placeholder')
            const titleDistance = document.querySelector('.navbar').scrollHeight + document.querySelector('.accordion').scrollHeight+20;
            if (window.scrollY > titleDistance) {
                titlePlaceholder.classList.remove('hide');
                title.classList.add('transparent');
            } else {
                titlePlaceholder.classList.add('hide');
                title.classList.remove('transparent');
            }
        };

        window.addEventListener('scroll', handleScroll);
    }, []);

    return ( 
        <nav className="navbar">
            <div className="name-background">
                <p className='name-text' onClick={handleNameClick}>Reed Rohlfing</p>
            </div>
            <div className="download-resume">
                <a className="download-button" href="https://drive.google.com/uc?export=download&id=1Lv7nX1YFuRRJ5PlWumife6fKR4cLm0S-">
                    <img className="button download" src="https://img.icons8.com/ios/150/4ca9ff/download--v1.png" alt="download"/>
                </a>
            </div>
        </nav>
     );
}
 
export default Navbar;
