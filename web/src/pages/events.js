import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'
import GraphQLErrorList from '../components/graphql-error-list'

// views
import GenericPage from '../views/GenericPage'

// Components
import BlogPostsPreview from '../components/BlogPostsPreview'

const Events = ({ data, errors }) => {
  const postNodes = (data || {}).posts ? mapEdgesToNodes(data.posts).filter(filterOutDocsWithoutSlugs) : []

  return (
    <>
      {errors && (
        <div>
          <GraphQLErrorList errors={errors} />
        </div>
      )}

      <GenericPage mainImage={data.eventsPage.mainImage}>
        {postNodes && <BlogPostsPreview title="Latest Events" nodes={postNodes} browseMoreHref="/news/" />}
      </GenericPage>
    </>
  )
}

export default Events

export const query = graphql`
  query EventsPageQuery {
    eventsPage: sanityPage(_id: { regex: "/(drafts.|)events/" }) {
      title
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
      _rawBody
    }

    posts: allSanityEvent(limit: 6, sort: { fields: [publishedAt], order: DESC }) {
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
