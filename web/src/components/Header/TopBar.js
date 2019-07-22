import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

// images
import ChalkBorderSource from '../../images/chalk-squalre.png'

// elements
import Container from '../../ui/Container'

const Wrapper = styled.div`
  border-image: url(${ChalkBorderSource}) 70;
  border-image-repeat: round;
  border-bottom: 5px solid white;
  border-top: 5px solid white;
  border-image-outset: 0.5;
  ${tw``};
  p {
    color: white;
    ${tw`inline-block  font-chalk text-xl p-2 pt-4`};
    font-weight: 900;
    opacity: 1;
    border-radius: 0 15px 15px 0;
  }
`

const TopBar = () => (
  <Wrapper>
    <Container>
      <p>Fast, tasty, healthy, NOT fast-food.</p>
    </Container>
  </Wrapper>
)

export default TopBar
