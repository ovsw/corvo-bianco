import React from 'react'
import { graphql } from 'gatsby'
import Container from '../ui/Container'
import GraphQLErrorList from '../components/graphql-error-list'
import ProjectPreviewGrid from '../components/project-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import FoodMenu from '../components/FoodMenu'

import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'

// allSanityMenuItem(limit: 12, sort: { fields: [publishedAt], order: DESC })

export const query = graphql`
  query MenuPageQuery {
    menuItems: allSanityMenuItem {
      edges {
        node {
          id
          ingredients
          mainImage {
            asset {
              _id
              fluid(maxWidth: 700) {
                ...GatsbySanityImageFluid
              }
            }
            alt
          }
          name
          price
          slug {
            current
          }
        }
      }
    }
  }
`

const ProjectsPage = props => {
  const { data, errors } = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const menuItemNodes = data && data.menuItems && mapEdgesToNodes(data.menuItems).filter(filterOutDocsWithoutSlugs)
  return (
    <Layout>
      <SEO title="Projects" />

      <FoodMenu />
    </Layout>
  )
}

export default ProjectsPage
