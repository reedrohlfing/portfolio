import { useState, useEffect, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./Theme";
import Page from "./Page";
import Contact from "./Contact";

function App() {
  const port = process.env.PORT || 6001;
  const [theme, setTheme] = useState("auto");
  const [showSplash, setShowSplash] = useState(true);
  const splashRef = useRef(null);

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    let themeSwitches = document.querySelectorAll(".switch-text");
    themeSwitches.forEach((themeSwitch) => {
      if (themeSwitch.getAttribute("data-value") === newTheme) {
        themeSwitch.style.backgroundColor = "#0071e3";
        themeSwitch.style.color = "white";
      } else {
        themeSwitch.style.backgroundColor = "transparent";
        themeSwitch.style.color = "#0071e3";
      }
    });
  };

  const prefersDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const preferredTheme = darkTheme;

  useEffect(() => {
    const splashEl = splashRef.current;
    const rows = 4;
    const cols = 4;
    const boxes = [];

    // Create grid and track coordinates
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const box = document.createElement("div");
        box.classList.add("grid-box");
        splashEl.appendChild(box);
        boxes.push({ box, row, col });
      }
    }

    // Group boxes by diagonal (row + col)
    const diagonalMap = new Map();
    boxes.forEach(({ box, row, col }) => {
      const key = row + col;
      if (!diagonalMap.has(key)) diagonalMap.set(key, []);
      diagonalMap.get(key).push(box);
    });

    const diagonalKeys = Array.from(diagonalMap.keys()).sort((a, b) => a - b);
    const delayBetweenDiagonals = 100;

    // Step 1: Diagonal flash in
    diagonalKeys.forEach((key, i) => {
      setTimeout(() => {
        diagonalMap.get(key).forEach((box) => {
          box.classList.add("flash");
          setTimeout(() => box.classList.remove("flash"), 100);
        });
      }, i * delayBetweenDiagonals);
    });

    // Step 2: Fill permanent white diagonally in reverse
    diagonalKeys
      .slice()
      .reverse()
      .forEach((key, i) => {
        setTimeout(() => {
          diagonalMap.get(key).forEach((box) => {
            box.classList.add("flash-perm");
          });
        }, (diagonalKeys.length + i) * delayBetweenDiagonals);
      });

    // Step 3: Fade all to black
    const fadeToBlackStart =
      delayBetweenDiagonals * diagonalKeys.length * 2 + 300;

    setTimeout(() => {
      boxes.forEach(({ box }) => {
        box.classList.remove("flash-perm");
        box.classList.add("fade-to-black");
      });
    }, fadeToBlackStart);

    // Step 4: Remove splash after fade
    const splashEnd = fadeToBlackStart + 600;

    const timer = setTimeout(() => {
      setShowSplash(false);
    }, splashEnd);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={preferredTheme}>
      <GlobalStyles />
      <div className="App">
        {showSplash && <div ref={splashRef} className="splash-grid"></div>}
        <div className="content grid-background">
          <Page />
          <h1 className="scroll-to-top link" onClick={scrollToTop}>
            &#x2191;
          </h1>
          <Contact />
          <div className="footer div-background"></div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
