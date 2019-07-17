import React from 'react'
import GlobalStyle from '../styles/global'
import SEO from './SEO'
import Header from './Header'

import 'typeface-cantata-one'
import 'typeface-open-sans'

const Layout = ({ children }) => (
  <>
    <SEO />
    <GlobalStyle />
    <Header />
    {children}
  </>
)

export default Layout
