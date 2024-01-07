import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import TextInput from '../../reusable-ui/TextInput';
import { BsPersonCircle } from 'react-icons/bs';
import PrimaryButton from './PrimaryButton';
import { IoChevronForward } from "react-icons/io5";
import { theme } from '/src/theme/index.jsx';


export default function LoginForm() {
    // state
  const [inputValue, setInputValue] = useState("")
  const navigate = useNavigate()

  //comportements
  const handleSubmit = (event) => { 
    event.preventDefault()
    setInputValue("")
    navigate(`/order/${inputValue}`)
   }

   const handleChange = (event) => { 
    setInputValue(event.target.value)
    }

    //affichage (render)
  return (
    <LoginFormStyled action="sumbit" onSubmit={handleSubmit}>
      <div>
        <h1>Bienvenue chez nous !</h1>
        <hr/>
        <h2>Connectez-vous</h2>
      </div>
      <div>
        <TextInput 
          value={inputValue} 
          onChange={handleChange} 
          placeholder={"Entrez votre prénom"} 
          required
          Icon={<BsPersonCircle className="icon"/>}
        />
        <PrimaryButton
          label={"Accéder à mon espace"}
          Icon={<IoChevronForward className="icon" />}
        />
      </div>
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 2.5rem 2rem;
  border-radius: ${theme.borderRadius.round};
  font-family: "Amatic SC", cursive;

  hr{
    border: 1px solid #f56a2c;
    margin-bottom: 40px;
  }

  h1{
    color: ${theme.colors.white};
    margin-bottom: 48px;
  }

  h2{
    /* color: #8e8b8b; */ //test
    margin: 20px 10px 10px;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P4};

  }
  
  .icon{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.P0};
    margin-left: 10px;
    }
    `