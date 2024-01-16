import { useState } from "react";
import styled from "styled-components";
import {fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { theme } from '/src/theme/index.jsx';
import Product from "./Product";

export default function Menu() {
    const [menu, setMenu] = useState(fakeMenu2)
    
  return (
    <MenuStyled className="menu">
        {menu.map((produit) => {
            return <Product title={produit.title} imageSource={produit.imageSource} price={produit.price} />
        })}
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

    .produit{
      background: red;
      width: 240px;
      height: 330px;

      .image{
      border: 1px solid fuchsia;
      width: 100px;
      height: auto;
      /* width: 200px;
      height: 145px; */
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .description{
      border: 1px solid fuchsia;
      }
    }
`;