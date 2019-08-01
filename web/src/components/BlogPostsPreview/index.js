import { Link } from 'gatsby'
import React from 'react'
import Post from './Post'

function BlogPostPreviewGrid({ title, browseMoreHref, nodes }) {
  return (
    <section>
      {title && <h2>{browseMoreHref ? <Link to={browseMoreHref}>{title}</Link> : title}</h2>}

      <ul className="flex flex-wrap md:flex-no-wrap pt-12 max-w-6xl mx-auto">
        {nodes &&
          nodes.map(node => (
            <li key={node.id} className="w-full max-w-md mx-auto md:mx-0 mb-10 md:mb-0  text-center px-6">
              <Post {...node} />
            </li>
          ))}
      </ul>

      {browseMoreHref && (
        <div className="text-center mt-10 text-gray-400">
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
