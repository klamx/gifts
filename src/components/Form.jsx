import React from 'react'
import { CardContainer } from './Card'
import styled from 'styled-components'

function Form () {
  return (
    <FormContainer>
      <CardContainer>
        <input type='text' placeholder='Regalo' />
      </CardContainer>
    </FormContainer>
  )
}

const FormContainer = styled.div`
  position: absolute;
`

export default Form
