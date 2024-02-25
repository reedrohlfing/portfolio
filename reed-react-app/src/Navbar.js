import React, { useEffect } from 'react';

const handleScroll = (event) => {
    const colorHeader = document.querySelector('.color-header')
    const greenSection = colorHeader.querySelector('.green-section');

    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const scrollPercent = scrollTop / windowHeight;
    const animationThreshold = windowHeight - 200;

    if (scrollTop >= animationThreshold) {
        // Remove animation from header sections
          greenSection.style.animation = 'none';

      } else {
        // Add animation to header sections
          greenSection.style.animation = 'changeHeight 2s ease infinite';
      }
}

const Navbar = () => {
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      



    return ( 
        <nav className="navbar">
            <div className="reed-header">
                <section className="header-section red-section">
                    <h1 className="light-font">R</h1>
                </section>
                <section className="header-section green-section">
                    <h1 className="light-font">D</h1>
                </section>
                <section className="header-section blue-section">
                    <h1 className="light-font">R</h1>
                </section>
            </div>
            <div className="color-header">
                <section className="header-section red-section">
                </section>
                <section className="header-section green-section">
                </section>
                <section className="header-section blue-section">
                </section>
            </div>
            <h1>Reed's NavBar</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/projects" style={{
                    color: 'green',
                }}>Projects</a>
            </div>
        </nav>
     );
}
 
export default Navbar;