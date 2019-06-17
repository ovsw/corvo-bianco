import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { buildImageObj, cn, getBlogUrl } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'

const FoodMenuItem = ({ item: { name, slug, mainImage, ingredients, price } }) => {
  return (
    <div>
      <h4>{name}</h4>
      <p>{ingredients}</p>

      {mainImage.crop && <img src={imageUrlFor(buildImageObj(mainImage))
        .width(400)
        .height(Math.floor((9 / 16) * 800))
        .url()} /> }
      {!mainImage.crop && <Img fluid={mainImage.asset.fluid} /> }
    </div>
  )
}

export default FoodMenuItem
