import { useState } from 'react';
import Code from './Code';
import Education from './Education';
import Industry from './Industry';
import Music from './Music';
import Stack from './Stack';
import Accordion from './Accordion';
import Contact from './Contact';

const Page = () => {
    const [activeSection, setActiveSection] = useState(null);

    const renderSection = () => {
        switch (activeSection) {
          case 'education':
            return <Education />;
          case 'industry':
            return <Industry />;
          case 'stack':
            return <Stack />;
          case 'code':
            return <Code />;
          case 'music':
            return <Music />;
          default:
            return <Contact />;
        }
    };

    return (
          <nav className="page">
            <Accordion setActiveSection={setActiveSection} />
            <div className="section-content">
              {renderSection()}
            </div>
          </nav>
      );
}
 
export default Page;