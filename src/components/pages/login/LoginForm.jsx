import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BsPersonCircle } from 'react-icons/bs';
import { IoChevronForward } from "react-icons/io5";

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
        <div className='input-with-icon'>
          <BsPersonCircle className='icon'/>
            <input
              value={inputValue}
              onChange={handleChange}
              type="text"
              placeholder="Entrez votre prénom" 
              required

            />
        </div>
          <button className='button-with-icon' type="submit">
            <span onClick={handleSubmit}>Accéder à mon espace</span>
            <IoChevronForward className='icon'/>
          </button>
      </div>
        
    </LoginFormStyled>
  )
}


const LoginFormStyled = styled.div`
  background-color: green;
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 2.5rem 2rem;
  border-radius: 5px;
  font-family: "Amatic SC", cursive;

  hr{
    border: 1px solid #f56a2c;
    margin-bottom: 40px;
  }

  h1{
    color: white;
    margin-bottom: 48px;
  }

  h2{
    /* color: #8e8b8b; */ //test
    margin: 20px 10px 10px;
    color: white;
    font-size: 36px;
  }

  .input-with-icon{
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
  }
        .button-with-icon{
        width: 100%;
        border: 1px solid red;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        position: relative;
        white-space: nowrap;
        text-decoration: none;
        line-height: 1;

        padding: 18px 24px;
        border-radius: 5px;
        font-size: 15px;
        font-weight: 800;
        color: white;
        background-color: #ff9f1b;
        border: 1px solid #ff9f1b;

        &:hover:not(:disabled){
          background-color: white;
          color: #ff9f1b;
          border: 1px solid #ff9f1b;
          transition: all 200ms ease-out;
        }

        &:active{
          color: white;
          background-color: #ff9f1b;
          border: 1px solid #ff9f1b;
        }

        &:disabled{
          opacity: 0.6;
          cursor: not-allowed;
        }

        .icon{
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 15px;
          margin-left: 10px;
        }
      }
  `









