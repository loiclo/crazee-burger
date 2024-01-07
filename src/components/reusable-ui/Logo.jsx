import styled from 'styled-components';
import { theme } from '/src/theme/index.jsx';

export default function Logo() {
  return (
    <LogoStyled>
      <h1>Crazee</h1>
      <img src="/images/logo-orange.png" alt="logo-crazee-burger" />
      <h1>Burger</h1>
    </LogoStyled>
  )
}


const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  transform: scale(2.5); 
  position: relative;

  h1{
    display: inline;
    text-align: center;
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.P4};
    line-height: 1em;
    font-weight: ${theme.weights.bold};
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-family: 'Amatic SC', cursive;
  }

  img{
    object-fit: contain;
    object-position: center;
    height: 60px;
    width: 80px;
    margin: 0 5px;
  }
  `
