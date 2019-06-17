import React from 'react'
import FoodMenuItem from './foodMenuItem'

const FoodMenuItemsListing = ({ items }) => {
  return (
    <>
      {items.map((item) => <FoodMenuItem key={item.id} item={item} />) }
    </>

  )
}

export default FoodMenuItemsListing
