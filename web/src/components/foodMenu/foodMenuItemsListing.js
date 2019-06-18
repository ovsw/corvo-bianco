import React from 'react'
import FoodMenuItem from './foodMenuItem'

const FoodMenuItemsListing = ({ items }) => {
  return (
    <div className='flex flex-wrap'>
      {items.map((item) => <FoodMenuItem key={item.id} item={item} />) }
    </div>

  )
}

export default FoodMenuItemsListing
