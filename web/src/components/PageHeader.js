import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'

const StyledHeaderWrapper = styled.div`
  ${tw``};
  img {
    width: 100%;
  }
`

const PageHeader = ({ mainImage }) => (
  <StyledHeaderWrapper>
    {mainImage && mainImage.asset && (
      <picture alt={mainImage.alt}>
        <source
          srcSet={imageUrlFor(buildImageObj(mainImage))
            .width(400)
            .height(250)
            .fit('crop')
            .url()}
          media="(max-width: 400px)"
        />

        <source
          srcSet={imageUrlFor(buildImageObj(mainImage))
            .width(600)
            .height(300)
            .fit('crop')
            .url()}
          media="(min-width: 401px) and (max-width: 1199px)"
        />

        <source
          srcSet={imageUrlFor(buildImageObj(mainImage))
            .width(1900)
            .height(350)
            .fit('crop')
            .url()}
          media="(min-width: 1200px)"
        />

        <img
          src={imageUrlFor(buildImageObj(mainImage))
            .width(1900)
            .height(350)
            .fit('crop')
            .url()}
          alt={mainImage.alt}
        />
      </picture>
    )}
  </StyledHeaderWrapper>
)

export default PageHeader
