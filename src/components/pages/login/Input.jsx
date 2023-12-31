import styled from "styled-components";

export default function Input({ value, onChange, Icon, ...extraProps }) {
    return (
      <InputStyled>
       {Icon && Icon}
        <input onChange={onChange} type="text"{...extraProps}/>
      </InputStyled>
    )
  }

  const InputStyled = styled.div`
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;

    .icon{
    font-size: 15px;
    margin-right: 8px;
    color: #93a2b1;
    }

    input{
    border: none;
    font-size: 15px;
    color: #17161a;
    }

    &::placeholder{
    background: white;
    color: lightgrey;
    }
  `