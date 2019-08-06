import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

// components
import PageHeader from '../components/PageHeader'
import Layout from '../components/Layout'

const GenericPage = ({ mainImage, children }) => (
  <Layout>
    <PageHeader mainImage={mainImage} />
    {children}
  </Layout>
)

export default GenericPage
