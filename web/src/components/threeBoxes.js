import React from 'react'

const ThreeBoxes = () => {
  return (

    <section className='bg-white border-b py-8'>

      <div className='container mx-auto flex flex-wrap pt-4 pb-12'>

        <h1 className='w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800'>What is true Neapolitan Pizza?</h1>
        <p className='text-center text-gray-800 w-full mx-32 lg:px-32 mb-8'><strong className='text-gray-900'>fast, deilicious, healthy</strong></p>
        <p className='text-center text-gray-600 w-full text-sm mx-32 lg:px-32'>Here's what makes a true-to-form Neapolitan Pizza, made according to the rules of the <a href='https://www.pizzanapoletana.org/en/' target='_blank' style={{ textDecoration: 'underline' }}>Associazione Verace Pizza Napoletana</a>:</p>
        <div className='w-full mb-4'>
          <div className='h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t' />
        </div>

        <div className='w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink'>
          <div className='flex-1 bg-white  overflow-hidden  pt-6 border border-b-0'>
            <a href='#' className='flex flex-wrap no-underline hover:no-underline'>
              {/* <p className='w-full text-gray-600 text-xs md:text-sm px-6'>xGETTING STARTED</p> */}
              <div className='w-full font-bold text-xl text-gray-800 px-6 mb-6'>The Wood Fired Oven & Cooking Method</div>
              <p className='text-gray-600 text-base px-6 mb-5'>Our pizzas are cooked for <strong className='text-gray-900'>90-120 seconds @ 700°F </strong> in our <strong className='text-gray-900'>wood fired oven</strong> for a moist dough and well-cooked toppings.
              </p>
            </a>
          </div>
          <div className='flex-none mt-auto bg-white overflow-hidden p-6 border border-t-0'>
            <div className='flex items-center justify-start'>
              <button className='mx-auto lg:mx-0 hover:underline gradient text-gray-800 font-bold rounded-full border border-gray-600 my-6 py-4 px-8'>learn more</button>
            </div>
          </div>
        </div>

        <div className='w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink'>
          <div className='flex-1 bg-white  overflow-hidden  pt-6 border border-b-0'>
            <a href='#' className='flex flex-wrap no-underline hover:no-underline'>
              {/* <p className='w-full text-gray-600 text-xs md:text-sm px-6'>xGETTING STARTED</p> */}
              <div className='w-full font-bold text-xl text-gray-800 px-6 mb-6'>The Authentic Neapolitan Recipe</div>
              <p className='text-gray-600 text-base px-6 mb-5'>Hand-kneaded dough from <strong className='text-gray-900'>Capudo 00 wheat flour</strong>, fresh <strong className='text-gray-900'>brewer's yeast</strong>, <strong className='text-gray-900'>salt</strong> and <strong className='text-gray-900'>water</strong>. Nothing more, nothing less.
              </p>
            </a>
          </div>
          <div className='flex-none mt-auto bg-white overflow-hidden p-6 border border-t-0'>
            <div className='flex items-center justify-start'>
              <button className='mx-auto lg:mx-0 hover:underline gradient text-gray-800 font-bold rounded-full border border-gray-600 my-6 py-4 px-8'>learn more</button>
            </div>
          </div>
        </div>

        <div className='w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink'>
          <div className='flex-1 bg-white  overflow-hidden  pt-6 border border-b-0'>
            <a href='#' className='flex flex-wrap no-underline hover:no-underline'>
              {/* <p className='w-full text-gray-600 text-xs md:text-sm px-6'>xGETTING STARTED</p> */}
              <div className='w-full font-bold text-xl text-gray-800 px-6 mb-6'>The Best Ingredients</div>
              <p className='text-gray-600 text-base px-6 mb-5'>Only fresh and organic toppings: <strong className='text-gray-900'>Italian Fiori di Late Mozzarella</strong>, pureed <strong className='text-gray-900'>San Marzano tomatoes</strong> from Italy. Plus other local seasonal toppings.
              </p>
            </a>
          </div>
          <div className='flex-none mt-auto bg-white overflow-hidden p-6 border border-t-0'>
            <div className='flex items-center justify-start'>
              <button className='mx-auto lg:mx-0 hover:underline gradient text-gray-800 font-bold rounded-full border border-gray-600 my-6 py-4 px-8'>learn more</button>
            </div>
          </div>
        </div>

      </div>

    </section>

  )
}

export default ThreeBoxes
