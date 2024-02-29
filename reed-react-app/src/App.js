import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './Theme';
import Navbar from './Navbar';
import Page from './Page';

function App() {
  const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const preferredTheme = prefersDarkMode ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={preferredTheme}>
      <GlobalStyles />
      <div className="App">
        <Navbar />
        <div className="content">
          <Page />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
