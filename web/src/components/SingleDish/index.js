import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { buildImageObj } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'
import BlockContent from '../block-content'

// images
import BlackBoardBgImage from '../../images/10295.jpg'

// elements
import Container from '../../ui/Container'

const MainWrapper = styled.section`
  background: url(${BlackBoardBgImage});
  ${tw`text-white font-chalk relative pt-24`};
`

const SingleDish = ({ dish: { name, mainImage, ingredients, price, _rawBody } }) => (
  <MainWrapper>
    <Container>
      <article>
        <h1>{name}</h1>
        {mainImage && mainImage.asset && (
          <div>
            <p>Ingredients: {ingredients}</p>
            <p>Price: ${price}</p>
            {_rawBody && <BlockContent blocks={_rawBody} />}
            <img
              src={imageUrlFor(buildImageObj(mainImage))
                .width(600)
                .height(Math.floor((16 / 16) * 600))
                .fit('crop')
                .url()}
              alt={mainImage.alt}
            />
          </div>
        )}
      </article>
    </Container>
  </MainWrapper>
)

export default SingleDish
