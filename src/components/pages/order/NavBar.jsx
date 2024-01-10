import styled from "styled-components";
import NavbarRightSide from "./NavbarRightSide";
import Logo from "/src/components/reusable-ui/Logo";
import { theme } from '/src/theme/index.jsx';

export default function NavBar({ username }) {
    
  return (
    <NavbarStyled>
      <Logo/>
      <NavbarRightSide/>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
  background: ${theme.colors.white};
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  //align-items: center;

  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};

`;