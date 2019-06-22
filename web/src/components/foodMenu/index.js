import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../../lib/helpers'
import FoodMenuShell from './Shell'

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
    }
  }
`

function CurrentMenu() {
  return (
    <StaticQuery
      query={query}
      render={data => {
        if (!data.sanityMenuSettings) {
          throw new Error('Missing Savory Pizza Current Menu. Please add one in the back end.')
        }
        const { savoryPizzaCurrMenu } = data.sanityMenuSettings
        return (
          <>
            <FoodMenuShell savoryPizzas={savoryPizzaCurrMenu} />
          </>
        )
      }}
    />
  )
}

export default CurrentMenu
