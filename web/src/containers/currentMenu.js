import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'
import FoodMenu from '../components/foodMenu'

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
            }
            alt
          }
      }
    }
  }
`

function CurrentMenu (props) {
  console.log('placeholder from CurrentMenu')

  return (
    <StaticQuery
      query={query}
      render={data => {
        if (!data.sanityMenuSettings) {
          throw new Error(
            'Missing Savory Pizza Current Menu. Please add one in the back end.'
          )
        }
        const { savoryPizzaCurrMenu } = data.sanityMenuSettings
        return (
          <>
            <FoodMenu savoryPizzas={savoryPizzaCurrMenu} />
          </>
        )
      }}
    />
  )
}

export default CurrentMenu
