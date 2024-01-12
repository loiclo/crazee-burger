import styled from "styled-components";
import { theme } from '/src/theme/index.jsx';


export default function Main() {
  return (
    <Mainstyled></Mainstyled>
  )
}

const Mainstyled = styled.div`
background: green;
flex: 1;
border-bottom-left-radius: ${theme.borderRadius.extraRound};
border-bottom-right-radius: ${theme.borderRadius.extraRound};
`;