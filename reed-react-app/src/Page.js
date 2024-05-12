import { useState, useEffect } from 'react';
import Background from './Background';
import Music from './Music';
import Accordion from './Accordion';
import Contact from './Contact';
import Title from './Title';
import Projects from './Projects';

const Page = () => {
    const [activeSection, setActiveSection] = useState('projects');

    const renderSection = () => {
        switch (activeSection) {
          case 'projects':
            return <Projects />;
          case 'background':
            return <Background />;
          case 'music':
            return <Music />;
          default:
            return <Projects />;
        }
    };

    // Keep accordion at the top on scroll
    useEffect(() => {
      const handleScroll = () => {
          // Check if the user has scrolled to Title
          const accordionPlaceholder = document.querySelector('.accordion-placeholder')
          const accordionDistance = document.querySelector('.main-title').scrollHeight;
          if (window.scrollY > accordionDistance) {
              accordionPlaceholder.classList.remove('hide');
          } else {
              accordionPlaceholder.classList.add('hide');
          }
      };

      window.addEventListener('scroll', handleScroll);
    }, []);

    return (
          <nav className="page">
            <Title />
            <div className='accordion-og'>
              <Accordion activeSection={activeSection} setActiveSection={setActiveSection} />
            </div>
            <div className='accordion-placeholder hide'>
              <Accordion activeSection={activeSection} setActiveSection={setActiveSection} />
            </div>
            
            <div className="section-content">
              {renderSection()}
            </div>
            <Contact />
          </nav>
      );
}
 
export default Page;