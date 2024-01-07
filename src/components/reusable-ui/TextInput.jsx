import styled from "styled-components";
import { theme } from '/src/theme/index.jsx';

export default function TextInput({ value, onChange, Icon, ...extraProps }) {
    return (
      <InputStyled>
       {Icon && Icon}
        <input onChange={onChange} type="text"{...extraProps}/>
      </InputStyled>
    )
  }

  const InputStyled = styled.div`
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.round};
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;

    .icon{
    font-size: ${theme.fonts.P0};
    margin-right: 8px;
    color: ${theme.colors.greySemiDark};
    }

    input{
    border: none;
    font-size: ${theme.fonts.P0};
    color: ${theme.colors.dark};
    }

    &::placeholder{
    background: ${theme.colors.white};
    //color: lightgrey;
    color: ${theme.colors.greyLight};
    }
  `