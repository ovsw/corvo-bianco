import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import FoodMenuShell from './Shell'
// import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../../lib/helpers'

const query = graphql`
  query CurrentMenuQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
    }

    sanityMenuSettings {
      savoryPizzaCurrMenu {
        id
        name
        ingredients
        price
        slug {
          current
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
            fluid(maxWidth: 700) {
              ...GatsbySanityImageFluid
            }
            fixed(width: 200) {
              ...GatsbySanityImageFixed
            }
          }
          alt
        }
      }
      dessertPizzaCurrMenu {
        id
        name
        ingredients
        price
        slug {
          current
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
            fluid(maxWidth: 700) {
              ...GatsbySanityImageFluid
            }
            fixed(width: 200) {
              ...GatsbySanityImageFixed
            }
          }
          alt
        }
      }
    }
  }
`

const FoodMenu = () => (
  <StaticQuery
    query={query}
    render={data => {
      if (!data.sanityMenuSettings) {
        throw new Error('Problem with missing menu items in backend. Please check and add as needed.')
      }

      const { savoryPizzaCurrMenu, dessertPizzaCurrMenu } = data.sanityMenuSettings
      // console.log(desertPizzaCurrMenu)
      return (
        <>
          <FoodMenuShell savoryPizzas={savoryPizzaCurrMenu} dessertPizzas={dessertPizzaCurrMenu} />
        </>
      )
    }}
  />
)

export default FoodMenu