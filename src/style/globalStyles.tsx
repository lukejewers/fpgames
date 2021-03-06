import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Roboto", Sans-Serif;
    overflow-x: none;
  };
 
 h1{
   font-size: 1.75rem;
 }

 .embed { overflow: visible; }
`;

export default GlobalStyles;
