import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

// images
import WhiteWoodTexture from '../images/white-wood.jpg'
import RusticWoodTexture from '../images/smooth-black-wood.jpg'
import PaintedWoodTexture from '../images/h4-slide-3.jpg'
import PaintedWoodTexture2 from '../images/h4-slide-33.jpg'
import Firelight from '../images/firelight3.png'
import PizzaPlaceholder from '../images/Margareets3.png'

// elements
import Container from '../ui/Container'
import BigTitle from '../ui/BigTitle'

// styles
import { StyledLink } from '../ui/Button'

const SectionStyled = styled.section`
  background-image: url(${PaintedWoodTexture2});
  background-size: cover;
  ${tw`py-12 relative overflow-hidden`};
  @media (min-width: 600px) {
    background-position: 70% 0%;
  }
  @media (min-width: 900px) {
    background-position: top right;
  }
`
// const FireGradient = styled.div`
//   ${tw`absolute w-1/3 h-full`};
//   top: 0;
//   right: 0;
//   /* background: linear-gradient(-90deg, #80000052 0%, #ffc71900 100%); */
//   background: url(${Firelight}) no-repeat top right;
//   background-size: cover;
// `
const LeftCol = styled.div`
  ${tw`flex flex-col justify-center items-center md:items-end`};
  ${tw`w-full md:w-3/5 lg:w-2/5`};
  ${tw`py-6 lg:pt-0 pl-6`};
  ${tw`text-center md:text-right`};
`
const RightCol = styled.div`
  ${tw`w-full md:w-2/5 lg:w-1/2  text-center relative`};
  ${tw`py-2 px-2`};
  padding-bottom: 200px;
  @media (min-width: 900px) {
    ${tw`py-2 px-2`};
    min-height: 600px;
  }
  img {
    ${tw`absolute`};
    left: 1rem;
    @media (min-width: 600px) {
      left: 2rem;
      width: 500px;
      max-width: 1000%;
    }
    @media (min-width: 900px) {
      ${tw`static`};
      width: 800px;
      max-width: 100%;
    }
  }
`
const Intro = styled.p`
  ${tw`uppercase font-typewritter text-2xl leading-none text-orange-dark`};
  text-shadow: rgba(251, 29, 37, 0.86) 0px 0px 16.49px;
`

const Paragraph = styled.p`
  ${tw`leading-normal mb-8  text-xl font-typewritter`};
  color: #ccc;
  span {
    background-color: black;
    ${tw`p-1`};
  }
`

const Hero = () => (
  <SectionStyled>
    {/* <FireGradient /> */}
    <Container>
      <div className=" flex flex-col md:flex-row items-center md:items-start lg:items-center  text-white">
        {/* left col */}
        <LeftCol className="LeftCol">
          <Intro className="Intro">Pizza of the Day</Intro>
          <BigTitle>Margareets</BigTitle>
          <Paragraph>
            <span>
              Back to the basics. <br />
              Neapolitan dough with "The Sauce", Organic Fresh Basil and Mozzarella, baked in our wood fired oven in the
              traditional way.
            </span>
          </Paragraph>
          <StyledLink to="/">
            <span>Come & Get it! >>></span>
          </StyledLink>
        </LeftCol>
        {/* right col */}
        <RightCol className="RightCol">
          {/* prod image */}
          <img src={PizzaPlaceholder} alt="placeholder" />
        </RightCol>
      </div>
    </Container>
  </SectionStyled>
)

export default Hero
