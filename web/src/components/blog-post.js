import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { format, distanceInWords, differenceInDays } from 'date-fns'
import BlockContent from './block-content'

// components
import Container from '../ui/Container'
import BigTitle from '../ui/BigTitle'
// import RoleList from './role-list'

// views
import GenericPage from '../views/GenericPage'

const PostContainer = styled(Container)`
  ${tw`md:max-w-lg xl:max-w-xl md:mx-auto`};
  ${tw` px-4 md:px-8`};
`
const PostTitle = styled(BigTitle)`
  border-top: 2px solid rgb(28, 151, 151);
  border-bottom: 2px solid rgb(28, 151, 151);
  ${tw`py-4 md:py-8 mb-2 md:mb-8 md:mb-12`};
  ${tw`text-2xl mt-0 md:text-5xl lg:text-6xl capitalize`};
`
const PostContent = styled.div`
  ${tw`text-lg md:text-2xl font-typewritter leading-loose`};
  ${tw`pt-4 mb-12`};
  color: #3a3a3a;
`
const PostDate = styled.p`
  ${tw`font-typewritter text-lg md:text-2xl mb-4 md:mb-8 `};
  color: #c1611f;
`

function BlogPost(props) {
  const { _rawBody, authors, categories, title, mainImage, publishedAt } = props
  return (
    <GenericPage mainImage={mainImage}>
      <PostContainer>
        <article>
          {publishedAt && (
            <PostDate>
              {differenceInDays(new Date(publishedAt), new Date()) > 3
                ? distanceInWords(new Date(publishedAt), new Date())
                : format(new Date(publishedAt), 'MMMM Do YYYY')}
            </PostDate>
          )}
          <PostTitle priority="1" dark>
            {title}
          </PostTitle>
          <PostContent>{_rawBody && <BlockContent blocks={_rawBody} />}</PostContent>
          <aside>
            {/* {authors && <RoleList items={authors} title="Authors" />} */}
            {/* {categories && (
            <div>
            <h3>Categories</h3>
            <ul>
            {categories.map(category => (
              <li key={category._id}>{category.title}</li>
              ))}
              </ul>
              </div>
            )} */}
          </aside>
        </article>
      </PostContainer>
    </GenericPage>
  )
}

export default BlogPost
