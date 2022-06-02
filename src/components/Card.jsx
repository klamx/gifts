import React, { useState } from 'react'
import styled from 'styled-components'
import { StyledButton } from '../App'
import Form from './Form'

function Card () {
  const [popUp, setPopUp] = useState(true)

  return (
    <CardContainer>
      {popUp && <Form />}
      <Title>Gifts</Title>
      <ListContainer>
        <StyledButton m='5px 0 0 0'>Agregar</StyledButton>
        <Ulist>
          <Litem>uno</Litem>
          <Litem>dos</Litem>
          <Litem>tres</Litem>
        </Ulist>
      </ListContainer>
    </CardContainer>
  )
}

export const CardContainer = styled.div`
  @media (max-width: 600px) {
    width: 300px;
    height: 400px;
  }

  @media (min-width: 600px) {
    width: 500px;
    height: 600px;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.29);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`

const Title = styled.h1`
  font-size: 3.5rem;
  color: #fff;
`

const Ulist = styled.ul`
  width: 100%;
  padding-top: 5px;
`
const Litem = styled.li`
  list-style: none;
  font-size: 24px;
  color: #fff;
`

const ListContainer = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px;
`

export default Card
