import React from 'react'
import FoodMenuItem from './Item'

const FoodMenuList = ({ items }) => (
  <>
    <div className="flex flex-wrap">
      {items.map(item => (
        <FoodMenuItem key={item.id} item={item} />
      ))}
    </div>
  </>
)

export default FoodMenuList
