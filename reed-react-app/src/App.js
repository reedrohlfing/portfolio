import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './Theme';
import Navbar from './Navbar';
import Page from './Page';

function App() {

  const [theme, setTheme] = useState('auto');

  // Function to toggle between light and dark themes
  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    let themeSwitches = document.querySelectorAll('.switch-text');
    themeSwitches.forEach(themeSwitch => {
      if (themeSwitch.getAttribute('data-value') === newTheme) {
        themeSwitch.style.backgroundColor = '#0071e3';
        themeSwitch.style.color = 'white'
      }
      else {
        themeSwitch.style.backgroundColor = 'transparent';
        themeSwitch.style.color = '#0071e3'
      }
    })
  };

  // Determine the preferred theme based on user preference or default to light theme
  const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const preferredTheme = theme === 'auto' ? (prefersDarkMode ? darkTheme : lightTheme) : (theme === 'dark' ? darkTheme : lightTheme);
  

  return (
    <ThemeProvider theme={preferredTheme}>
      <GlobalStyles />
      <div className="App">
        <Navbar />
        <div className="content">
          <Page />
          
          {/* Light/Dark/Auto mode switch */}
          <div className='footer'>
            <div className="theme-switch">
                <div className='switch-text light' data-value='light' onClick={()=>toggleTheme('light')}>Light</div>
                <div className='switch-text dark' data-value='dark' onClick={()=>toggleTheme('dark')}>Dark</div>
                <div className='switch-text auto' data-value='auto' onClick={()=>toggleTheme('auto')}>Auto</div>
            </div>
          </div>
          
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
