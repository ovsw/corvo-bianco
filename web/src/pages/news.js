import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'

// Components
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import BlogPostsPreview from '../components/BlogPostsPreview'

const News = ({ data, errors }) => {
  const postNodes = (data || {}).posts ? mapEdgesToNodes(data.posts).filter(filterOutDocsWithoutSlugs) : []

  return (
    <Layout>{postNodes && <BlogPostsPreview title="Latest News" nodes={postNodes} browseMoreHref="/blog/" />}</Layout>
  )
}

export default News

export const query = graphql`
  query NewsPageQuery {
    posts: allSanityPost(limit: 6, sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`
