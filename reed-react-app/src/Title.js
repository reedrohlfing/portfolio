import React from 'react';

const Title = () => {
    function handleNameClick() {
        window.location.reload();
    }

    return ( 
        <nav className="main-title">
            <div className="name-background">
                <p className='name-text' onClick={handleNameClick}>Reed Rohlfing</p>
            </div>
        </nav>
     );
}
 
export default Title;
