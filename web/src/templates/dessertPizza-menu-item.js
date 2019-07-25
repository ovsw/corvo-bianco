import React from 'react'
import { graphql } from 'gatsby'
// import Container from '../components/container'
// import GraphQLErrorList from '../components/graphql-error-list'
// import Project from '../components/project'
// import SEO from '../components/seo'
// import Layout from '../containers/layout'

// components
import SingleDish from '../components/SingleDish'

export const query = graphql`
  query DessertPizzaMenuItemQuery($id: String!) {
    dessertPizzaMenuItem: sanityDessertPizza(id: { eq: $id }) {
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

const MenuItem = props => {
  const { data, errors } = props
  const menuItem = data && data.dessertPizzaMenuItem
  return <SingleDish dish={menuItem} />
}

export default MenuItem
