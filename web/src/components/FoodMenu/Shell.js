import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
// import HpSection from '../../ui/HpSection'
// import { SectionTitle } from '../../ui/Titles'
import FoodMenuList from './List'

// images
import BlackBoardBgImage from '../../images/10295.jpg'

const MenuSection = styled.section`
  background: url(${BlackBoardBgImage});
  ${tw`text-white font-chalk relative pt-24`};
`

const MenuTitle = styled.h2`
  ${tw`text-white font-normal  text-center font-typewritter text-5xl`};
  @media (min-width: 600px) {
    position: absolute;
    transform: rotate(-20deg);
    left: 3rem;
    top: 5rem;
  }
  @media (min-width: 1200px) {
    left: 6rem;
    top: 7rem;
  }
`

const CategoryTitle = styled.h3`
  ${tw`text-center text-6xl font-chalk leading-none`};
  text-shadow: rgba(224, 118, 40, 1) 5px 6px 1px;
  margin-bottom: 4rem;
`

const FoodMenuShell = ({ savoryPizzas, dessertPizzas }) => (
  <MenuSection>
    <MenuTitle>Our Menu:</MenuTitle>
    <div className="container mx-auto flex flex-wrap pt-4 pb-12">
      <div className="w-full mb-4">
        <div className="h-1 mx-auto  w-64 opacity-25 my-0 py-0 rounded-t" />
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
