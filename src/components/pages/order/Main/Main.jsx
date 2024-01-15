import styled from "styled-components";
import { theme } from '/src/theme/index.jsx';
import Menu from "./Menu";


export default function Main() {
  return (
    <Mainstyled>
      {/* <div className="basket">
        Basket
      </div> */}
      <Menu/>
    </Mainstyled>
  )
}

const Mainstyled = styled.div`
background: ${theme.colors.background_white};
flex: 1;
border-bottom-left-radius: ${theme.borderRadius.extraRound};
border-bottom-right-radius: ${theme.borderRadius.extraRound};

display: grid;
grid-template-columns: 1fr;
/* grid-template-columns: 25% 1fr; use this when Basket will be needed */
overflow-y: scroll;

.basket{
  background: purple;
}
`;