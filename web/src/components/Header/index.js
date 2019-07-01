import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import React from 'react'
import Icon from '../../ui/icons'

const MenuItem = styled.li`
  ${tw`mr-3`};

  a {
    ${tw`inline-block py-2 px-2 md:px-4 text-white no-underline uppercase text-sm`};
  }
`

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => {
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
      name: 'About',
      url: '/about-us',
    },
    {
      name: 'Contact',
      url: '/contact',
    },
  ]
  return (
    <div>
      <nav className="bg-gray-800 p-2 mt-0 w-full">
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
            <Link className="text-white no-underline hover:text-white hover:no-underline" to="/">
              <span className="text-2xl pl-2">
                <i className="em em-grinning" /> {siteTitle}
              </span>
            </Link>
          </div>
          <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
            <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
              {MenuItems.map(item => (
                <MenuItem key={item.url}>
                  <Link to={item.url}>{item.name}</Link>
                </MenuItem>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* <button onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button> */}
    </div>
  )
}

export default Header
