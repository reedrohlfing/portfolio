import { useState, useEffect } from 'react';
import Background from './Background';
import Music from './Music';
import Accordion from './Accordion';
import Title from './Title';
import Projects from './Projects';
import Windan from './Windan';

const Page = () => {
    const [activeSection, setActiveSection] = useState('projects');

    const renderSection = () => {
        switch (activeSection) {
          case 'projects':
            return <Projects setActiveSection={setActiveSection} />;
          case 'background':
            return <Background />;
          case 'music':
            return <Music />;
          case 'windan':
            return <Windan />;
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
          </nav>
      );
}
 
export default Page;