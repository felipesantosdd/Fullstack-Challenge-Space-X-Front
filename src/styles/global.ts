import { TextField } from '@mui/material';
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  body {
    overflow-x: hidden;
    background-image: url('https://wallpapers.com/images/hd/spacex-gray-scale-0epbpm1ma17oaabl.jpg');
    background-size: cover; /* Para ajustar a imagem de fundo ao tamanho da tela */
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: white;

  }
`;
