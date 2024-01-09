import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NavbarRightSide({username}) {
  return (
    <NavbarRightSideStyled>
    right 
      <h1> Hey, {username}</h1>
      <Link to="/">
      <button>Se déconnecter</button>
      </Link>
    </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`
  background: purple;
`;
