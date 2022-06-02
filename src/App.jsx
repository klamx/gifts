import React from 'react'
import styled from 'styled-components'
import Card from './components/Card'
import { GlobalStyles } from './GlobalStyles'

function App () {
  return (
    <AppContainer>
      <GlobalStyles />
      <Card />
    </AppContainer>
  )
}

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #4a148c;
  /* background-image: url('src/assets/img/cool-background.png');
  background-repeat: no-repeat;
  background-size: cover; */
`

export const StyledButton = styled.button`
  font-size: 24px;
  padding: 5px 15px;
  margin: ${(props) => props.m};
  background: inherit;
  color: #fff;
  border: 3px solid #4a148c;
  outline: none;

  &:hover, &:focus {
    background: #4a148c;
  }
`

export default App
