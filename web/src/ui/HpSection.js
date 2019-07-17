import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import media from 'src/lib/responsive'

const StyledSection = styled.div`
  ${tw`py-10`};
  background-color: ${props => (!props.altStyle ? '#222' : '#555')};
`
const HpSection = ({ children, altStyle }) => <StyledSection altStyle={altStyle}>{children}</StyledSection>

export default HpSection
