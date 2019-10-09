import { IoIosCalendar } from 'react-icons/io'

export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: IoIosCalendar,
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
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: "The Event's Start and end dates.",
      validation: Rule => Rule.required().error('Event Date(s) are missing.')
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontend will require a slug to be set to be able to show the post',
      validation: Rule => Rule.required().error('The slug is missing.'),
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'mainImage',
      validation: Rule => Rule.required().error('An Main Image is required.')
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      description: 'This controls the order in which events are listed on the website.',
      type: 'datetime',
      validation: Rule => Rule.required().error('Must set a published date.')
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'blockText'
    },
    // {
    //   name: 'authors',
    //   title: 'Authors',
    //   type: 'array',
    //   of: [{ type: 'postAuthor' }]
    // },
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
  ],
  orderings: [
    {
      title: 'Publishing date old->new',
      name: 'publishingDateDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }, { field: 'title', direction: 'asc' }]
    },
    {
      title: 'Publishing date new–>old',
      name: 'publishingDateAsc',
      by: [{ field: 'publishedAt', direction: 'asc' }, { field: 'title', direction: 'asc' }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      image: 'mainImage'
    },
    prepare ({ title = 'No title', publishedAt, image, excerpt }) {
      return {
        title,
        subtitle: publishedAt
          ? new Date(publishedAt).toLocaleDateString()
          : 'Missing publishing date',
        media: image,
        description: excerpt
      }
    }
  }
}
