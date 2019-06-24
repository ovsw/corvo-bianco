import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import media from 'src/lib/responsive'

const StyledSection = styled.div`
  ${tw`py-10`};
  background-color: ${props => (props.kind === 'dark' ? '#222' : '#ccc')};
`
const HpSection = ({ children, kind = 'dark' }) => <StyledSection kind={kind}>{children}</StyledSection>

export default HpSection
