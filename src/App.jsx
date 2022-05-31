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
`

export default App
