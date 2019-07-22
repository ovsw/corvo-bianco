import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import { FaFacebookSquare, FaInstagram, FaTwitter, FaWhatsapp, FaRegEnvelope } from 'react-icons/fa'

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
  p {
    color: white;
    ${tw`inline-block  font-chalk text-xl p-2 pt-4`};
    font-weight: 900;
    opacity: 1;
    border-radius: 0 15px 15px 0;
  }
`
const ColWrapper = styled.div`
  ${tw`flex`};
`
const LeftCol = styled.div`
  ${tw`flex-1`};
`
const RightCol = styled.div`
  ${tw`flex-1 text-right`};
`
const SocialLink = styled.a`
  ${tw`mr-4`};
  &:hover {
    ${tw`text-white`};
  }
`

const TopBar = () => (
  <Wrapper>
    <Container>
      <ColWrapper>
        <LeftCol>
          <p>Fast, tasty, healthy, NOT fast-food. </p>
        </LeftCol>
        <RightCol>
          <p>
            <SocialLink href="https://www.google.com" rel="noopener noreferrer" target="_blank">
              <FaFacebookSquare />
            </SocialLink>
            <SocialLink href="https://www.google.com" rel="noopener noreferrer" target="_blank">
              <FaInstagram />
            </SocialLink>
            <SocialLink href="https://www.google.com" rel="noopener noreferrer" target="_blank">
              <FaTwitter />
            </SocialLink>
            <SocialLink href="https://www.google.com" rel="noopener noreferrer" target="_blank">
              <FaWhatsapp />
            </SocialLink>
            <SocialLink href="https://www.google.com" rel="noopener noreferrer" target="_blank">
              <FaRegEnvelope />
            </SocialLink>
          </p>
        </RightCol>
      </ColWrapper>
    </Container>
  </Wrapper>
)

export default TopBar
