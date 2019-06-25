import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

export const SectionTitle = styled.h2`
  ${tw`w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800 uppercase `};
  color: ${props => (props.altStyle ? props.theme.lightFg : props.theme.darkFg)};
`

export const SectionSubTitle = styled.p`
  ${tw`text-center text-gray-800 w-full mx-32 lg:px-32 mb-8 text-gray-300`};
`
