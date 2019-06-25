import React from 'react'
import styled from 'styled-components'

const MapWrapper = styled.section`
  height: 600px;
`
const MapSection = () => (
  <MapWrapper
    dangerouslySetInnerHTML={{
      __html:
        '<iframe src="https://snazzymaps.com/embed/165265" width="100%" height="100%" style="border:none;"></iframe>',
    }}
  />
)

export default MapSection
