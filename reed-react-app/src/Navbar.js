import Name from './Name';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <Name />
            <div className="download-resume">
                <a className="download-button" href="https://drive.google.com/uc?export=download&id=1Lv7nX1YFuRRJ5PlWumife6fKR4cLm0S-">
                    <img className="button" src="https://img.icons8.com/ios/150/4ca9ff/download--v1.png" alt="download"/>
                </a>
            </div>
        </nav>
     );
}
 
export default Navbar;

