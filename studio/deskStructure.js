import S from '@sanity/desk-tool/structure-builder'
import { MdBusiness, MdSettings, MdLocalPizza, MdViewList } from 'react-icons/md'
import { FaFile } from 'react-icons/fa'

const hiddenTypes = ['category', 'companyInfo', 'page', 'person', 'post', 'menuItem', 'menuSettings', 'siteSettings']

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Current Food Menu Settings')
        .child(
          S.editor()
            .id('menuSettings')
            .schemaType('menuSettings')
            .documentId('menuSettings')
        )
        .icon(MdViewList),
      S.listItem()
        .title('Menu Items')
        .schemaType('menuItem')
        .child(S.documentTypeList('menuItem').title('Menu Items'))
        .icon(MdLocalPizza),
      S.listItem()
        .title('Blog posts')
        .schemaType('post')
        .child(S.documentTypeList('post').title('Blog posts')),
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('About')
                .child(
                  S.editor()
                    .id('aboutPage')
                    .schemaType('page')
                    .documentId('about')
                )
                .icon(FaFile),
              S.listItem()
                .title('Contact')
                .child(
                  S.editor()
                    .id('contactPage')
                    .schemaType('page')
                    .documentId('contact')
                )
                .icon(FaFile)
            ])
        ),
      S.listItem()
        .title('People')
        .schemaType('person')
        .child(S.documentTypeList('person').title('People')),
      S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      S.listItem()
        .title('Site Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(MdSettings),
      S.listItem()
        .title('Company Info')
        .child(
          S.editor()
            .id('companyInfo')
            .schemaType('companyInfo')
            .documentId('companyInfo')
        )
        .icon(MdBusiness),
      ...S.documentTypeListItems().filter(listItem => !hiddenTypes.includes(listItem.getId()))
    ])
