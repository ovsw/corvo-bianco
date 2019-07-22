import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'
// import Icon from '../../ui/icons'

import config from '../../../config/website'

// components
import MainNav from './MainNav'
import TopBar from './TopBar'

// images

import LogoRoundImage from '../../images/corvo-bianco-logo-badge.png'
import LogoImage from '../../images/corvo-bianco-logo.png'
import ChalkBorderSource from '../../images/chalk-squalre.png'

// elements

// styles
const StyledHeader = styled.div`
  ${tw`relative`};
  z-index: 100;
  border-image: url(${ChalkBorderSource}) 70;
  border-image-repeat: round;
  border-bottom: 7px solid white;
`

const LogoMobile = styled.img`
  height: 100px;
  ${tw`lg:hidden px-4 pt-1`};
`
const Logo = styled.img`
  ${tw`hidden lg:block  relative`};
  ${tw`pr-16 pl-6 pt-1`};
  width: 420px;
`
const Line = styled.div`
  ${tw`absolute border-t-2 w-4 lg:w-16`};
  top: 50%;
  right: 0;
  border-top: 5px solid white;
  border-image: url(${ChalkBorderSource}) 70;
  border-image-repeat: round;
  border-image-outset: 0.5;
`

const Header = () => (
  <StyledHeader>
    <TopBar />
    <div>
      <nav className="bg-gray-800 mt-0 w-full">
        <div className="mx-auto flex items-stretch ">
          <div className="flex flex-none md:items-center relative ">
            <Line />
            <Link className="no-underline" to="/">
              <LogoMobile src={LogoRoundImage} alt={`${config.siteTitle} Logo`} />
              <Logo src={LogoImage} alt={`${config.siteTitle} Logo`} />
            </Link>
          </div>

          <div className="flex flex-1 xl:pr-0 content-center justify-center">
            <MainNav />
          </div>
        </div>
      </nav>

      {/* <button onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button> */}
    </div>
  </StyledHeader>
)

export default Header
