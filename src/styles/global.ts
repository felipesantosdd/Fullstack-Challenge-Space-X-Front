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
    background-image: url('https://static.vecteezy.com/ti/vetor-gratis/p3/6413041-pink-gradient-pastle-soft-abstract-background-you-can-use-this-background-for-your-content-like-as-technology-video-game-promotion-card-banner-sports-presentation-website-mais-vetor.jpg');
    background-size: auto; /* Para ajustar a imagem de fundo ao tamanho da tela */
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: white;
  }
`;
