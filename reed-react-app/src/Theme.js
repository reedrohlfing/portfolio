import { createGlobalStyle } from 'styled-components';

export const darkTheme = {
  colors: {
    background: 'black',
    button: '#4ca9ff',
    toggle: '#0071e3',
    navbarTitle: 'white',
    navbarBackground: '#141414',
    subTitle: 'white',
    accordionBackground: 'rgb(255,255,255,0.2)',
    subText: 'white',
    tileBackground: '#141414',
    sdsuRed: '#a7192f',
    aer: '#231f20',
    mslc: '#c4c4c4',
    greenfestGreen: '#9DBD6A',
    windanMarket: '#33333b',
  },
  pictures: {
    educationBackground: "sdsu_student_union_dark_extended.jpg",
    viasat: "white",
  },
};

export const lightTheme = {
  colors: {
    background: 'white',
    button: '#4ca9ff',
    toggle: '#0071e3',
    navbarTitle: 'black',
    navbarBackground: '#f5f5f7',
    subTitle: 'white',
    accordionBackground: 'rgb(0,0,0,0.5)',
    subText: 'rgb(29, 29, 31);',
    tileBackground: '#f5f5f7',
    sdsuRed: '#a7192f',
    aer: '#231f20',
    mslc: '#c4c4c4',
    greenfestGreen: '#9DBD6A',
    windanMarket: '#33333b',
  },
  pictures: {
    educationBackground: "sdsu_student_union_extended.jpg",
    viasat: "transparent",
  },
};

export const GlobalStyles = createGlobalStyle`
  html {
    background-color: ${props => props.theme.colors.background};
  }
  h1 {
    color: ${props => props.theme.colors.navbarTitle};
  }
  h2 {
    color: ${props => props.theme.colors.navbarTitle};
  }
  h3 {
    color: ${props => props.theme.colors.navbarTitle};
  }
  h4 {
    color: ${props => props.theme.colors.navbarTitle};
  }
  p {
    color: ${props => props.theme.colors.navbarTitle};
  }
  .navbar {
    color: ${props => props.theme.colors.navbarTitle};
  }
  .accordion {
    background-color: ${props => props.theme.colors.accordionBackground};
  }
  .button:hover {
    border-color: ${props => props.theme.colors.button};
  }
  .accordion-subheader > .accordion-link > h3 {
    color: ${props => props.theme.colors.subTitle};
  }
  .accordion-subheader > .accordion-link > h3: hover {
    color: ${props => props.theme.colors.button};
  }
  .accordion-subsection {
    background-color: ${props => props.theme.colors.navbarBackground};
    color: ${props => props.theme.colors.subText};
  }
  .degree {
    background-color: ${props => props.theme.colors.tileBackground};
  }
  .corporate-job {
    background-color: ${props => props.theme.colors.tileBackground};
  }
  .tile:hover {
    border-color: ${props => props.theme.colors.button};
  }
  .tile-desc {
    background-color: ${props => props.theme.colors.tileBackground};
  }
  .skill-list {
    background-color: ${props => props.theme.colors.tileBackground};
  }
  .spotify-tracklist {
    background-color: ${props => props.theme.colors.tileBackground};
  }
  .contact-info {
    background-color: ${props => props.theme.colors.tileBackground};
  }
  .link {
    color: ${props => props.theme.colors.button};
  }
  #sdsu-red {
    background-color: ${props => props.theme.colors.sdsuRed};
  }
  #aer {
    background-color: ${props => props.theme.colors.aer};
  }
  #mslc {
    background-color: ${props => props.theme.colors.aer};
  }
  #greenfest-green {
    background-color: ${props => props.theme.colors.greenfestGreen};
  }
  #windan {
    background-color: ${props => props.theme.colors.windanMarket};
  }
  .viasat {
    background-color: ${props => props.theme.pictures.viasat};
  }
  .download {
    background-color: transparent;
  }
  .linkedin:hover {
    color: ${props => props.theme.colors.button};
  }
  .theme-switch {
    border-color: ${props => props.theme.colors.toggle};
  }
  .switch-text {
    color: ${props => props.theme.colors.toggle};
  }
  .auto {
    color: white;
    background-color: ${props => props.theme.colors.toggle};
  }
`;