import { createGlobalStyle , styled } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background: #eee;
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyles;

export const CenteredDiv = styled.div`
  display: flex;
  justify-content: center; /* centraliza na horizontal */
  align-items: center; /* centraliza na vertical */
  height: 100vh; /* ocupa a tela toda */
`;
