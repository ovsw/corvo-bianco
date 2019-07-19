import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

// images
import WhiteWoodTexture from '../images/white-wood.jpg'
import RusticWoodTexture from '../images/smooth-black-wood.jpg'
import PaintedWoodTexture from '../images/h4-slide-3.jpg'
import PaintedWoodTexture2 from '../images/h4-slide-33.jpg'
import Firelight from '../images/firelight3.png'

// styles

const SectionStyled = styled.section`
  background-image: url(${PaintedWoodTexture2});
  background-size: cover;
  ${tw`py-12 relative`};
`
const FireGradient = styled.div`
  ${tw`absolute w-1/3 h-full`};
  top: 0;
  right: 0;
  /* background: linear-gradient(-90deg, #80000052 0%, #ffc71900 100%); */
  background: url(${Firelight}) no-repeat top right;
  background-size: cover;
`
const LeftCol = styled.div`
  ${tw`flex flex-col justify-center items-center md:items-end`};
  ${tw`w-full lg:w-2/5`};
  ${tw`pt-12 md:pb-24 pl-6`};
  ${tw`text-center md:text-right`};
`
const Intro = styled.p`
  ${tw`uppercase font-typewritter text-3xl text-orange-dark`};
  ${tw`md:-mr-6`};
  text-shadow: rgba(251, 29, 37, 0.86) 0px 0px 16.49px;
`
const RightCol = styled.div`
  ${tw`w-full lg:w-1/2  text-center`};
  ${tw`py-6`};
`
const HeroH1 = styled.h1`
  ${tw`font-bold text-6xl mb-6 font-chalk uppercase text-red-dark text-white `};
  text-shadow: rgb(28, 151, 151) 5px 6px 1px;
`

const Paragraph = styled.p`
  ${tw`leading-normal mb-8 mr-6 text-xl font-typewritter`};
  color: #ccc;
  span {
    background-color: black;
    ${tw`p-1`};
  }
`
const CTAButton = styled.a`
  /* background-color: #f5d020; */
  /* background-image: linear-gradient(315deg, #f5d020 0%, #f53803 74%); */
  box-sizing: border-box;
  background: linear-gradient(#000, #000), linear-gradient(to right, red, orange);
  border: 5px solid transparent;
  background-repeat: no-repeat;
  background-origin: padding-box, border-box;
  border-radius: 0.5rem;
  border-width: 6px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -5px;
    bottom: -5px;
    left: -5px;
    right: -5px;
    border: 6px solid #000;
    border-radius: 0.5rem;
  }
  ${tw`p-2 pt-4`};
  span {
    ${tw`uppercase font-typewritter text-xl text-orange-dark`};
    text-shadow: rgba(251, 29, 37, 0.86) 0px 0px 16px;
  }
`

const CTAButtonFull = styled.a`
  ${tw`px-4 py-4 text-xl uppercase font-chalk text-white`};
  border-radius: 0.5rem;
  background-color: #eb4511;
  background-image: linear-gradient(315deg, #eb4511 0%, #b02e0c 74%);
`

const Hero = () => (
  <SectionStyled>
    {/* <FireGradient /> */}
    <div className="container mx-auto flex flex-col md:flex-row items-center text-white">
      {/* left col */}
      <LeftCol className="LeftCol">
        <Intro className="Intro">Pizza of the Day</Intro>
        <HeroH1>Margherita</HeroH1>
        <Paragraph>
          <span>
            Back to the basics. <br />
            Neapolitan dough with "The Sauce", Organic Fresh Basil, Fresh Mozzarella, baked in our wood fired oven in
            the traditional way.
          </span>
        </Paragraph>
        <CTAButton>
          <span>Come & Get it! >>></span>
        </CTAButton>
      </LeftCol>
      {/* right col */}
      <RightCol className="RightCol">
        {/* prod image */}
        <img src="https://mymidici.com/devsite/wp-content/uploads/2017/12/NP-Margherita.png" alt="placeholder" />
      </RightCol>
    </div>
  </SectionStyled>
)

export default Hero
