import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

// images
import ChalkBorderSource from '../../images/chalk-square2.png'

// components
import SocialLinks from '../SocialLinks'

// elements
import Container from '../../ui/Container'

const Wrapper = styled.div`
  border-image: url(${ChalkBorderSource}) 70 repeat;
  border-bottom: 5px solid white;
  border-top: 5px solid white;
  border-image-outset: 1px;
  p {
    color: white;
    ${tw`inline-block text-sm md:text-md font-typewritter text-sm p-2 pt-4 md:pl-4`};
    opacity: 1;
    border-radius: 0 15px 15px 0;
  }
`
const ColWrapper = styled.div`
  ${tw`flex items-center justify-between`};
  @media (min-width: 600px) {
    padding-left: 150px;
  }
  @media (min-width: 900px) {
    padding-left: 250px;
  }
`
const LeftCol = styled.div`
  ${tw`md:w-3/5 lg:w-3/4 `};
`
const RightCol = styled.div`
  ${tw` text-right md:w-2/5 lg:w-1/4`};
  a {
    ${tw`flex items-center md:inline-block hidden md:text-3xl relative`};
    top: 3px;
    &:first-child,
    &:nth-child(2) {
      ${tw`inline-block`};
    }
  }
`

const TopBar = () => (
  <Wrapper>
    <Container>
      <ColWrapper>
        <LeftCol>
          <p>Tagline from Kay goes here.</p>
        </LeftCol>
        <RightCol>
          <div>
            <SocialLinks />
          </div>
        </RightCol>
      </ColWrapper>
    </Container>
  </Wrapper>
)

export default TopBar
