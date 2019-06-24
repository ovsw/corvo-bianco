import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

export const SectionTitle = styled.h2`
  ${tw`w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800`};
  color: ${props => (props.altStyle ? props.theme.lightFg : props.theme.darkFg)};
`
