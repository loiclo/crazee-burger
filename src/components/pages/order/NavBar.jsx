import styled from "styled-components";
import NavbarRightSide from "./NavbarRightSide";
import Logo from "/src/components/reusable-ui/Logo";

export default function NavBar({ username }) {
    
  return (
    <NavbarStyled>
    <Logo/>
      <div className="left-side"></div>
      <NavbarRightSide/>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
  background: blue;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  //align-items: center;

  .left-side{
    background: pink;
  }
`;