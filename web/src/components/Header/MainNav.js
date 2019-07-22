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
    ${tw` py-2 px-2 md:px-4 text-white no-underline  text-base md:text-xl lg:text-2xl font-chalk `};
    span {
    }
  }
`
const StyledMenu = styled.ul`
  ${tw`list-reset`};
  ${tw`flex flex-wrap`};
  ${tw`w-full`};
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
