import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const LeftCol = styled.div`
  ${tw`flex flex-col justify-center items-center md:items-end`};
  ${tw`w-full lg:w-2/5`};
  ${tw`pt-12 md:pb-24 pl-6`};
  ${tw`text-center md:text-right`};
`

const Intro = styled.p`
  ${tw`uppercase tracking-loose text-gray-500`};
  ${tw`md:-mr-6`};
`
const RightCol = styled.div`
  ${tw`w-full lg:w-1/2  text-center`};
  ${tw`py-6`};
`
const Hero = () => (
  <section className="bg-gray-900">
    <div className="container mx-auto flex flex-col md:flex-row items-center text-white">
      {/* left col */}
      <LeftCol className="LeftCol">
        <Intro className="Intro">Pizza of the Day</Intro>
        <h1 className="font-bold text-5xl mb-6">Margherita</h1>
        <p className="leading-normal mb-8 mr-6  text-gray-600">
          Back to the basics. <br />
          Neapolitan dough with "The Sauce", Organic Fresh Basil, Fresh Mozzarella, baked in our wood fired oven in the
          traditional way.
        </p>
        <button
          type="button"
          className="bg-transparent hover:bg-gray-100 text-gray-100 hover:text-gray-900 rounded shadow hover:shadow-lg py-2 px-4 border border-gray-100 hover:border-transparent"
        >
          Come and get it!
        </button>
      </LeftCol>
      {/* right col */}
      <RightCol className="RightCol">
        {/* prod image */}
        <img src="https://mymidici.com/devsite/wp-content/uploads/2017/12/NP-Margherita.png" alt="placeholder" />
      </RightCol>
    </div>
  </section>
)

export default Hero
