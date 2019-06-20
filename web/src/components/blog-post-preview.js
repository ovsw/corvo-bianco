import { Link } from 'gatsby'
import React from 'react'
import Moment from 'react-moment'
import { buildImageObj, cn, getBlogUrl } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockText from './block-text'

function BlogPostPreview({ title, slug, publishedAt, mainImage, _rawExcerpt }) {
  return (
    <Link className="text-left" to={getBlogUrl(publishedAt, slug.current)}>
      <div>
        {mainImage && mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(300)
              .height(Math.floor((9 / 16) * 300))
              .url()}
            alt={mainImage.alt}
          />
        )}
      </div>
      <h3 className="text-2xl font-bold" style={{ fontFamily: 'Roboto Mono' }}>
        {title}
      </h3>
      <p>
        <Moment format="MMMM Do">{publishedAt}</Moment>
      </p>
      {_rawExcerpt && (
        <div>
          <BlockText blocks={_rawExcerpt} />
        </div>
      )}
    </Link>
  )
}

export default BlogPostPreview
