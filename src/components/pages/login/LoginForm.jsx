import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

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
  
    <div>
      <LoginFormStyled action="sumbit" onSubmit={handleSubmit}>
        <h1>Bienvenue chez nous !</h1>
        <br/>
        <h2>Connectez-vous</h2>
        <InputStyledValue value={inputValue} onChange={handleChange} type="text" placeholder="Entez voter prénom" required />
        <button >Accédez à mon espace</button>
      </LoginFormStyled>
      
    </div>
  )
}


const LoginFormStyled = styled.form`
  background-color: green;`

  const InputStyledValue = styled.input`
  padding: 10px;
  border-radius: 5px;
  `;