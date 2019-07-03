import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Moment from 'react-moment'
import { buildImageObj, cn, getBlogUrl } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'
import BlockText from '../block-text'

const ItemWrapper = styled(Link)`
  ${tw`text-left block`};
  ${tw`bg-white rounded-lg overflow-hidden`};
`

function BlogPostPreviewItem({ title, slug, publishedAt, mainImage, _rawExcerpt }) {
  return (
    <ItemWrapper to={getBlogUrl(publishedAt, slug.current)}>
      {mainImage && mainImage.asset && (
        <img
          src={imageUrlFor(buildImageObj(mainImage))
            .width(400)
            .height(Math.floor((9 / 16) * 400))
            .url()}
          alt={mainImage.alt}
        />
      )}
      <div className="p-4 text-gray-600">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p>
          <Moment format="MMMM Do">{publishedAt}</Moment>
        </p>
        {_rawExcerpt && (
          <div>
            <BlockText blocks={_rawExcerpt} />
          </div>
        )}
      </div>
    </ItemWrapper>
  )
}

export default BlogPostPreviewItem
