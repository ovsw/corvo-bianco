import React from 'react'
import tw from 'tailwind.macro'
import styled from 'styled-components'
import { SectionTitle, SectionSubTitle } from 'src/ui/Titles'
import HpSection from 'src/ui/HpSection'

const BoxWrapper = styled.div`
  ${tw`w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink`}
`

const ThreeBoxes = () => (
  <HpSection altStyle>
    <div className="container mx-auto flex flex-wrap pt-4 pb-12">
      <SectionTitle>What is true Neapolitan Pizza?</SectionTitle>
      <SectionSubTitle>fast, deilicious, healthy</SectionSubTitle>
      <p className="text-center text-gray-300 w-full text-sm mx-32 lg:px-32">
        Here's what makes a true-to-form Neapolitan Pizza, made according to the rules of the{' '}
        <a
          href="https://www.pizzanapoletana.org/en/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'underline' }}
        >
          Associazione Verace Pizza Napoletana
        </a>
        :
      </p>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
      </div>
      <BoxWrapper>
        <div className="flex-1 bg-white  overflow-hidden  pt-6 border border-b-0">
          <a href="#" className="flex flex-wrap no-underline hover:no-underline">
            {/* <p className='w-full text-gray-600 text-xs md:text-sm px-6'>xGETTING STARTED</p> */}
            <h3 className="w-full font-bold text-xl text-gray-800 px-6 mb-6">The Wood Fired Oven & Cooking Method</h3>
            <p className="text-gray-600 text-base px-6 mb-5">
              Our pizzas are cooked for <strong className="text-gray-900">90-120 seconds @ 700°F </strong> in our{' '}
              <strong className="text-gray-900">wood fired oven</strong> for a moist dough and well-cooked toppings.
            </p>
          </a>
        </div>
        <div className="flex-none mt-auto bg-white overflow-hidden p-6 border border-t-0">
          <div className="flex items-center justify-start">
            <button
              type="button"
              className="mx-auto lg:mx-0 hover:underline gradient text-gray-800 font-bold rounded-full border border-gray-600 my-6 py-4 px-8"
            >
              learn more
            </button>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="flex-1 bg-white  overflow-hidden  pt-6 border border-b-0">
          <a href="#" className="flex flex-wrap no-underline hover:no-underline">
            {/* <p className='w-full text-gray-600 text-xs md:text-sm px-6'>xGETTING STARTED</p> */}
            <h3 className="w-full font-bold text-xl text-gray-800 px-6 mb-6">The Authentic Neapolitan Recipe</h3>
            <p className="text-gray-600 text-base px-6 mb-5">
              Hand-kneaded dough from <strong className="text-gray-900">Capudo 00 wheat flour</strong>, fresh{' '}
              <strong className="text-gray-900">brewer's yeast</strong>, <strong className="text-gray-900">salt</strong>{' '}
              and <strong className="text-gray-900">water</strong>. Nothing more, nothing less.
            </p>
          </a>
        </div>
        <div className="flex-none mt-auto bg-white overflow-hidden p-6 border border-t-0">
          <div className="flex items-center justify-start">
            <button
              type="button"
              className="mx-auto lg:mx-0 hover:underline gradient text-gray-800 font-bold rounded-full border border-gray-600 my-6 py-4 px-8"
            >
              learn more
            </button>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="flex-1 bg-white  overflow-hidden  pt-6 border border-b-0">
          <a href="#" className="flex flex-wrap no-underline hover:no-underline">
            {/* <p className='w-full text-gray-600 text-xs md:text-sm px-6'>xGETTING STARTED</p> */}
            <h2 className="w-full font-bold text-xl text-gray-800 px-6 mb-6">The Best Ingredients</h2>
            <p className="text-gray-600 text-sm px-6 mb-5 leading-relaxed">
              Only fresh and organic toppings:{' '}
              <strong className="text-gray-900">Italian Fiori di Late Mozzarella</strong>, pureed{' '}
              <strong className="text-gray-900">San Marzano tomatoes</strong> from Italy. Plus other local seasonal
              toppings.
            </p>
          </a>
        </div>
        <div className="flex-none mt-auto bg-white overflow-hidden p-6 border border-t-0">
          <div className="flex items-center justify-start">
            <button
              type="button"
              className="mx-auto lg:mx-0 hover:underline gradient text-gray-800 font-bold rounded-full border border-gray-600 my-6 py-4 px-8"
            >
              learn more
            </button>
          </div>
        </div>
      </BoxWrapper>
    </div>
  </HpSection>
)

export default ThreeBoxes
