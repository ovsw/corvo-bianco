import React from 'react'
import { graphql } from 'gatsby'
import GraphQLErrorList from '../components/graphql-error-list'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'

// Components
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Highlights from '../components/Highlights'
import FoodMenu from '../components/FoodMenu'
import MapSection from '../components/MapSection'
import BlogPostPreviewGrid from '../components/BlogPostsPreview'
// import ProjectCard from '../components/ProjectCard'

// Elements
// import Container from '../ui/Container'
// import Inner from '../elements/Inner'
// import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
// import Hero from '../views/Hero'
// import Projects from '../views/Projects'
// import About from '../views/About'
// import Contact from '../views/Contact'

// import avatar from '../images/avatar.jpg'

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }

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

const Index = ({ data, errors }) => {
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const { site } = data || {}
  const postNodes = (data || {}).posts ? mapEdgesToNodes(data.posts).filter(filterOutDocsWithoutSlugs) : []

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>
      <Hero />
      <Highlights />
      <FoodMenu />
      <MapSection />
      {postNodes && <BlogPostPreviewGrid title="Latest News" nodes={postNodes} browseMoreHref="/blog/" />}
    </Layout>
  )
}

export default Index
