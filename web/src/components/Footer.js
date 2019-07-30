import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { FaPhone, FaEnvelope, FaMap } from 'react-icons/fa'

// images
import BgDark from '../images/bgd.jpg'
import MulinoCaputoLogo from '../images/farine-caputo-logo.png'
import ChalkBorderSource from '../images/chalk-squalre.png'

// components
import SocialLinks from './SocialLinks'

// elements
import Container from '../ui/Container'

const FooterStyled = styled.footer`
  ${tw`text-white pt-12 md:pt-8`};
  border-image: url(${ChalkBorderSource}) 70 repeat;
  border-top: 5px solid white;
  background: url(${BgDark});
`
const FooterColumns = styled.div`
  ${tw`flex`};
`
const LeftCol = styled.div`
  ${tw`md:w-2/3 text-center md:text-left px-4 pb-8 md:pl-12`};
  border-image: url(${ChalkBorderSource}) 70 repeat;
  @media (min-width: 600px) {
    border-right: 5px solid white;
  }
  h3 {
    ${tw`font-chalk text-5xl mb-2 md:mb-0 `};
  }
  p {
    ${tw`font-typewritter leading-normal`};
  }
  .contact {
    br {
      ${tw`md:hidden`};
    }
    a {
      ${tw`md:mr-6`};
    }
  }
  .address {
    ${tw`mt-2`};
  }

  svg {
    ${tw`relative text-2xl mr-2`};
    top: 4px;
  }
`
const Tagline = styled.p`
  margin-bottom: 2rem;
  ${tw`px-4 pb-8 md:px-0 md:pb-2`};
  border-image: url(${ChalkBorderSource}) 70 repeat;
  border-bottom: 5px solid white;
`
const RightCol = styled.div`
  ${tw`md:w-1/3 text-center`};
  img {
    width: 160px;
  }
`
const SocialLinksWrapper = styled.div`
  ${tw`mb-8`};
  svg {
    ${tw`text-4xl`};
  }
`
const Copyright = styled.p`
  ${tw`text-center text-grey py-2 mt-8`};
  background: rgba(28, 151, 151, 0.24);
  border-image: url(${ChalkBorderSource}) 70 repeat;
  border-top: 5px solid white;
  br {
    ${tw`md:hidden`};
  }
`
const Footer = () => (
  <FooterStyled>
    <Container>
      <FooterColumns>
        <LeftCol>
          <h3>Corvo Bianco</h3>
          <Tagline>Authentic Neapolitan Wood Fired Pizza Truck</Tagline>
          <p className="contact">
            <a href="tel:508-238-2387">
              <FaPhone /> (508) 238-2387
            </a>{' '}
            <br />{' '}
            <a href="mailto:info@corvobianco.pizza">
              <FaEnvelope /> info@corvobianco.pizza
            </a>
          </p>
          <p className="address">
            <FaMap /> 1497 Main Street, #227
            <br />
            Dunedin, FL, 34698
          </p>
        </LeftCol>
        <RightCol>
          <SocialLinksWrapper>
            <SocialLinks />
          </SocialLinksWrapper>
          <a href="http://www.mulinocaputo.it/en/flour" rel="noopener noreferrer" target="_blank">
            <img src={MulinoCaputoLogo} alt="Mulino Caputo Logo" />
          </a>
        </RightCol>
      </FooterColumns>
    </Container>
    <Copyright>
      Copyright &copy; {new Date().getFullYear()} Corvo Bianco. <br /> Website by{' '}
      <a href="https://ovswebsites.com">OVS Websites</a>.
    </Copyright>
  </FooterStyled>
)

export default Footer
