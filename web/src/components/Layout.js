import React from 'react'
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
    <Header />
    {children}
    <Footer />
  </>
)

export default Layout
