import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Link } from 'gatsby'

import ChalkBorderSource from '../../images/chalk-squalre.png'

const MenuItem = styled.li`
  ${tw`w-1/3 border`};
  ${tw`flex`};
  border: 5px solid white;
  border-image: url(${ChalkBorderSource}) 70;
  border-image-repeat: round;
  border-image-outset: 0.5;

  a {
    ${tw`flex w-full items-center justify-center`};
    ${tw`m-0  px-2  text-white text-sm uppercase sm:text-base xl:text-xl font-chalk md:tracking-wide`};
    span {
      border-left: 6px dotted #161719;
      ${tw`m-0 py-1`};
    }
    &:hover {
      span {
        border-left: 16px solid #e07628;
        border-right: 16px solid #e07628;
        color: #e07628;
        border-image: url(${ChalkBorderSource}) 100;
        border-image-repeat: round;
        border-image-outset: -6;
      }
    }
  }
`
const StyledMenu = styled.ul`
  ${tw`list-reset`};
  ${tw`flex flex-wrap`};
  ${tw`w-full m-0 p-0`};
`

const MainNav = () => {
  const MenuItems = [
    {
      name: 'Menu',
      url: '/menu',
    },
    {
      name: 'Location',
      url: '/location',
    },
    {
      name: 'Reviews',
      url: '/reviews',
    },
    {
      name: 'About',
      url: '/about-us',
    },
    {
      name: 'News',
      url: '/news',
    },
    {
      name: 'Contact',
      url: '/contact',
    },
  ]

  return (
    <StyledMenu>
      {MenuItems.map(item => (
        <MenuItem key={item.url}>
          <Link to={item.url}>
            <span>{item.name}</span>
          </Link>
        </MenuItem>
      ))}
    </StyledMenu>
  )
}

export default MainNav
