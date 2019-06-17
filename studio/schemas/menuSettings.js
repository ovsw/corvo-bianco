import { MdViewList } from 'react-icons/md'

export default {
  name: 'menuSettings',
  title: 'Current Menu Settings',
  type: 'document',
  icon: MdViewList,
  fields: [
    {
      title: 'Savory Pizza Current Menu',
      name: 'savoryPizzaCurrMenu',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'Savory-Pizza' }
          ]
        }
      ]

    },
    {
      title: 'Desert Pizza Current Menu',
      name: 'desertPizzaCurrMenu',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'Dessert-Pizza' }
          ]
        }
      ]

    },
    {
      title: 'Puccia Current Menu',
      name: 'pucciaCurrMenu',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'puccia' }
          ]
        }
      ]

    },
    {
      title: 'Insalate Current Menu',
      name: 'insalateCurrMenu',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'insalata' }
          ]
        }
      ]

    }
  ]
}
