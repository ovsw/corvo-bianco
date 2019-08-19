import { MdSettings } from 'react-icons/md'

export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  liveEdit: false,
  __experimental_actions: ['update', 'publish' /* 'create', 'delete' */],
  icon: MdSettings,
  fieldsets: [
    { title: 'SEO Info',
      name: 'seo'
    }
  ],
  fields: [
    {
      name: 'seoTitle',
      description: 'Home Page SEO Title',
      title: 'SEO Title',
      type: 'string',
      fieldset: 'seo'
    },
    {
      name: 'seoDescription',
      description: 'Home Page SEO Description',
      title: 'SEO Description',
      type: 'text',
      fieldset: 'seo'
    }
    // {
    //   name: 'title',
    //   title: 'Title',
    //   type: 'string'
    // },
    // {
    //   name: 'description',
    //   title: 'Description',
    //   type: 'text'
    // }
    // {
    //   name: 'keywords',
    //   title: 'Keywords',
    //   type: 'array',
    //   of: [{ type: 'string' }],
    //   options: {
    //     layout: 'tags'
    //   }
    // },
    // {
    //   name: 'author',
    //   title: 'Author',
    //   type: 'string'
    // }
  ]
}
