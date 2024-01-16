import { useState } from "react";
import styled from "styled-components";
import {fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { theme } from '/src/theme/index.jsx';
import Card from "./Card";
import { formatPrice } from "../../../../utils/maths";

export default function Menu() {
    const [menu, setMenu] = useState(fakeMenu2)
    
  return (
    <MenuStyled className="menu">
        {menu.map(({title, imageSource, price}) => (
              <Card
               title={title}
               imageSource={imageSource}
               leftDescription={formatPrice(price)}
               />
        ))}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
`;