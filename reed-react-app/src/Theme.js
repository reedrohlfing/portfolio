import { createGlobalStyle } from 'styled-components';

export const darkTheme = {
  colors: {
    background: 'black',
    button: '#4ca9ff',
    navbarTitle: 'white',
    navbarBackground: '#141414',
    subTitle: 'white',
    accordionBackground: 'rgba(51,51,51,0.9)',
    subText: 'white',
    tileBackground: '#141414',
    sdsuRed: '#a7192f',
    greenfestGreen: '#9DBD6A',
  },
  pictures: {
    educationBackground: "sdsu_student_union_dark_extended.jpg",
  },
};

export const lightTheme = {
  colors: {
    background: 'white',
    button: '#4ca9ff',
    navbarTitle: 'black',
    navbarBackground: '#f5f5f7',
    subTitle: 'white',
    accordionBackground: 'rgba(51,51,51,0.9)',
    subText: 'rgb(29, 29, 31);',
    tileBackground: '#f5f5f7',
    sdsuRed: '#a7192f',
    greenfestGreen: '#9DBD6A',
  },
  pictures: {
    educationBackground: "sdsu_student_union_extended.jpg",
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
    background-color: ${props => props.theme.colors.navbarBackground};
    color: ${props => props.theme.colors.navbarTitle};
  }
  .accordion {
    background-color: ${props => props.theme.colors.accordionBackground};
  }
  .accordion-subheader > .accordion-link > h3 {
    color: ${props => props.theme.colors.subTitle};
  }
  .accordion-link:hover {
    color: ${props => props.theme.colors.button};
  }
  .accordion-subsection {
    background-color: ${props => props.theme.colors.navbarBackground};
    color: ${props => props.theme.colors.subText};
  }
  .degree {
    background-color: ${props => props.theme.colors.tileBackground};
  }
  .tile-desc {
    background-color: ${props => props.theme.colors.tileBackground};
  }
  #sdsu-red {
    background-color: ${props => props.theme.colors.sdsuRed};
  }
  #greenfest-green {
    background-color: ${props => props.theme.colors.greenfestGreen};
  }
`;