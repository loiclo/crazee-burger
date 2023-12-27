import Logo from "../../reusable-ui/Logo";
import LoginForm from "./LoginForm";
import styled from 'styled-components';

export default function LoginPage() {
  //affichage (render)
  return ( 
    <LoginPageStyled>
      <Logo/>
      <LoginForm/>
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    content: "";
    background: url("/images/burger-and-fries-background.jpg") rgba(0, 0, 0, 0.5);
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;