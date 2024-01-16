import styled from "styled-components";
import { theme } from '/src/theme/index.jsx';
import PrimaryButton from "../../../reusable-ui/PrimaryButton";

export default function Product({title, imageSource, price}) {
  return (
    <CardStyled>
        <div className="image">
            <img src={imageSource} alt={title}/>
        </div>
    <div className="text-info">
        <div className="title">{title}</div>
        <div className="description">
            <div className="left-description">{price} €</div>
            <div className="right-desciption">
              <PrimaryButton className="primary-button" label={"Ajouter"}/> 
            </div>
      </div>
    </div>
  </CardStyled>
  )
}

const CardStyled = styled.div`
  background: ${theme.colors.white};
  width: 200px;
  height: 300px;
  display: grid;
  grid-template-rows: 65% 1fr;
  padding: 20px;
  padding-bottom: 10px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  border-radius: ${theme.borderRadius.extraRound};

  .image {
    width: 100%;
    height: auto;
    margin-top: 30px;
    margin-bottom: 20px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .text-info{
    display: grid;
    grid-template-rows: 30% 70%;
    padding: 5px;

    .title {
      margin: auto 0;
      font-size: ${theme.fonts.P4};
      position: relative;
      bottom: 10px;
      font-weight: ${theme.weights.bold};
      color: ${theme.colors.dark};
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      width: 100%;
      text-overflow: ellipsis;
      font-family: "Amatic SC", cursive;
    }
    
    .description{
      display: grid;
      grid-template-columns: 1fr 1fr;

        .left-description{
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-weight: ${theme.weights.medium};
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-weight: ${theme.weights.medium};
          color: ${theme.colors.primary};
        }

        .right-description {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: ${theme.fonts.P1};
        .primary-button{
          font-size: ${theme.fonts.XS};
          cursor: pointer;
          padding: 12px;
        }
      }
    }
  }`
