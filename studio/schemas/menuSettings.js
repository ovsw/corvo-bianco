import { MdViewList } from 'react-icons/md'

export default {
  name: 'menuSettings',
  title: 'Current Menu Settings',
  type: 'document',
  icon: MdViewList,
  fieldsets: [
    { title: 'SEO Info',
      name: 'seo',
      options: { collapsible: true, collapsed: true }
    }
  ],
  fields: [
    {
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      fieldset: 'seo'
    },
    {
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      fieldset: 'seo'
    },
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
      title: 'Dessert Pizza Current Menu',
      name: 'dessertPizzaCurrMenu',
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
