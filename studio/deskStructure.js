import S from '@sanity/desk-tool/structure-builder'
import { MdBusiness, MdSettings, MdLocalPizza, MdViewList } from 'react-icons/md'
import { FaFile, FaPizzaSlice, FaLeaf, FaLayerGroup } from 'react-icons/fa'

const hiddenTypes = ['category', 'companyInfo', 'page', 'person', 'post', 'menuItem', 'menuSettings', 'siteSettings', 'Savory-Pizza', 'Dessert-Pizza', 'puccia', 'insalata']

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
            .title('Current Food Menu')
        )
        .icon(MdViewList),
      // S.listItem()
      //   .title('Menu Items')
      //   .schemaType('menuItem')
      //   .child(S.documentTypeList('menuItem').title('Menu Items'))
      //   .icon(MdLocalPizza),
      S.listItem()
        .title('Savory Pizzas')
        .schemaType('Savory-Pizza')
        .child(S.documentTypeList('Savory-Pizza').title('Savory Pizza'))
        .icon(FaPizzaSlice),
      S.listItem()
        .title('Dessert Pizzas')
        .schemaType('Dessert-Pizza')
        .child(S.documentTypeList('Dessert-Pizza').title('Dessert Pizzas'))
        .icon(MdLocalPizza),
      S.listItem()
        .title('Puccia')
        .schemaType('puccia')
        .child(S.documentTypeList('puccia').title('Puccia'))
        .icon(FaLayerGroup),
      S.listItem()
        .title('Insalate')
        .schemaType('insalata')
        .child(S.documentTypeList('insalata').title('Insalate'))
        .icon(FaLeaf),
      S.listItem()
        .title('Blog posts')
        .schemaType('post')
        .child(S.documentTypeList('post').title('Blog posts')),
      S.listItem()
        .title('Events')
        .schemaType('event')
        .child(S.documentTypeList('event').title('Events')),
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Events')
                .child(
                  S.editor()
                    .id('eventsPage')
                    .schemaType('page')
                    .documentId('events')
                )
                .icon(FaFile),
              S.listItem()
                .title('Reviews')
                .child(
                  S.editor()
                    .id('reviewsPage')
                    .schemaType('page')
                    .documentId('reviews')
                )
                .icon(FaFile),
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
                .title('News')
                .child(
                  S.editor()
                    .id('newsPage')
                    .schemaType('page')
                    .documentId('news')
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
                .icon(FaFile),
              S.listItem()
                .title('Privacy Policy and TOS')
                .child(
                  S.editor()
                    .id('privacyTosPage')
                    .schemaType('page')
                    .documentId('privacyTos')
                )
                .icon(FaFile),
              S.listItem()
                .title('ADA Compliance')
                .child(
                  S.editor()
                    .id('adaCompliance')
                    .schemaType('page')
                    .documentId('adaCompliance')
                )
                .icon(FaFile)
            ])
        ),
      // S.listItem()
      //   .title('People')
      //   .schemaType('person')
      //   .child(S.documentTypeList('person').title('People')),
      // S.listItem()
      //   .title('Categories')
      //   .schemaType('category')
      //   .child(S.documentTypeList('category').title('Categories')),
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
