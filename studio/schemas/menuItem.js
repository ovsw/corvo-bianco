export default {
  name: 'menuItem',
  title: 'Menu Item',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
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
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'mainImage'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'this will be the address of the page for this menu item',
      options: {
        source: 'name',
        maxLength: 96
      }
    },

    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }]
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    }
  ],

  preview: {
    select: {
      title: 'name',
      price: 'price',
      image: 'mainImage',
      ingredients: 'ingredients'
    },
    prepare ({ title = 'No title', price, image, ingredients }) {
      return {
        title,
        subtitle: price
          ? `$${price}`
          : 'Missing price',
        media: image,
        description: ingredients || 'Missing ingredients'
      }
    }
  }
}
