const FoodItemPreview = {
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

export default FoodItemPreview
