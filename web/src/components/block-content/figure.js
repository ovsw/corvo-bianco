import React from 'react'
import { buildImageObj } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'

function Figure (props) {
  return (
    <figure>
      {props.asset && (
        <img
          src={imageUrlFor(buildImageObj(props))
            .width(1200)
            .url()}
          alt={props.alt}
        />
      )}
      <figcaption >{props.caption}</figcaption>
    </figure>
  )
}

export default Figure
