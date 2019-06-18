import { Link } from 'gatsby'
import React from 'react'
import BlogPostPreview from './blog-post-preview'

function BlogPostPreviewGrid (props) {
  return (
    <section className='bg-white py-20' >

      {props.title && (
        <h2 className='w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800 mb-16' style={{ fontFamily: 'Roboto Mono' }}>
          {props.browseMoreHref ? (
            <Link to={props.browseMoreHref}>{props.title}</Link>
          ) : (
            props.title
          )}
        </h2>
      )}

      <ul className='flex max-w-5xl mx-auto'>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id} className=' flex-1 text-center px-6'>
              <BlogPostPreview {...node} />
            </li>
          ))}
      </ul>

      {props.browseMoreHref && (
        <div className='text-center mt-10'>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}

    </section>
  )
}

BlogPostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default BlogPostPreviewGrid
