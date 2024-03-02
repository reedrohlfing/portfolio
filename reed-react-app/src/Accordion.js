const Accordion = ({ setActiveSection }) => {
    const toggleCategory = (category) => {
        setActiveSection(category);
    };

    function changeIcon(category) {
        document.getElementById(category).src = category+"-filled.png";
    }
    function resetIcon(category) {
        document.getElementById(category).src = category+"-filled.png";
    }

    return ( 
        <nav className="accordion">
            <section onClick={() => toggleCategory('education')}>
                <div className="accordion-subheader" onMouseOver={() => changeIcon('education')} onMouseOut={() => resetIcon('education')}>
                    <div className="accordion-link">
                        <img id="education" className="button" src="education-filled.png" alt='https://img.icons8.com/ios/150/878787/education.png'></img>
                        <h3>education</h3>
                    </div>
                </div>
            </section>
            <section onClick={() => toggleCategory('industry')}>
                <div className="accordion-subheader" onMouseOver={() => changeIcon('industry')} onMouseOut={() => resetIcon('industry')}>
                    <div className="accordion-link">
                        <img id="industry" className="button" src="industry-filled.png" alt='https://img.icons8.com/ios/150/878787/business--v1.png'></img>
                        <h3>industry</h3>
                    </div>
                </div>
            </section>
            <section onClick={() => toggleCategory('stack')}>
                <div className="accordion-subheader" onMouseOver={() => changeIcon('stack')} onMouseOut={() => resetIcon('stack')}>
                    <div className="accordion-link">
                        <img id="stack" className="button" src="stack-filled.png" alt='https://img.icons8.com/ios/150/878787/stack.png'></img>
                        <h3>stack</h3>
                    </div>
                </div>
            </section>
            <section onClick={() => toggleCategory('code')}>
                <div className="accordion-subheader" onMouseOver={() => changeIcon('code')} onMouseOut={() => resetIcon('code')}>
                    <div className="accordion-link">
                        <img id="code" className="button" src="code-filled.png" alt='https://img.icons8.com/ios/150/878787/code--v1.png'></img>
                        <h3>code</h3>
                    </div>
                </div>
            </section>
            <section onClick={() => toggleCategory('music')}>
                <div className="accordion-subheader" onMouseOver={() => changeIcon('music')} onMouseOut={() => resetIcon('music')}>
                    <div className="accordion-link">
                        <img id="music" className="button" src="music-filled.png" alt="https://img.icons8.com/ios/150/878787/spotify--v1.png"></img>
                        <h3>sound</h3> 
                    </div>
                </div>
            </section>
        </nav>
     );
}
 
export default Accordion;