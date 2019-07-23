import React from 'react'
import tw from 'tailwind.macro'
import styled from 'styled-components'
// import { F } from 'react-icons/fa'
// icons
import { colors } from '../../../tailwind'
import SVG from '../SVG'

// import { tsModuleBlock } from '@babel/types'
// ui elements
import Container from '../../ui/Container'

// images
import OldPaper from '../../images/old-paper2.jpg'

const SectionStyled = styled.section`
${tw`pt-1 xl:pt-8`};
  background-color: #fffdf5;
  background: url('${OldPaper}');
  position: relative;
  z-index: 100;
`

const SawtoothBottom = styled.div`
  background-image: linear-gradient(135deg, #dccfbf 50%, transparent 50%),
    linear-gradient(225deg, #dccfbf 50%, transparent 50%);
  background-position: bottom left, bottom left;
  background-size: 24px 20px;
  background-repeat: repeat-x;
  ${tw`h-6 relative`};
  z-index: 100;
  bottom: -10px;
`
const SawtoothTop = styled.div`
  background-image: linear-gradient(45deg, #dccfbf 50%, transparent 50%),
    linear-gradient(-45deg, #dccfbf 50%, transparent 50%);
  background-position: bottom left, bottom left;
  background-size: 24px 20px;
  background-repeat: repeat-x;
  ${tw`h-6 relative`};
  z-index: 100;
  top: -28px;
  @media (min-width: 1200px) {
    top: -46px;
  }
`
const BoxWrapper = styled.div`
  ${tw`w-full md:w-1/2 lg:w-1/3 px-6 flex flex-col flex-grow flex-shrink`};
  border: 1px dashed #a29180;
  border-width: 0 2px 2px 0;

  &:nth-child(1),
  &:nth-child(2) {
    border-width: 2px 2px 2px 0;
  }

  @media (min-width: 900px) {
    &:nth-child(1),
    &:nth-child(2) {
      border-width: 0px 2px 2px 0;
    }
    &:nth-child(3n) {
      border-width: 0 0 2px 0;
    }
    &:nth-child(4),
    &:nth-child(5),
    &:nth-child(5) {
      border-width: 0 2px 0 0;
    }
    &:last-child {
      border-width: 0;
    }
  }
`
const SectionTitle = styled.h2`
  ${tw`text-center font-chalk uppercase text-5xl md:text-6xl leading-none`};
  text-shadow: rgb(150, 50, 50) 0px 0px 1px, rgb(28, 151, 151) 4px 4px 1px;
  @media (min-width: 600px) {
    text-shadow: rgb(150, 50, 50) 0px 0px 1px, rgb(28, 151, 151) 5px 6px 0px, rgba(28, 151, 151, 0.5) 5px 6px 10px;
  }
  span {
    text-shadow: none;
    ${tw`block font-typewritter lowercase text-xl mt-4 mb-2`};
    strong {
      ${tw`underline`};
    }
  }
`
const IntroPara = styled.p`
  ${tw`text-center font-typewritter text-lg md:text-xl px-2 mt-8 max-w-lg mx-auto leading-loose`};
  span {
    line-height: 2rem;
    ${tw`py-2 px-2`};
    /* background-color: rgba(28, 151, 151, 0.6); */
    /* background-image: linear-gradient(
      190deg,
      rgba(193, 97, 31, 0.15),
      rgba(193, 97, 31, 0.5) 100%,
      rgba(193, 97, 31, 0.25)
    ); */
  }
`
const Card = styled.a`
  ${tw`flex-1flex flex-wrap no-underline  relative `};
  background: url('${OldPaper}');
  padding-top: 150px;
  h3 {
    ${tw`w-full font-bold text-2xl text-grey-darker px-6 mb-6 text-center`};
    color: rgb(28, 151, 151);
  }
`

const contentMap = [
  {
    title: 'Ready in 2 minutes',
    text:
      "The Wood-fired oven is crazy-hot. Pies are done in about 2 minutes or less. We make'em fast so you can enjoy them slowly - they come out piping hot!",
    icon: 'fast',
  },
  {
    title: 'Charred spots are good!',
    text:
      'Due to the high heat, the crust will have dark spots - like a Dalmatian :) This is not only normal but also desirable and adds to the flavor.',
    icon: 'oven',
  },
  {
    title: '1 Pizza serves 1 Person',
    text:
      'Smaller than the normal pizza, one pizza/person is the average portion... unless you have a gigantic appetite - in which case, way to go :)',
    icon: 'one',
  },
  {
    title: 'Fold 2 Hold (and eat)',
    text:
      'No Slices. Your call: fold the whole pizza to eat on the go like a savage, or sit down with cutlery like a civilized human. ',
    icon: 'pizza',
  },

  {
    title: 'ONLY Premium Ingredients',
    // text:
    //   'Fluffier & moister than the normal pizza, Neapoletan Pizza doesn\'t "turn to cardboard" after a few minutes.',
    text:
      'Fiori di Latte Mozarella, San Marzano Tomatoes, Capudo Flour, Organic Fresh Local Toppings, we could go on, and on... ',
    icon: 'quality',
  },
  {
    title: 'Balanced',
    text:
      'Cheese is not the main ingredient ;) A careful balance among crust, sauce, and cheese allows you to savor all 3 components (and eat healthier).',
    icon: 'balance',
  },
]

const Highlights = () => (
  <SectionStyled>
    <SawtoothTop />
    <Container>
      <SectionTitle>
        <span>"Neo-what Pizza?"</span> Neapoletan <br />
        <span>
          [ nee-uh-<strong>paa</strong>-luh-tn ]
        </span>
      </SectionTitle>
      <IntroPara>
        <span>
          Originating from Neapole (Naples) in Italy, Neapoletan Pizza may prove quite different than what you're used
          to. Here's what to expect:
        </span>
      </IntroPara>
      <div className=" mx-auto flex flex-wrap pt-8 pb-6">
        {contentMap.map(item => (
          <BoxWrapper>
            <Card href="#">
              {/* <p className='w-full text-gray-600 text-xs md:text-sm px-6'>xGETTING STARTED</p> */}
              <SVG icon={item.icon} fill="#c1611f" left="37%" top="10%" width="24" />
              <h3>{item.title}</h3>
              <p
                className="text-grey-darkest text-lg leading-loose px-6 mb-6 font-typewritter"
                dangerouslySetInnerHTML={{ __html: item.text }}
              />
            </Card>
            {/* <div className="flex-none mt-auto bg-white overflow-hidden p-6 border border-t-0">
              <div className="flex items-center justify-start">
                <button
                  type="button"
                  className="mx-auto lg:mx-0 hover:underline gradient text-gray-800 font-bold rounded-full border border-gray-600 my-6 py-4 px-8"
                >
                  learn more
                </button>
              </div>
            </div> */}
          </BoxWrapper>
        ))}
      </div>
    </Container>
    <SawtoothBottom />
  </SectionStyled>
)

export default Highlights
