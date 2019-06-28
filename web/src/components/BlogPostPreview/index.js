import { Link } from 'gatsby'
import React from 'react'
import { SectionTitle } from 'src/ui/Titles'
import HpSection from 'src/ui/HpSection'
import BlogPostPreviewItem from './Item'

function BlogPostPreviewGrid({ title, browseMoreHref, nodes }) {
  return (
    <HpSection altStyle>
      {title && <SectionTitle>{browseMoreHref ? <Link to={browseMoreHref}>{title}</Link> : title}</SectionTitle>}

      <ul className="flex flex-wrap md:flex-no-wrap pt-12 max-w-6xl mx-auto">
        {nodes &&
          nodes.map(node => (
            <li key={node.id} className="w-full max-w-md mx-auto md:mx-0 mb-10 md:mb-0  text-center px-6">
              <BlogPostPreviewItem {...node} />
            </li>
          ))}
      </ul>

      {browseMoreHref && (
        <div className="text-center mt-10 text-gray-400">
          <Link to={browseMoreHref}>Browse more</Link>
        </div>
      )}
    </HpSection>
  )
}

BlogPostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: '',
}

export default BlogPostPreviewGrid
