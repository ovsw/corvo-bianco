import React from 'react'

const Hero = () => {
  return (
    <section className='bg-gray-900'>
      <div className='container mx-auto flex flex-col md:flex-row items-center text-white'>
        {/* left col */}
        <div className='flex flex-col w-full lg:w-2/5 justify-center items-end pt-12 md:pb-24 pl-6 '>
          <p className='uppercase tracking-loose text-gray-500  -mr-6'>Pizza of the Day</p>
          <h1 className='font-bold text-5xl mb-6'>Margherita</h1>
          <p className='leading-normal mb-8 mr-6 text-right text-gray-600'>Back to the basics. <br />Neapolitan dough with "The Sauce", Organic Fresh Basil, Fresh Mozzarella, baked in our wood fired oven in the traditional way.</p>
          <button className='bg-transparent hover:bg-gray-100 text-gray-100 hover:text-gray-900 rounded shadow hover:shadow-lg py-2 px-4 border border-gray-100 hover:border-transparent'>Come and get it!</button>
        </div>
        {/* right col */}
        <div className='w-full lg:w-1/2 lg:py-6 text-center'>
          {/* prod image */}
          <img src='https://mymidici.com/devsite/wp-content/uploads/2017/12/NP-Margherita.png' />
        </div>

      </div>
    </section>
  )
}

export default Hero
