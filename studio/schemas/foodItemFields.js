const FoodItemFields = [
  {
    name: 'name',
    title: 'Name',
    type: 'string'
  },
  {
    name: 'slug',
    title: 'Slug',
    type: 'slug',
    description: 'this will be the address of the page for this menu item',
    validation: Rule => Rule.required().error('The slug is missing.'),
    options: {
      source: 'name',
      maxLength: 96
    }
  },
  {
    name: 'mainImage',
    title: 'Main image',
    type: 'mainImage'
  },
  {
    name: 'ingredients',
    title: 'Ingredients',
    type: 'string'
  },
  {
    name: 'price',
    title: 'Price ($)',
    type: 'number'
  },

  // {
  //   name: 'categories',
  //   title: 'Categories',
  //   type: 'array',
  //   of: [{ type: 'reference', to: { type: 'category' } }]
  // },
  {
    name: 'body',
    title: 'Body',
    type: 'blockContent'
  }
]

export default FoodItemFields
