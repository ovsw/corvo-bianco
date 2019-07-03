import React from 'react'
import { Link } from 'gatsby'
import CorvoTheme from 'src/themes/CorvoTheme'
import { ThemeProvider } from 'styled-components'
import Header from 'src/components/Header'

import './layout.css'

import 'typeface-oswald'
// import 'typeface-special-elite'
// import 'typeface-carter-one'
import 'typeface-roboto'
import 'typeface-merriweather'

const Layout = ({ children, companyInfo, onHideNav, onShowNav, showNav, siteTitle }) => (
  <ThemeProvider theme={CorvoTheme}>
    <>
      <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />

      <div>{children}</div>

      <footer className="bg-gray-200">
        <div className="container mx-auto px-8">
          <div className="w-full flex flex-col md:flex-row py-6">
            <div className="flex-1">
              <Link className="text-gray-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" to="/">
                {companyInfo.name}
              </Link>

              {companyInfo && (
                <div>
                  {companyInfo.name}
                  <br />
                  {companyInfo.address1}
                  <br />
                  {companyInfo.address2 && (
                    <span>
                      {companyInfo.address2}
                      <br />
                    </span>
                  )}
                  {companyInfo.zipCode} {companyInfo.city}
                  {companyInfo.country && <span>, {companyInfo.country}</span>}
                </div>
              )}
            </div>

            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6 md:mt-4">Legal</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" className="no-underline hover:underline text-gray-800 hover:text-gray-500">
                    Terms
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" className="no-underline hover:underline text-gray-800 hover:text-gray-500">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6 md:mt-4">Social</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" className="no-underline hover:underline text-gray-800 hover:text-gray-500">
                    Facebook
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" className="no-underline hover:underline text-gray-800 hover:text-gray-500">
                    Instagram
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" className="no-underline hover:underline text-gray-800 hover:text-gray-500">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6 md:mt-4">Company</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <Link to="/blog" className="no-underline hover:underline text-gray-800 hover:text-gray-500">
                    News
                  </Link>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <Link to="/contact" className="no-underline hover:underline text-gray-800 hover:text-gray-500">
                    About Us
                  </Link>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <Link to="/contact" className="no-underline hover:underline text-gray-800 hover:text-gray-500">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center pb-2 text-sm text-gray-500">
          © {new Date().getFullYear()}, Built with <a href="https://www.sanity.io">Sanity</a> &amp;
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> by <a href="https://ovswebsites.com/">OVS Websites</a>
        </div>
      </footer>
    </>
  </ThemeProvider>
)

export default Layout
