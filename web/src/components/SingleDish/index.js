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

// images
import ChalkBorderSource from '../../images/chalk-square.png'
import PaintedWoodTexture2 from '../../images/h4-slide-33.jpg'

const DarkWrapper = styled.section`
  background: url(${PaintedWoodTexture2});
  background-position: top right;
  background-size: cover;
  ${tw`text-white relative  overflow-hidden`};
  padding-top: 150px;
  ${tw`pb-12 md:py-12 px-8 xl:px-0`};

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
    ${tw`font-typewritter md:text-2xl leading-normal pb-4 xl:pr-12`};
    color: #b7b7b7;
  }
`
const Story = styled.div`
  ${tw`font-typewritter leading-loose pt-4 md:pr-12`};
  border-top: 5px solid white;
  border-image: url(${ChalkBorderSource}) 70 repeat;
  border-image-outset: 2px;
  ${tw`mb-8`};
`
const RightColumn = styled.div`
  ${tw`w-full md:w-1/3 xl:w-1/2 md:relative text-center`};

  img {
    ${tw`absolute`};
    left: 200px;
    max-width: 1000px;

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
  ${tw`text-4xl md:text-5xl xl:text-6xl`};
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
    <DarkWrapper>
      <Container>
        <StyledArticle>
          <LeftColumn>
            <p className="category">{category}</p>
            <StyledBigHeading priority="1" hot>
              {name} {suffix}
            </StyledBigHeading>
            <StyledSubHeading priority="2" className="price">
              ${price}
            </StyledSubHeading>
            <p className="ingredients">{ingredients}</p>
            <Story>{_rawBody && <BlockContent blocks={_rawBody} />}</Story>
          </LeftColumn>
          <RightColumn>
            {mainImage && mainImage.asset && (
              <img
                src={imageUrlFor(buildImageObj(mainImage))
                  // .width(600)
                  // .height(Math.floor((16 / 16) * 600))
                  // .fit('crop')
                  .auto('format')
                  .url()}
                alt={mainImage.alt}
              />
            )}
          </RightColumn>
        </StyledArticle>
      </Container>
    </DarkWrapper>
    <Highlights />
  </>
)

export default SingleDish
