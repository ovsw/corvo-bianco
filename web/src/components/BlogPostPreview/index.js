import { Link } from 'gatsby'
import React from 'react'
import { SectionTitle } from 'src/ui/Titles'
import HpSection from 'src/ui/HpSection'
import BlogPostPreviewItem from './Item'

function BlogPostPreviewGrid({ title, browseMoreHref, nodes }) {
  return (
    <HpSection altStyle>
      {title && <SectionTitle>{browseMoreHref ? <Link to={browseMoreHref}>{title}</Link> : title}</SectionTitle>}

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
    </HpSection>
  )
}

BlogPostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: '',
}

export default BlogPostPreviewGrid
