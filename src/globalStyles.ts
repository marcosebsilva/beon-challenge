import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    border: none;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Nunito', sans-serif;
  }

  body {
   background-color: #f5f5f5;
  }
  
  button {
    cursor: pointer;
  }

  input {
    background-color: #f5f5f5;
    height: 30px;
    border-radius: 10px;

  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
