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
    subText: 'rgb(255,255,255,0.6)',
    tileBackground: '#141414',
    sdsuRed: '#a7192f',
    aer: '#231f20',
    mslc: '#c4c4c4',
    greenfestGreen: '#9DBD6A',
    windanMarket: '#33333b',
    five: '#4800FF',
    inProgFont: 'black',
    inProgBackground: '#04CA00',
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
    subTitle: 'black',
    accordionBackground: 'rgb(0,0,0,0.1)',
    subText: 'rgb(0,0,0,0.4)',
    tileBackground: '#f5f5f7',
    sdsuRed: '#a7192f',
    aer: '#231f20',
    mslc: '#c4c4c4',
    greenfestGreen: '#9DBD6A',
    windanMarket: '#33333b',
    five: '#4800FF',
    inProgFont: 'white',
    inProgBackground: '#04CA00',
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
  .main-title {
    color: ${props => props.theme.colors.navbarTitle};
  }
  // .section-title {
  //   background-color: ${props => props.theme.colors.tileBackground};
  // }
  .accordion {
    // background-color: ${props => props.theme.colors.accordionBackground};
    // border: 1px solid ${props => props.theme.colors.navbarTitle};
  }
  .activeTab {
    background-color: ${props => props.theme.colors.tileBackground};
    // border: 1px solid ${props => props.theme.colors.navbarTitle};
  }
  .activeTab > .accordion-subheader > .accordion-link > h3 {
    color: ${props => props.theme.colors.subTitle};
  }
  .button:hover {
    border-color: ${props => props.theme.colors.button};
  }
  // .accordion-subheader > .accordion-link > h3 {
  //   color: ${props => props.theme.colors.background};
  // }
  // .accordion-subheader > .accordion-link > h3: hover {
  //   color: ${props => props.theme.colors.button};
  // }
  .accordion-subheader: hover {
    background-color: ${props => props.theme.colors.navbarBackground};
  }
  #in-progress {
    font-size: 14px;
    border-radius: 11px;
    background-color: ${props => props.theme.colors.inProgBackground};
    color: ${props => props.theme.colors.inProgFont};
    padding: 7px;
    margin-bottom: 25px;
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
  .sub-text {
    font-size: 12px;
    color: ${props => props.theme.colors.subText};
  }
  .skill-list {
    background-color: ${props => props.theme.colors.tileBackground};
  }
  .spotify-tracklist {
    background-color: ${props => props.theme.colors.tileBackground};
  }
  .contact {
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
  #five {
    background-color: ${props => props.theme.colors.five};
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
  .footer {
    background-color: ${props => props.theme.colors.tileBackground};
  }
`;