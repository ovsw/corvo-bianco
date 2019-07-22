import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
// import HpSection from '../../ui/HpSection'
// import { SectionTitle } from '../../ui/Titles'
import FoodMenuList from './List'

import BlackBoardBgImage from '../../images/10295.jpg'

const MenuSection = styled.section`
  background: url(${BlackBoardBgImage});
  ${tw`text-white font-chalk relative pt-24`};
`

const MenuTitle = styled.h2`
  ${tw`text-white font-normal text-center font-typewritter text-5xl absolute`};
  transform: rotate(-20deg);
  left: 2rem;
  top: 5rem;
`

const CategoryTitle = styled.h3`
  ${tw`mb-6 text-center text-6xl font-chalk leading-none`};
`

const FoodMenuShell = ({ savoryPizzas, dessertPizzas }) => (
  <MenuSection>
    <div className="container mx-auto flex flex-wrap pt-4 pb-12">
      <MenuTitle>Our Menu:</MenuTitle>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
      </div>

      <div className="w-fullp-6 flex flex-col flex-grow flex-shrink">
        <CategoryTitle>Savory Pizzas</CategoryTitle>
        <FoodMenuList items={savoryPizzas} />
        <CategoryTitle>Dessert Pizzas</CategoryTitle>
        <FoodMenuList items={dessertPizzas} />
      </div>
    </div>
  </MenuSection>
)

export default FoodMenuShell
