import React from 'react'
import { graphql } from 'gatsby'
// import Container from '../components/container'
// import GraphQLErrorList from '../components/graphql-error-list'
// import Project from '../components/project'
// import SEO from '../components/seo'
// import Layout from '../containers/layout'

export const query = graphql`
  query MenuItemTemplateQuery($id: String!) {
    menuItem: sanityMenuItem(id: { eq: $id }) {
      categories {
        _id
        title
      }
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
      name
      slug {
        current
      }
      _rawBody
    }
  }
`

const ProjectTemplate = props => {
  const { data, errors } = props
  const menuItem = data && data.menuItem
  return <>{menuItem && <p>WE HAVE A Menu Item</p>}</>
}

export default ProjectTemplate
