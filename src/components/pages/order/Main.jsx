import styled from "styled-components";
import { theme } from '/src/theme/index.jsx';


export default function Main() {
  return (
    <Mainstyled>
      <div className="basket">
        Basket
      </div>

      <div className="menu">
        Menu
      </div>
    </Mainstyled>
  )
}

const Mainstyled = styled.div`
background: ${theme.colors.background_white};
flex: 1;
border-bottom-left-radius: ${theme.borderRadius.extraRound};
border-bottom-right-radius: ${theme.borderRadius.extraRound};

display: grid;
grid-template-columns: 25% 1fr;

.basket{
  background: purple;
}

.menu{
  background: blue;
}
`;