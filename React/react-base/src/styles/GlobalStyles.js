import 'react-toastify/dist/ReactToastify.css';
import { createGlobalStyle, styled } from 'styled-components';
import * as colors from '../config/colors';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box
  }

  body {
    font-family: sans-serif;
    background: ${colors.primaryDarkColor};
    color: ${colors.primaryColor};
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background: ${colors.primaryColor};
    border: none;
    color: #fff;
    padding: 0.625rem 1.25rem;
    border-radius: 0.25rem;
    font-weight: 777;
  }

  a {
    text-decoration: none;
    color: ${colors.primaryColor};
  }

  ul {
    list-style: none;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background: ${colors.successColor}
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background: ${colors.errorColor}
  }
`;

export default GlobalStyles;

export const CenteredDiv = styled.div`
  display: flex;
  justify-content: center; /* centraliza na horizontal */
  align-items: center; /* centraliza na vertical */
  height: 100vh; /* ocupa a tela toda */
`;
