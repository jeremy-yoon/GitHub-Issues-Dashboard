import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
  font-family: "San Francisco";
  font-weight: 400;
  src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff");
}

@font-face {
  font-family: "San Francisco";
  font-weight: 700;
  src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-bold-webfont.woff");
}



  * {
    box-sizing: border-box;
  }

  :root {
  height: 100%;
}

html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
}



  a {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  input {
    outline: none;
    margin: 0;
  }

  button {
    background-color: transparent;
    cursor: pointer;
    padding: 0;
    margin: 0; 
    border: none;
  }

  svg, image, video {
    vertical-align: top;
  }

  
`;
