import { Link } from 'gatsby'
import React from 'react'
import Post from './Post'

// elements
import Container from '../../ui/Container'
import HpSection from '../../ui/HpSection'

// elements
import BigTitle from '../../ui/BigTitle'

function BlogPostPreviewGrid({ title, browseMoreHref, mode, nodes }) {
  return (
    <HpSection>
      <Container>
        {title && (
          <BigTitle dark className="text-center">
            {browseMoreHref ? <Link to={browseMoreHref}>{title}</Link> : title}
          </BigTitle>
        )}

        <ul className="flex flex-wrap lg:flex-no-wrap pt-8 mx-auto max-w-sm lg:max-w-4xl list-reset md:mb-12">
          {nodes &&
            nodes.map(node => (
              <li
                key={node.id}
                className="w-full max-w-md mx-auto md:mx-0 mb-10 md:mb-0  text-center px-6 md:flex md:flex-column"
              >
                <Post {...node} mode={mode} />
                {/* mode can be either events or posts. it's used to form the url to the individual page. */}
              </li>
            ))}
        </ul>

        {browseMoreHref && (
          <div className="text-center md:mt-10 text-grey mb-12 font-chalk text-4xl">
            <Link to={browseMoreHref}>Browse more &gt;</Link>
          </div>
        )}
      </Container>
    </HpSection>
  )
}

BlogPostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: '',
}

export default BlogPostPreviewGrid
