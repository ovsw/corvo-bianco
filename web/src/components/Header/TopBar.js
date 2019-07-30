import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import { FaFacebookSquare, FaInstagram, FaTwitter, FaWhatsapp, FaRegEnvelope } from 'react-icons/fa'

// images
import ChalkBorderSource from '../../images/chalk-squalre.png'

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
  ${tw`flex items-center`};
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
    &:first-child {
      ${tw`inline-block`};
    }
  }
`
const SocialLink = styled.a`
  ${tw`mr-4 text-2xl`};
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
          <div>
            <SocialLink href="https://www.google.com" rel="noopener noreferrer" target="_blank">
              <FaFacebookSquare />
            </SocialLink>
            <SocialLink href="https://www.google.com" rel="noopener noreferrer" target="_blank">
              <FaInstagram />
            </SocialLink>
            <SocialLink href="https://www.google.com" rel="noopener noreferrer" target="_blank">
              <FaTwitter />
            </SocialLink>
            {/* <SocialLink href="https://www.google.com" rel="noopener noreferrer" target="_blank" >
              <FaWhatsapp />
            </SocialLink> */}
            <SocialLink href="https://www.google.com" rel="noopener noreferrer" target="_blank">
              <FaRegEnvelope />
            </SocialLink>
          </div>
        </RightCol>
      </ColWrapper>
    </Container>
  </Wrapper>
)

export default TopBar
