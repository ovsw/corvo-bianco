import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { buildImageObj, cn, getBlogUrl } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'

const FoodMenuItem = ({ item: { name, slug, mainImage, ingredients, price } }) => (
  <div className="lg:w-1/4 text-center text-white mb-12">
    <h4 className="text-white text-4xl leading-none " style={{ fontFamily: 'Sacramento' }}>
      {name}
    </h4>
    <div className="mt-6 mb-4 rounded-full bg-red-400 inline-block overflow-hidden">
      {
        <img
          src={imageUrlFor(buildImageObj(mainImage))
            .width(200)
            .height(Math.floor((1 / 1) * 200))
            .url()}
          alt={name}
        />
      }
      {/* {!mainImage.crop && <Img fixed={mainImage.asset.fixed} /> } */}
    </div>
    <p className=""> ${price}</p>

    <p className="text-xs text-gray-300 px-6">{ingredients}</p>
  </div>
)

export default FoodMenuItem
