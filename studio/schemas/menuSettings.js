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
            { type: 'menuItem' }
          ]
        }
      ]

    }
  ]
}
