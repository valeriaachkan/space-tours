import { createGlobalStyle } from 'styled-components';
// import BulletOutline from '../assets/dot-outline.svg';
// import Bullet from '../assets/dot.svg';

export default createGlobalStyle`
* {
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    margin: 0;
  }
  
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    // max-width: 1440px;
    // margin: 0 auto;
  }
  
  main {
    flex: 1 0 auto;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
  
  a {
    text-decoration: none;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  h1 {
    color: #fff;
    text-align: center;
    font-family: 'Syne', sans-serif;
    font-size: 48px;
    font-weight: 800;
    text-transform: uppercase;
  }

  h2 {
    color: #fff;
    font-family: 'Syne', sans-serif;
    font-size: 310px;
    font-weight: 800;
    text-transform: uppercase;
  }

  h3 {
    color: #1E1E1E;    
    font-family: 'Syne', sans-serif;
    font-size: 32px;
    font-weight: 800;
    text-transform: uppercase;
  }

  h4 {
    color: #1E1E1E;
    font-family: 'Syne', sans-serif;
    font-size: 24px;
    font-weight: 700;
    text-transform: uppercase;
  }

  p {
    color: #556B84;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 300;
  }



`;
