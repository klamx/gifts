import React from 'react'
import styled from 'styled-components'

function Card () {
  return (
    <CardContainer>
      <Title>Gifts</Title>
      <ul>
        <li>uno</li>
        <li>dos</li>
        <li>tres</li>
      </ul>
    </CardContainer>
  )
}

const CardContainer = styled.div`
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
  justify-content: space-evenly;
  align-items: center;

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

export default Card
