import { Link } from 'gatsby'
import React from 'react'
import { cn, buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockText from './block-text'

function ProjectPreview({ title, slug, mainImage, _rawExcerpt }) {
  return (
    <Link to={`/project/${slug.current}`}>
      <div>
        {mainImage && mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .url()}
            alt={mainImage.alt}
          />
        )}
      </div>
      <h3>{title}</h3>
      {_rawExcerpt && (
        <div>
          <BlockText blocks={_rawExcerpt} />
        </div>
      )}
    </Link>
  )
}

export default ProjectPreview
