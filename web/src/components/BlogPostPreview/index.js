import { Link } from 'gatsby'
import React from 'react'
import BlogPostPreviewItem from './Item'

function BlogPostPreviewGrid({ title, browseMoreHref, nodes }) {
  return (
    <section className="bg-white py-20">
      {title && (
        <h2
          className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800 mb-16"
          style={{ fontFamily: 'Roboto Mono' }}
        >
          {browseMoreHref ? <Link to={browseMoreHref}>{title}</Link> : title}
        </h2>
      )}

      <ul className="flex max-w-5xl mx-auto">
        {nodes &&
          nodes.map(node => (
            <li key={node.id} className=" flex-1 text-center px-6">
              <BlogPostPreviewItem {...node} />
            </li>
          ))}
      </ul>

      {browseMoreHref && (
        <div className="text-center mt-10">
          <Link to={browseMoreHref}>Browse more</Link>
        </div>
      )}
    </section>
  )
}

BlogPostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: '',
}

export default BlogPostPreviewGrid
