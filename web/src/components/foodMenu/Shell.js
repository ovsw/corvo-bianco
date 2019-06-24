import React from 'react'
import HpSection from 'src/ui/HpSection'
import { SectionTitle } from 'src/ui/Titles'
import FoodMenuList from './List'

const FoodMenuShell = ({ savoryPizzas }) => (
  <HpSection>
    <div className="container mx-auto flex flex-wrap pt-4 pb-12">
      <SectionTitle>Our Menu</SectionTitle>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
      </div>

      <div className="w-fullp-6 flex flex-col flex-grow flex-shrink">
        <h3 className="text-center text-5xl text-gray-100 mb-10" style={{ fontFamily: 'Sacramento' }}>
          Savory Pizzas
        </h3>
        <FoodMenuList items={savoryPizzas} />
      </div>
    </div>
  </HpSection>
)

export default FoodMenuShell
