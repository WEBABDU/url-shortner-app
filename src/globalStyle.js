import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
  }

  body{
  margin: 0;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  .container{
   width: 100%;
   max-width: 900px;
   margin: 0 auto;
   padding: 0 1.5rem;
  }

`;

export default GlobalStyle;
