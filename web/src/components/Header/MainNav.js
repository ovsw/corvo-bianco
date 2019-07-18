import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Link } from 'gatsby'

const MenuItem = styled.li`
  ${tw`w-1/3 xxl:w-32 border`};
  ${tw`flex`};
  ${tw``};

  a {
    ${tw`flex w-full items-center`};
    ${tw`inline-block py-2 px-2 md:px-4 text-white no-underline uppercase text-sm`};
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
      url: '/',
    },
    {
      name: 'About',
      url: '/about-us',
    },
    {
      name: 'News',
      url: '/',
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
