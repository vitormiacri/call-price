import { createGlobalStyle } from 'styled-components';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    min-height: 100vh !important;    
    background: linear-gradient(45deg,rgba(33,79,124,1) 0%,rgba(33,79,124,1) 50%,rgba(124,170,215,1) 100%);
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;

  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  


`;
