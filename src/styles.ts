import { createGlobalStyle } from 'styled-components';

export const colors = {
  primary: '#ffc93f',
};

export const GlobalStyle = createGlobalStyle`
body {
  background: #222;
  color: #fff;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}`;
