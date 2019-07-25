import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Link } from 'gatsby'

import ChalkBorderSource from '../../images/chalk-squalre.png'

const StyledMenu = styled.ul`
  ${tw`list-reset`};
  ${tw`flex flex-wrap`};
  ${tw`w-full m-0 p-0`};
`
const MenuItem = styled.li`
  ${tw`w-1/3 border`};
  ${tw`flex`};
  border: 5px solid black;
  border-image: url(${ChalkBorderSource}) 70 repeat;
  border-image-outset: 2px;

  a {
    ${tw`flex w-full items-center justify-center`};
    ${tw`m-0 px-0 md:px-2  text-white text-sm uppercase sm:text-base xl:text-xl font-chalk md:tracking-wide`};
    span {
      border-left: 6px solid #161719;
      ${tw`m-0 py-1`};
    }
    &:hover {
      span {
        border-left: 16px solid #e07628;
        border-right: 16px solid #e07628;
        color: #e07628;
        border-image: url(${ChalkBorderSource}) 100 repeat;
        border-image-outset: -6;
      }
    }
  }
`

const MainNav = () => {
  const MenuItems = [
    {
      name: 'Menu',
      url: '/',
    },
    {
      name: 'Location',
      url: '/',
    },
    {
      name: 'Reviews',
      url: '/',
    },
    {
      name: 'About',
      url: '/',
    },
    {
      name: 'News',
      url: '/',
    },
    {
      name: 'Contact',
      url: '/',
    },
  ]

  return (
    <StyledMenu>
      {MenuItems.map(item => (
        <MenuItem key={item.name}>
          <Link to={item.url}>
            <span>{item.name}</span>
          </Link>
        </MenuItem>
      ))}
    </StyledMenu>
  )
}

export default MainNav
