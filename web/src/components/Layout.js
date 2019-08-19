import React from 'react'
import Headroom from 'react-headroom'
import GlobalStyle from '../styles/global'
import SEO from './SEO'
import Header from './Header'
import Footer from './Footer'

import '../styles/tw.css'

import 'typeface-cantata-one'
import 'typeface-open-sans'

import 'typeface-cabin-sketch'
import 'typeface-special-elite'

const Layout = ({ children }) => (
  <>
    <SEO />
    <GlobalStyle />

    <Headroom style={{ zIndex: '99999', position: 'fixed' }} disable>
      <Header />
    </Headroom>
    {children}
    <Footer />
  </>
)

export default Layout
