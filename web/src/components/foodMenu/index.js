import React from 'react'
import FoodMenuItemsListing from './foodMenuItemsListing'

const FoodMenu = ({ savoryPizzas }) => {
  return (

    <section className='bg-gray-800 border-b py-8'>

      <div className='container mx-auto flex flex-wrap pt-4 pb-12'>

        {/* <h2 className='w-full my-2 text-5xl font-bold leading-tight text-center text-white'>Our Menu</h2> */}
        <div className='w-full mb-4'>
          <div className='h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t' />
        </div>

        <div className='w-fullp-6 flex flex-col flex-grow flex-shrink'>
          <h3 className='text-center text-5xl text-gray-100 mb-10' style={{ fontFamily: 'Sacramento' }}>Savory Pizzas</h3>
          <FoodMenuItemsListing items={savoryPizzas} />
        </div>

      </div>

    </section>
  )
}

export default FoodMenu
