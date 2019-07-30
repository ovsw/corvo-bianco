import React from 'react'
import styled, { css } from 'styled-components'
import tw from 'tailwind.macro'

// const BaseStyle = css`
//   ${tw`font-bold my-6 font-chalk uppercase leading-none`};
//   ${tw`text-5xl xl:text-6xl`};
//   color: ${props => (props.color === 'light' ? 'white' : 'black')};
//   ${props =>
//     props.temp === 'hot'
//       ? 'text-shadow: rgb(28, 151, 151) 5px 6px 1px;'
//       : 'text-shadow: rgb(150, 50, 50) 0px 0px 1px, rgb(28, 151, 151) 5px 6px 0px, rgba(28, 151, 151, 0.5) 5px 6px 10px;'}
// `

const StyledTitle = styled.h2`
  ${tw`font-bold my-6 font-chalk uppercase leading-none`};
  ${tw`text-5xl xl:text-6xl`};
  color: white;

  ${props => (props.dark ? 'color: black' : 'color:white')};

  ${props =>
    props.hot
      ? 'text-shadow: rgba(224,118,40,1) 5px 6px 1px;'
      : 'text-shadow: rgb(150, 50, 50) 0px 0px 1px, rgb(28, 151, 151) 5px 6px 0px, rgba(28, 151, 151, 0.5) 5px 6px 10px;'}
`

const BigTitle = props => {
  const level = props.priority || '2'
  return (
    <StyledTitle as={`h${level}`} {...props}>
      {props.children}
    </StyledTitle>
  )
}

export default BigTitle
