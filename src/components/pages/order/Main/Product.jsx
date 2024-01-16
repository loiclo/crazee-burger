import styled from "styled-components";

export default function Product({title, imageSource, price}) {
  return (
    <ProductStyled>
        <div className="image">
            <img src={imageSource} alt={title}/>
        </div>
    <div className="info-text">
        <div className="title">{title}</div>
        <div className="description">
            <div className="price">{price} €</div>
            <button className="add-button">Ajouter</button>
      </div>
    </div>
  </ProductStyled>
  )
}

const ProductStyled = styled.div`
    background: red;
    width: 200px;
    height: 330px;
    display: grid;
    grid-template-rows: 65% 1fr;
    padding-left: 20px;
    padding-right: 20px;


        
        .image{
            border: 1px solid yellow;
            width: 100%;
            height: auto;
            margin-top: 50px;
            
            
            img{
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }

        .info-text{
        border: 1px solid green;
        
        }
`
