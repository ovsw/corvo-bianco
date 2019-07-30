import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { buildImageObj } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'
import BlockContent from '../block-content'

// images
import BlackBoardBgImage from '../../images/10295.jpg'

// components
import Highlights from '../Highlights'

// elements
import Container from '../../ui/Container'
import BigTitle from '../../ui/BigTitle'

const MainWrapper = styled.section`
  background: url(${BlackBoardBgImage});
  ${tw`text-white relative  overflow-hidden`};
  padding-top: 150px;
  ${tw`md:py-12 px-8 xl:px-0`};

  h1 {
    ${tw`font-chalk`};
  }
  .category {
    ${tw`font-typewritter`};
    color: #c1611f;
    text-shadow: rgba(251, 29, 37, 0.86) 0px 0px 16.49px;
  }
`
const StyledArticle = styled.article`
  ${tw`block md:flex`};
`
const LeftColumn = styled.div`
  ${tw`w-full md:w-2/3 xl:w-1/2 xl:pt-12 xl:pl-12`};

  .category {
    ${tw`text-3xl`};
  }
  .ingredients {
    ${tw`font-typewritter text-2xl leading-normal xl:pr-12`};
  }
`
const Story = styled.div`
  ${tw`font-typewritter leading-loose pr-12`};
`
const RightColumn = styled.div`
  ${tw`w-full md:w-1/3 xl:w-1/2 md:relative text-center`};

  img {
    ${tw`absolute`};
    left: 200px;
    max-width: 1000px;
    margin-left: -100px;
    top: -200px;
    width: 400px;
    @media (min-width: 600px) {
      left: 0rem;
      width: 700px;
      max-width: 1000%;
    }
    @media (min-width: 1200px) {
      ${tw`static`};
      width: auto;
      max-width: 100%;
    }
  }
`
const StyledBigHeading = styled(BigTitle)`
  ${tw`text-5xl xl:text-6xl`};
`
const StyledSubHeading = styled(BigTitle)`
  ${tw`text-4xl xl:text-5xl`};
`
const SingleDish = ({
  dish: { name, mainImage, ingredients, price, _rawBody },
  category = 'No Category',
  suffix = 'No suffix',
}) => (
  <>
    <MainWrapper>
      <Container>
        <StyledArticle>
          <LeftColumn>
            <p className="category">{category}</p>
            <StyledBigHeading priority="1" hot>
              {name} {suffix}
            </StyledBigHeading>
            <p className="ingredients">{ingredients}</p>
            <StyledSubHeading priority="2" className="price">
              ${price}
            </StyledSubHeading>
            <Story>{_rawBody && <BlockContent blocks={_rawBody} />}</Story>
          </LeftColumn>
          <RightColumn>
            {mainImage && mainImage.asset && (
              <img
                src={imageUrlFor(buildImageObj(mainImage))
                  .width(600)
                  .height(Math.floor((16 / 16) * 600))
                  .fit('crop')
                  .url()}
                alt={mainImage.alt}
              />
            )}
          </RightColumn>
        </StyledArticle>
      </Container>
    </MainWrapper>
    <Highlights />
  </>
)

export default SingleDish
