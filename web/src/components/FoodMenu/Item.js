import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'
// import Img from 'gatsby-image'
// import { buildImageObj, cn, getBlogUrl } from '../../lib/helpers'
// import { imageUrlFor } from '../../lib/image-url'

const Dots = styled.span`
  ${tw`border-b-4 border-dotted border-grey w-6 flex-1 relative`};
  bottom: 5px;
`

const FoodMenuItem = ({ item: { name, slug, mainImage, ingredients, price } }) => (
  <Link to={slug} className="w-full lg:w-1/2 text-center text-white pb-12 px-12">
    <span className="flex">
      <span className="text-2xl xl:text-3xl pr-4">{name}</span>
      <Dots />
      <span className="text-2xl xl:text-3xl pl-4"> ${price}</span>
    </span>
    <span className="block fpmt-normal text-grey-dark text-base tracking-wide text-left px-2 mt-2 font-typewritter">
      {ingredients}
    </span>
    {/* <span className="mt-6 mb-4 rounded-full bg-red-400 inline-block overflow-hidden"> */}
    {/* <img
        src={imageUrlFor(buildImageObj(mainImage))
          .width(200)
          .height(Math.floor((1 / 1) * 200))
          .url()}
        alt={name}
      /> */}

    {/* {!mainImage.crop && <Img fixed={mainImage.asset.fixed} /> } */}
    {/* </span> */}
  </Link>
)

export default FoodMenuItem
