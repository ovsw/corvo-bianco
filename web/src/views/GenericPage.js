import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

// components
import PageHeader from '../components/PageHeader'

// elements
import HpSection from '../ui/HpSection'

const GenericPage = ({ mainImage, children }) => (
  <>
    <PageHeader mainImage={mainImage} />
    <HpSection>{children}</HpSection>
  </>
)

export default GenericPage
