import { Link } from 'gatsby'
import React from 'react'
import Icon from './icons'
import { cn } from '../lib/helpers'

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <div>

    <nav className='bg-gray-800 p-2 mt-0 w-full'>
      <div className='container mx-auto flex flex-wrap items-center'>
        <div className='flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold'>
          <Link className='text-white no-underline hover:text-white hover:no-underline' to='/'>
            <span className='text-2xl pl-2'><i className='em em-grinning' /> {siteTitle}</span>
          </Link>
        </div>
        <div className='flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end'>
          <ul className='list-reset flex justify-between flex-1 md:flex-none items-center'>
            <li className='mr-3'>
              <a className='inline-block py-2 px-4 text-white no-underline' href='#'>Menu</a>
            </li>
            <li className='mr-3'>
              <a className='inline-block  py-2 px-4 text-gray-600 no-underline hover:text-gray-200 hover:text-underline' href='#'>Location</a>
            </li>
            <li className='mr-3'>
              <a className='inline-block  py-2 px-4 text-gray-600 no-underline hover:text-gray-200 hover:text-underline' href='#'>Reviews</a>
            </li>
            <li className='mr-3'>
              <a className='inline-block  py-2 px-4 text-gray-600 no-underline hover:text-gray-200 hover:text-underline' href='#'>About</a>
            </li>
            <li className='mr-3'>
              <a className='inline-block  py-2 px-4 text-gray-600 no-underline hover:text-gray-200 hover:text-underline' href='#'>Contact</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>

    {/* <button onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button> */}

  </div>
)

export default Header
