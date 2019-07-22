import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { width as twWidth } from '../../tailwind'
import { hidden } from '../styles/utils'

const Wrapper = styled.svg`
  ${tw`absolute`};
  stroke: currentColor;
  ${props => props.hiddenMobile && hidden};
  color: ${props => props.stroke};
  width: ${props => props.svgWidth};
  fill: ${props => props.fill};
  left: ${props => props.left};
  top: ${props => props.top};
`

const icons = {
  triangle: {
    shape: (
      <polygon
        strokeWidth="1px"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="14.921,2.27 28.667,25.5 1.175,25.5 "
      />
    ),
    viewBox: '0 0 30 30',
  },
  circle: {
    shape: (
      <path d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z" />
    ),
    viewBox: '0 0 30 30',
  },
  arrowUp: {
    shape: (
      <>
        <path d="M28.74,20.81H1.26a1.26,1.26,0,0,1-1-2L14.16.5a1.25,1.25,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,18.8a1.25,1.25,0,0,1-1,2ZM3.81,18.29H26.22L15.16,3.37Z" />{' '}
        <path d="M28.74,42H1.26a1.28,1.28,0,0,1-1.13-.71A1.26,1.26,0,0,1,.26,40l13.9-18.29a1.28,1.28,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,40a1.26,1.26,0,0,1,.12,1.32A1.28,1.28,0,0,1,28.74,42ZM3.81,39.47H26.22L15.16,24.55Z" />
      </>
    ),
    viewBox: '0 0 30 42',
  },
  upDown: {
    shape: (
      <>
        <path d="M28.74,44.58a1.28,1.28,0,0,1-1-.51L15.16,27.13l-12.89,17a1.26,1.26,0,1,1-2-1.53l13.9-18.29a1.34,1.34,0,0,1,1-.5,1.24,1.24,0,0,1,1,.51L29.75,42.56a1.27,1.27,0,0,1-1,2Z" />
        <path d="M14.83,20.82h0a1.28,1.28,0,0,1-1-.52L.25,2a1.27,1.27,0,0,1,2-1.51L14.84,17.45,27.73.5a1.26,1.26,0,0,1,2,1.53L15.84,20.32A1.28,1.28,0,0,1,14.83,20.82Z" />
      </>
    ),
    viewBox: '0 0 30 44.58',
  },
  box: {
    shape: (
      <path d="M28,2V28H2V2H28m.13-2H1.88A1.88,1.88,0,0,0,0,1.88V28.13A1.88,1.88,0,0,0,1.88,30H28.13A1.87,1.87,0,0,0,30,28.13V1.88A1.88,1.88,0,0,0,28.13,0Z" />
    ),
    viewBox: '0 0 30 30',
  },
  hexa: {
    shape: (
      <polygon
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="27.5,21.904 15,28.809  2.5,21.904 2.5,8.095 15,1.19 27.5,8.095 "
      />
    ),
    viewBox: '0 0 30 30',
  },
  cloud: {
    shape: (
      <>
        <path d="M405.97 219.01c-1.07-78.06-64.9-141.24-143.22-141.24a142.8 142.8 0 0 0-94.5 35.68 143.35 143.35 0 0 0-45.54 78.1h-1.37C54.44 191.55 0 245.98 0 312.89s54.43 121.34 121.34 121.34h283.04c59.34 0 107.62-48.28 107.62-107.62 0-58.8-47.42-106.75-106.03-107.6zm-1.59 193.38H121.34c-54.87 0-99.5-44.63-99.5-99.5s44.63-99.5 99.5-99.5c2.92 0 6.01.15 9.44.48 5.83.56 11.06-3.6 11.85-9.4a121.45 121.45 0 0 1 40.07-74.64 120.97 120.97 0 0 1 80.05-30.22c66.94 0 121.4 54.45 121.4 121.39 0 2.4-.19 4.9-.38 7.52l-.08 1.12a10.92 10.92 0 0 0 11.99 11.63c2.9-.29 5.83-.44 8.7-.44 47.3 0 85.78 38.48 85.78 85.78s-38.48 85.78-85.78 85.78z" />
        <path d="M262.75 129.09c-45.65 0-84.74 34.12-90.9 79.37a10.92 10.92 0 0 0 21.63 2.95c4.7-34.48 34.48-60.48 69.27-60.48a10.92 10.92 0 0 0 0-21.84z" />
      </>
    ),
    viewBox: '0 0 512 512',
  },
  oven: {
    shape: (
      <>
        <path d="M199.53 312.4a7.5 7.5 0 0 0-7.5 7.5v10.22a7.5 7.5 0 0 0 15 0V319.9a7.5 7.5 0 0 0-7.5-7.5zM312.47 312.4a7.5 7.5 0 0 0-7.5 7.5v10.22a7.5 7.5 0 0 0 15 0V319.9a7.5 7.5 0 0 0-7.5-7.5zM274.87 323.76a7.5 7.5 0 0 0-10.58.7c-2 2.3-5.02 3.6-8.29 3.6s-6.29-1.3-8.29-3.6a7.5 7.5 0 1 0-11.3 9.88c4.86 5.55 12 8.73 19.59 8.73s14.73-3.18 19.58-8.73a7.5 7.5 0 0 0-.7-10.58z" />
        <path d="M487.93 367.8h-.2c0-23.85-.15-47.7-.15-71.57 0-88.54-60.73-170.72-141.12-204.53-56.31-23.68-121.33-24.77-178-1.66a230.16 230.16 0 0 0-55.2 32.11 7.5 7.5 0 0 0 9.26 11.8 215.37 215.37 0 0 1 45.55-27.44l20.2 35.67a178.18 178.18 0 0 0-74.7 59.07l-32.65-24.34a220.44 220.44 0 0 1 20.2-23.77 7.5 7.5 0 1 0-10.72-10.5 234.14 234.14 0 0 0-25.95 31.57l-.08.1a233.6 233.6 0 0 0-40.1 130.42v63.07h-.2A24.1 24.1 0 0 0 0 391.86v22.76a24.1 24.1 0 0 0 24.07 24.07h365.27a7.5 7.5 0 0 0 0-15H24.07c-5 0-9.07-4.07-9.07-9.07v-22.76c0-5 4.07-9.07 9.07-9.07h463.86c5 0 9.07 4.07 9.07 9.07v22.76c0 5-4.07 9.07-9.07 9.07h-68.6a7.5 7.5 0 0 0 0 15h68.6A24.1 24.1 0 0 0 512 414.62v-22.76a24.1 24.1 0 0 0-24.07-24.07zm-78.68-216.33a220.17 220.17 0 0 1 21.83 25.44l-32.66 24.34a178.18 178.18 0 0 0-74.68-59.07l20.19-35.68a215.85 215.85 0 0 1 65.32 44.97zm-227.14-50.62A216.06 216.06 0 0 1 256 88c25.51 0 50.33 4.32 73.9 12.85l-20.43 36.08a175.21 175.21 0 0 0-53.47-8.3 175.2 175.2 0 0 0-53.47 8.3l-20.42-36.08zM79.89 367.8H39.27v-62.6l40.63 6v56.6zm-40.14-77.7a215.19 215.19 0 0 1 32.7-100.78l32.8 24.45a175.01 175.01 0 0 0-25.15 82.3l-40.35-5.97zm338.96 77.7H131.84c-1.5-20.26 3.5-36.17 14.94-47.34 4.96-4.85 10.92-8.7 17.23-12.77 7.02-4.53 14.28-9.21 20.52-15.59 4.54-4.64 7.78-9.72 9.63-15.1 1.44-4.17 2.35-8.01 3.24-11.73 1.63-6.82 3.03-12.7 7.36-18.52 5.73-7.7 13.85-14.57 24.13-20.43 17.23-9.83 36.85-14.99 54.88-14.35a87.44 87.44 0 0 0-5.27 14.6c-5.08 19.7-.83 36.09 12.29 47.36a7.5 7.5 0 0 0 12.36-5.1c0-.08.68-7.71 4.82-15.02 4.22-7.45 10.29-11.74 18.47-13-.3 4.8-.21 11.1 1.09 18.19 2.63 14.33 10.88 35 35.24 52.01 18.8 13.14 19.49 37.09 15.94 56.8zm38.4 0h-23.18c5.05-31.4-2.67-55.17-22.57-69.08-38.04-26.59-29.41-62.3-29.04-63.77a7.5 7.5 0 0 0-6.77-9.42 57.89 57.89 0 0 0-3.67-.12c-21.57 0-33.4 12.51-39.16 25.15-5.42-18.13 9.03-40.48 9.2-40.75a7.5 7.5 0 0 0-4.97-11.54 95.8 95.8 0 0 0-16.2-1.35c-19.73 0-40.79 5.81-59.3 16.37-12.08 6.89-21.75 15.14-28.72 24.5-6.17 8.29-8.08 16.28-9.92 24-.8 3.37-1.63 6.85-2.83 10.32-1.13 3.27-3.2 6.46-6.17 9.5-5.07 5.18-11.32 9.21-17.93 13.48-6.66 4.3-13.54 8.74-19.59 14.64-14.54 14.21-21.08 33.72-19.49 58.07H94.9v-63.06c0-31.66 9.22-62.33 26.66-88.7a162.75 162.75 0 0 1 80.03-62.95h.01a160.11 160.11 0 0 1 54.4-9.46 160.1 160.1 0 0 1 54.4 9.46 162.75 162.75 0 0 1 80.03 62.95 160.23 160.23 0 0 1 26.67 88.7v63.06zm-10.37-154.04l32.8-24.44a215.18 215.18 0 0 1 32.7 100.78l-40.35 5.98a175.02 175.02 0 0 0-25.15-82.31zm66 154.04H432.1v-56.6l40.63-6v62.6z" />
      </>
    ),
    viewBox: '0 0 512 512',
  },
  quality: {
    shape: (
      <>
        <path d="M321.36 63.8a145.49 145.49 0 0 0-168.81 27.07c-51.9 51.9-57.1 134.64-12.09 192.47a8.06 8.06 0 0 0 11.33 1.42 8.07 8.07 0 0 0 1.41-11.33c-40.02-51.42-35.4-125 10.76-171.15A129.38 129.38 0 0 1 314.08 78.2a8.07 8.07 0 1 0 7.28-14.4zM385.79 128.24a8.07 8.07 0 0 0-14.4 7.27 129.39 129.39 0 0 1-24.1 150.1c-46.16 46.15-119.74 50.77-171.16 10.76a8.07 8.07 0 0 0-9.9 12.73 145 145 0 0 0 89.26 30.59 145.7 145.7 0 0 0 103.2-42.67 145.5 145.5 0 0 0 27.1-168.78zM364.94 97.5a147.94 147.94 0 0 0-12.88-12.87 8.07 8.07 0 1 0-10.69 12.09 132.46 132.46 0 0 1 11.48 11.47 8.05 8.05 0 0 0 11.39.7 8.07 8.07 0 0 0 .7-11.38z" />
        <path d="M446.07 208.41a27.38 27.38 0 0 0 0-28.62l-10.62-17.4a11.36 11.36 0 0 1-1.52-7.67l3.16-20.1a27.37 27.37 0 0 0-10.98-26.5l-16.45-11.97a11.36 11.36 0 0 1-4.36-6.5l-4.79-19.8a27.37 27.37 0 0 0-20.24-20.25l-19.8-4.8a11.35 11.35 0 0 1-6.5-4.35l-11.98-16.46a27.36 27.36 0 0 0-26.5-10.98l-20.1 3.16c-2.66.42-5.38-.12-7.67-1.52L270.3 4.04a27.38 27.38 0 0 0-28.62 0l-17.4 10.61a11.36 11.36 0 0 1-7.68 1.52l-20.1-3.16a27.37 27.37 0 0 0-26.5 10.98l-11.96 16.45a11.36 11.36 0 0 1-6.51 4.36l-19.8 4.79a27.38 27.38 0 0 0-20.25 20.24l-4.8 19.8a11.35 11.35 0 0 1-4.35 6.51L85.9 108.11a27.37 27.37 0 0 0-10.98 26.5l3.16 20.1c.42 2.66-.12 5.38-1.52 7.67L65.93 179.8a27.38 27.38 0 0 0 0 28.61l10.62 17.4c1.4 2.3 1.94 5.03 1.52 7.68l-3.16 20.1a27.37 27.37 0 0 0 10.98 26.5l16.45 11.97a11.35 11.35 0 0 1 4.35 6.5l4.8 19.8a27.37 27.37 0 0 0 20.24 20.25l8.27 2-55.95 124.81a8.07 8.07 0 0 0 8.31 11.32l45.03-5.39 25.93 37.2a8.07 8.07 0 0 0 13.98-1.32l57.15-127.48 7.24 4.42a27.44 27.44 0 0 0 28.62 0l7.5-4.58 57.22 127.64a8.07 8.07 0 0 0 13.98 1.32l25.93-37.2 45.02 5.39a8.07 8.07 0 0 0 8.32-11.31L372.3 340.54l7.96-1.92a27.38 27.38 0 0 0 20.25-20.25l4.79-19.8a11.35 11.35 0 0 1 4.35-6.5l16.46-11.97a27.37 27.37 0 0 0 10.98-26.5l-3.16-20.11c-.42-2.65.12-5.38 1.52-7.67l10.62-17.41zM168.4 487.63l-20.56-29.48a8.06 8.06 0 0 0-7.57-3.4l-35.68 4.27 50.98-113.72c.93.69 1.77 1.5 2.45 2.46L170 364.2a27.73 27.73 0 0 0 3.81 4.24l-26.83 59.86a8.07 8.07 0 0 0 14.72 6.6l26.74-59.64c2.63.36 5.34.35 8.06-.08l20.1-3.16c1.21-.19 2.43-.17 3.61.02l-51.8 115.58zm239.32-28.6l-35.68-4.27a8.06 8.06 0 0 0-7.57 3.4l-20.56 29.47L292.1 372c1.09-.15 2.2-.15 3.3.02l20.1 3.17c2.83.44 5.65.43 8.38.02l26.76 59.7a8.07 8.07 0 1 0 14.72-6.6l-26.93-60.1c1.3-1.2 2.5-2.54 3.57-4l11.96-16.46a11.33 11.33 0 0 1 2.72-2.64l51.06 113.9zM432.3 200l-10.62 17.4a27.52 27.52 0 0 0-3.68 18.59l3.16 20.1a11.3 11.3 0 0 1-4.53 10.94l-16.46 11.97a27.51 27.51 0 0 0-10.55 15.76l-4.79 19.8a11.3 11.3 0 0 1-8.36 8.36l-19.8 4.8a27.51 27.51 0 0 0-15.76 10.54l-11.96 16.45a11.3 11.3 0 0 1-10.94 4.53l-20.1-3.16a27.52 27.52 0 0 0-18.59 3.68l-17.4 10.62a11.3 11.3 0 0 1-11.82 0l-17.4-10.62a27.5 27.5 0 0 0-18.59-3.68l-20.1 3.16a11.3 11.3 0 0 1-10.95-4.53l-11.97-16.46a27.51 27.51 0 0 0-15.76-10.54l-19.8-4.8a11.3 11.3 0 0 1-8.35-8.35l-4.8-19.8A27.51 27.51 0 0 0 111.83 279l-16.45-11.97a11.3 11.3 0 0 1-4.53-10.94L94 236a27.51 27.51 0 0 0-3.68-18.58L79.7 200a11.3 11.3 0 0 1 0-11.81l10.62-17.42A27.51 27.51 0 0 0 94 152.21l-3.16-20.11a11.3 11.3 0 0 1 4.53-10.94l16.46-11.97a27.51 27.51 0 0 0 10.54-15.76l4.8-19.8c1-4.15 4.2-7.35 8.35-8.36l19.8-4.8a27.5 27.5 0 0 0 15.76-10.54l11.97-16.45A11.3 11.3 0 0 1 194 28.95l20.1 3.16a27.5 27.5 0 0 0 18.58-3.68L250.1 17.8a11.3 11.3 0 0 1 11.81 0l17.41 10.62a27.5 27.5 0 0 0 18.58 3.68L318 28.95a11.3 11.3 0 0 1 10.94 4.53l11.97 16.46a27.51 27.51 0 0 0 15.76 10.54l19.8 4.8c4.15 1 7.36 4.2 8.36 8.36l4.8 19.8a27.51 27.51 0 0 0 10.54 15.76l16.45 11.96a11.3 11.3 0 0 1 4.53 10.94L418 152.2a27.51 27.51 0 0 0 3.68 18.59l10.62 17.4a11.3 11.3 0 0 1 0 11.82z" />
        <path d="M350.42 169a14.44 14.44 0 0 0-12.15-9.98l-48.55-5.75-20.48-44.4A14.44 14.44 0 0 0 256 100.4a14.44 14.44 0 0 0-13.24 8.47l-20.48 44.4-48.55 5.75a14.43 14.43 0 0 0-12.15 9.98 14.44 14.44 0 0 0 3.97 15.2l35.9 33.2-9.54 47.95a14.43 14.43 0 0 0 5.74 14.64 14.51 14.51 0 0 0 15.69.93L256 257.04l42.66 23.88a14.43 14.43 0 0 0 15.69-.93c4.66-3.38 6.85-9 5.73-14.64l-9.53-47.95 35.9-33.2a14.44 14.44 0 0 0 3.97-15.2zm-54.14 39.62a8.07 8.07 0 0 0-2.43 7.5l9.75 49.07-43.66-24.44a8.06 8.06 0 0 0-7.88 0l-43.66 24.44 9.75-49.07a8.06 8.06 0 0 0-2.44-7.5l-36.73-33.97 49.69-5.9a8.07 8.07 0 0 0 6.37-4.62L256 118.7l20.95 45.43a8.07 8.07 0 0 0 6.38 4.63l49.68 5.89-36.73 33.97z" />
      </>
    ),
    viewBox: '0 0 512 512',
  },
  balance: {
    shape: (
      <>
        <path d="M501.8 188.47h-6.83C488.3 154.68 454.15 95.2 439.03 70a27.01 27.01 0 1 0-42.3-22.27c0 9.23 4.67 17.4 11.76 22.27-15.12 25.2-49.28 84.68-55.93 118.47h-6.84a10.2 10.2 0 0 0-10.2 10.2c0 48.65 39.59 88.24 88.24 88.24 48.66 0 88.24-39.59 88.24-88.24a10.2 10.2 0 0 0-10.2-10.2zM423.76 41.1a6.63 6.63 0 1 1-.02 13.27 6.63 6.63 0 0 1 .02-13.27zm-.02 43.1c17.26 29.14 43.92 77.66 50.47 104.27H373.34c6.19-24.91 30.17-70.26 50.4-104.27zm.02 182.3c-33.94 0-62.14-25.05-67.08-57.63h134.16c-4.94 32.58-33.14 57.64-67.08 57.64z" />
        <path d="M346.78 432.67h-26.96v-25.9a10.2 10.2 0 0 0-10.2-10.2h-25.9v-284.9a38.6 38.6 0 0 0 11.46-25.56l43.13-9.28a10.2 10.2 0 0 0-4.3-19.94l-43.22 9.3a38.73 38.73 0 0 0-34.26-20.73 38.75 38.75 0 0 0-38.63 36.41l-107.84 23.21a27 27 0 0 0-48.84 15.91 27 27 0 0 0 11.75 22.28c-15.12 25.2-49.28 84.68-55.94 118.46H10.2A10.2 10.2 0 0 0 0 271.93c0 48.66 39.58 88.24 88.24 88.24 48.65 0 88.24-39.58 88.24-88.24a10.2 10.2 0 0 0-10.2-10.2h-6.84c-6.65-33.78-40.8-93.27-55.93-118.46a27.05 27.05 0 0 0 11.47-18.38l107.14-23.06a38.94 38.94 0 0 0 7.22 9.84v284.9h-25.9a10.2 10.2 0 0 0-10.2 10.2v25.9h-26.96a10.2 10.2 0 0 0-10.2 10.2v38.23a10.2 10.2 0 0 0 10.2 10.2h180.5a10.2 10.2 0 0 0 10.2-10.2v-38.23a10.2 10.2 0 0 0-10.2-10.2zM88.24 114.37a6.63 6.63 0 1 1-.02 13.26 6.63 6.63 0 0 1 .02-13.26zm0 225.4c-33.94 0-62.14-25.05-67.08-57.64h134.16c-4.94 32.59-33.14 57.64-67.08 57.64zm50.45-78.04H37.82c6.19-24.91 30.17-70.26 50.4-104.26 17.26 29.13 43.91 77.65 50.47 104.26zM256.53 65.85c10.1 0 18.3 8.21 18.3 18.3s-8.2 18.31-18.3 18.31-18.3-8.21-18.3-18.3 8.2-18.3 18.3-18.3zm6.79 56.4v274.32h-13.58V122.25a38.66 38.66 0 0 0 13.58 0zm-49.68 294.72h85.78v15.7h-85.78v-15.7zm122.94 53.93h-160.1v-17.83h160.1v17.83zM385.42 56.89a10.2 10.2 0 0 0-12.12-7.83l-7.43 1.6a10.2 10.2 0 0 0 4.3 19.94l7.42-1.6a10.2 10.2 0 0 0 7.83-12.11z" />
      </>
    ),
    viewBox: '0 0 512 512',
  },
  one: {
    shape: (
      <>
        <path d="M257.6 183.07a70.43 70.43 0 0 0-43.23-23.55l-38.49-6.03V86.3a28.96 28.96 0 0 0-28.93-28.93h-.43a28.96 28.96 0 0 0-28.93 28.93V194.2l-39.8-17.05c-7.99-3.42-17.1-2.61-24.36 2.18a25.73 25.73 0 0 0-11.6 21.53v.37c0 7.36 3.15 14.39 8.66 19.28l67.1 59.67v28.99a7.5 7.5 0 1 0 15 0V276.8a7.5 7.5 0 0 0-2.52-5.6l-69.62-61.91a10.8 10.8 0 0 1-3.62-8.07v-.36c0-3.7 1.77-6.99 4.85-9.02a10.64 10.64 0 0 1 10.2-.91l50.25 21.53a7.42 7.42 0 0 0 3.7.57l.25-.03.46-.07.4-.1.3-.08c.15-.04.29-.1.44-.15l.24-.09c.14-.05.28-.12.41-.19l.25-.11.36-.21c.09-.06.18-.1.27-.17l.29-.2.3-.23.23-.2.32-.3.2-.2c.1-.1.2-.2.29-.32l.2-.27.23-.3c.1-.14.18-.28.26-.42l.12-.2a7.47 7.47 0 0 0 .94-3.62V86.3c0-7.68 6.24-13.93 13.93-13.93h.43c7.68 0 13.93 6.25 13.93 13.93v72.03c0 .28.02.55.05.82a7.5 7.5 0 0 0 6.29 8.15l44.88 7.04.1.02a55.68 55.68 0 0 1 47.63 54.86v.77c0 12.69-3.1 25.35-8.96 36.6l-20.34 39.1a7.5 7.5 0 1 0 13.3 6.92l20.34-39.09A94.66 94.66 0 0 0 274.82 230v-.77a70.41 70.41 0 0 0-17.23-46.16zM146.74 37.79a7.5 7.5 0 0 0 7.5-7.5V7.5a7.5 7.5 0 1 0-15 0v22.79a7.5 7.5 0 0 0 7.5 7.5z" />
        <path d="M193.19 98.9a7.5 7.5 0 0 0 7.5 7.5h22.79a7.5 7.5 0 1 0 0-15h-22.8a7.5 7.5 0 0 0-7.5 7.5zM194.74 56.47c1.92 0 3.84-.73 5.3-2.2l16.12-16.11a7.5 7.5 0 0 0-10.6-10.61l-16.12 16.11a7.5 7.5 0 0 0 5.3 12.8zM87.52 54.27a7.48 7.48 0 0 0 10.6 0 7.5 7.5 0 0 0 0-10.6l-16.1-16.12a7.5 7.5 0 0 0-10.61 10.6l16.11 16.12zM64.42 106.4H87.2a7.5 7.5 0 1 0 0-15H64.4a7.5 7.5 0 1 0 0 15z" />
      </>
    ),
    viewBox: '0 0 316.66 316.66',
  },
  fast: {
    shape: (
      <>
        <path d="M511 279.65a202.38 202.38 0 0 0-58.16-122.75 200.8 200.8 0 0 0-98.78-54.24v-25.4a34.06 34.06 0 0 0 25.79-33c0-18.75-15.25-34-34-34h-72c-18.75 0-34 15.25-34 34 0 15.92 11 29.31 25.8 33v25.47a200.8 200.8 0 0 0-98.48 54.17 202.97 202.97 0 0 0-16.98 19.27c-.26-.02-.5-.04-.76-.04H78.17a10 10 0 0 0 0 20h58.4a200.47 200.47 0 0 0-17.73 38.44H10a10 10 0 0 0 0 20h103.18a203.32 203.32 0 0 0-4.96 38.44H64a10 10 0 0 0 0 20h44.54a203.02 203.02 0 0 0 6.24 38.43H50a10 10 0 0 0 0 20h71.17a200.83 200.83 0 0 0 46 71.14 202.37 202.37 0 0 0 122.86 58.18 202.48 202.48 0 0 0 130.06-31.6 10 10 0 0 0-10.91-16.77c-71.56 46.6-167.4 36.52-227.87-23.96-70.96-70.96-70.96-186.42 0-257.38 70.96-70.96 186.42-70.96 257.38 0 60.4 60.4 70.53 156.15 24.09 227.67a10 10 0 0 0 16.77 10.9A202.64 202.64 0 0 0 511 279.64zM259.86 44.26c0-7.72 6.28-14 14-14h72c7.72 0 14 6.28 14 14s-6.28 14-14 14h-72c-7.72 0-14-6.28-14-14zm25.8 55.04V78.26h48.4v21a203.76 203.76 0 0 0-48.4.04z" />
        <path d="M445.77 425.5a10.03 10.03 0 0 0-7.07 17.07 10.01 10.01 0 0 0 17.07-7.07c0-2.63-1.07-5.21-2.93-7.07a10.1 10.1 0 0 0-7.07-2.93zM310 144.6c-85.54 0-155.13 69.6-155.13 155.14S224.47 454.87 310 454.87s155.13-69.6 155.13-155.13S395.53 144.6 310 144.6zm0 290.27c-74.51 0-135.13-60.62-135.13-135.13S235.5 164.6 310 164.6s135.13 60.62 135.13 135.13S384.51 434.87 310 434.87z" />
        <path d="M373.26 222.34l-49.53 49.53a30.88 30.88 0 0 0-27.46 0l-22.16-22.17a10 10 0 0 0-14.15 14.14l22.17 22.17a30.87 30.87 0 0 0-3.2 13.73c0 17.13 13.94 31.07 31.07 31.07s31.07-13.94 31.07-31.07c0-4.93-1.15-9.59-3.2-13.73l48.08-48.07 1.45-1.46a10 10 0 0 0-14.14-14.14zM310 310.81c-6.1 0-11.07-4.97-11.07-11.07s4.96-11.08 11.07-11.08a11.08 11.08 0 0 1 0 22.15zM416.92 289.86h-9.27a10 10 0 0 0 0 20h9.27a10 10 0 0 0 0-20zM212.35 289.62h-9.27a10 10 0 0 0 0 20h9.27a10 10 0 0 0 0-20zM310.12 212.08a10 10 0 0 0 10-10v-9.26a10 10 0 0 0-20 0v9.26a10 10 0 0 0 10 10zM309.88 387.4a10 10 0 0 0-10 10v9.26a10 10 0 0 0 20 0v-9.27a10 10 0 0 0-10-10zM10 351.44c-2.63 0-5.21 1.07-7.07 2.93A10.08 10.08 0 0 0 0 361.44c0 2.64 1.07 5.21 2.93 7.07s4.44 2.93 7.07 2.93 5.21-1.07 7.07-2.93c1.86-1.86 2.93-4.44 2.93-7.07s-1.07-5.21-2.93-7.07a10.07 10.07 0 0 0-7.07-2.93z" />
      </>
    ),
    viewBox: '0 0 511.99 511.99',
  },
  pizza: {
    shape: (
      <>
        <path d="M63.9 156.79c-1.48 11.52-3.53 22.76-4.18 34.08-.72 12.56-6.68 23.1-11.1 34.3-2.3 5.84-4.9 11.61-6.71 17.61-3.18 10.51-2.24 21 1.46 31.26a67.13 67.13 0 0 0 4 9.64c9.66 17.54 13.05 36.65 14.52 56.3.2 2.8.84 5.65 1.26 8.32.86 5.56 6.4 18.7 10.71 23.89s23.32 17.66 34.74 26.45a24.65 24.65 0 0 1 4.45 4.62c6.54 8.58 12.86 17.32 19.49 25.84 9.24 11.87 21.57 18.34 36.42 20.1 9.55 1.14 19.12 2.08 28.65 3.36a37.05 37.05 0 0 1 9.03 2.5c12.7 5.2 25.33 10.6 38.37 16.08 6.88 2.62 17.5 1.52 20.53-.06 14-5.93 28.1-11.65 41.94-17.95a16.28 16.28 0 0 0 7.21-7.4c1.63-3.42.21-7.24-2.9-9.84a9.67 9.67 0 0 0-10.7-1.5l-30.6 13.11c-1.5.64-3.03 1.2-5.01 1.99a152.06 152.06 0 0 1-20.54-.17c-1.5-.5-2.87-.9-4.18-1.42a51.29 51.29 0 0 1-5.92-2.57c-19.44-10.8-40.74-14.26-62.5-15.91-10.55-.8-19.38-5.12-25.15-14-13.48-20.76-30.27-38.05-51.23-51.25a27.06 27.06 0 0 1-3.22-2.93c-2.61-3.13-8.5-12.1-10.26-17.1-.7-5.69-1.73-10.69-1.84-15.7-.45-19.94-7.7-37.86-16.17-55.37-5.62-11.6-5.94-22.89-.04-34.39 1.51-2.94 2.4-6.22 3.99-9.1 8.48-15.33 11.14-32.1 12.47-49.23.3-3.93.94-7.84 1.56-12.82 1.09-4.93 8.03-14.78 9.97-17.3 8.9-6.67 17.18-12.48 24.99-18.87a104.4 104.4 0 0 0 13.26-13.23 143.3 143.3 0 0 0 12.79-17.15c8.08-13.04 19.83-18.8 34.78-19.64 9.08-.52 18.3-1.23 27.11-3.28 7.48-1.74 14.5-5.49 21.68-8.44 5.8-2.38 11.53-4.9 17.8-7.57 5.57-.8 17.43 0 20.4.42a37.14 37.14 0 0 1 3.72 1.06 95.37 95.37 0 0 1 10.06 4.28c16.2 8.82 33.71 12.43 51.91 13.6a104.26 104.26 0 0 1 12.8 1.8 29.97 29.97 0 0 1 17.85 10.95 39.44 39.44 0 0 1 3.02 3.95 152.66 152.66 0 0 0 48.07 48.13c1.63 1.03 3.07 2.36 5.21 4.03 3.44 2.92 8.36 12.77 9.96 17.27 1.57 12.8 2.92 24.48 4.5 36.13a37.13 37.13 0 0 0 2.4 9.05c3.96 9.66 8.1 19.26 12.32 28.8 4.3 9.69 4.34 19.26-.1 28.9-1.72 3.76-2.96 7.77-4.94 11.4-8.48 15.5-11.37 32.35-12.62 49.68-.28 3.92-.96 7.8-1.57 12.62-.65 1.54-6.6 13.55-9.9 17.33l-31.08 23.3c-3.89 2.91-5.36 6.8-4.01 11.41 1.18 4.02 4.24 6.71 8.37 6.69a14.91 14.91 0 0 0 8.18-2.74c12.31-8.97 24.4-18.26 37.15-27.88 3.45-2.07 9.58-12.63 9.87-17.34 1.5-11.71 3.57-23.12 4.25-34.62.74-12.4 6.8-22.73 11.03-33.81 2.6-6.8 5.65-13.51 7.4-20.53 2.69-10.8.88-21.43-3.45-31.62-2.8-6.56-5.26-13.3-8.5-19.62-4.42-8.64-5.89-17.83-6.86-27.29-1.02-10.03-2.54-20.01-3.89-30.42-1.3-5.64-6.18-13.56-9.87-17.5-12.15-9.21-24.14-18.07-35.82-27.3-2.92-2.3-4.96-5.75-7.26-8.78-5.23-6.87-10.27-13.88-15.57-20.7-9.23-11.88-21.5-18.44-36.36-20.21-9.55-1.14-19.14-2.01-28.65-3.37a46.54 46.54 0 0 1-10.89-3.18c-12.1-4.95-24.1-10.12-36.57-15.4-5.42-1.58-15.64-1.18-20.48 0-13.78 5.83-27.23 12.36-41.27 17.12-8 2.72-16.99 2.48-25.5 3.75-6.88 1.03-13.88 1.71-20.52 3.63a48 48 0 0 0-27.32 20.51 150.73 150.73 0 0 1-45.33 45.37c-3.72 2.4-6.9 5.66-10.68 8.81-3.7 3.56-8.9 11.41-10.4 17.06z" />
        <path d="M343.58 16.57c-81.04-29.47-158.5-19.26-231 27.65-5.42 3.51-7.13 7.76-5.45 12.57a9.6 9.6 0 0 0 10.52 6.53 15.3 15.3 0 0 0 5.86-2.47 234.1 234.1 0 0 1 106.34-38.99c4.45-.5 8.93-.73 13.4-1.05.45-.04 17.48-.52 22.14-.37C346 26.24 408.24 62.7 453.72 129.5c2.12 4.06 7.92 13.74 10.03 17.37 35.27 72.78 35.27 144.93.02 217.95a452.03 452.03 0 0 0-10.06 17.3c-45.32 66.74-107.5 103.22-188.17 109.07a958.6 958.6 0 0 0-20.53-.33 232.83 232.83 0 0 1-95.86-25.05C107 444.57 74.06 410.58 57.2 381.83c-2.35-3.49-7.16-13.19-9.82-17.43-33.64-58.4-38.57-147.13-.35-217.35 2.48-4.82 7.95-14.65 9.82-17.4 1.48-2.3 2.77-4.22 3.98-6.18 3.6-5.83 2.63-11.65-2.44-14.84-4.9-3.07-10.44-1.67-14.16 3.8-15.13 22.28-27.06 46.2-33.75 72.28-4.27 16.65-6.34 33.86-9.4 50.82A278.18 278.18 0 0 0 .2 271.8c.7 18.67 2.42 19.39 3.98 29.02C20.3 400.3 102.17 485.4 201 505.2c11.51 2.3 23.26 3.43 34.9 5.13 1.12.16 2.21.53 3.32.8h31.87c9.34-1.28 18.72-2.32 28.01-3.87 99.46-16.67 181.35-93.9 204.13-192.41 29.3-126.67-38.15-254.1-159.64-298.27z" />
        <path d="M81.96 92.3a9.95 9.95 0 1 1 9.86-9.75 9.94 9.94 0 0 1-9.86 9.74zM353.01 369.66a32.33 32.33 0 1 1-32.58-32.33A32.3 32.3 0 0 1 353 369.66zm-19.98.66a12.2 12.2 0 0 0-11.49-13 12.36 12.36 0 0 0-13.2 11.87 12.62 12.62 0 0 0 11.87 12.84 12.25 12.25 0 0 0 12.82-11.7zM287.45 255.54a32.33 32.33 0 1 1-32.6-32.34 32.3 32.3 0 0 1 32.6 32.34zm-19.98.66a12.2 12.2 0 0 0-11.5-13 12.36 12.36 0 0 0-13.2 11.87 12.62 12.62 0 0 0 11.87 12.83 12.25 12.25 0 0 0 12.83-11.7zM369.94 432.37a9.87 9.87 0 0 1-9.7 9.84 10.12 10.12 0 0 1-10.05-10.12 9.97 9.97 0 0 1 10.32-9.77 9.72 9.72 0 0 1 9.43 10.05zM353.01 142.18a31.95 31.95 0 0 1-32.26 32.16 32.43 32.43 0 0 1-32.43-32.7c.2-17.66 15.16-32.34 32.68-32.07a32.38 32.38 0 0 1 32.01 32.6zm-19.96.02a12.37 12.37 0 0 0-12-12.62 12.55 12.55 0 0 0-12.7 12.53 12.32 12.32 0 0 0 12.36 12.25 12.05 12.05 0 0 0 12.34-12.16zM91.67 255.73a32.04 32.04 0 0 1 32.22-32.21 32.33 32.33 0 1 1-32.22 32.2zm32.05-12.22a12.33 12.33 0 0 0 .15 24.66 12.33 12.33 0 1 0-.15-24.66zM189.48 174.34a32.01 32.01 0 0 1-32.2-32.23 32.32 32.32 0 1 1 32.2 32.23zm.14-19.99a12.29 12.29 0 0 0 12.31-12.26 12.69 12.69 0 0 0-12.24-12.52 12.38 12.38 0 0 0-12.45 12.65 12.15 12.15 0 0 0 12.38 12.13zM157.28 369.47a31.93 31.93 0 0 1 32.27-32.14 32.38 32.38 0 1 1-32.27 32.14zm19.96.03a12.3 12.3 0 0 0 12.04 12.56 12.51 12.51 0 0 0 12.65-12.54 12.32 12.32 0 0 0-12.38-12.22 12.08 12.08 0 0 0-12.31 12.2zM418.62 256a32.05 32.05 0 0 1-32.27 32.16 32.34 32.34 0 0 1-.21-64.68A32.2 32.2 0 0 1 418.62 256zm-19.94-.25a12.12 12.12 0 0 0-12.27-12.24 12.33 12.33 0 1 0 .17 24.66 12.11 12.11 0 0 0 12.1-12.42z" />
      </>
    ),
    viewBox: '0 0 510.03 511.02',
  },
}

const SVG = ({ stroke, fill, width, icon, left, top, hiddenMobile }) => (
  <Wrapper
    viewBox={icons[icon].viewBox}
    stroke={stroke}
    fill={fill}
    svgWidth={twWidth[`${width}`]}
    left={left}
    top={top}
    hiddenMobile={hiddenMobile}
  >
    {icons[icon].shape}
  </Wrapper>
)

export default SVG

SVG.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  width: PropTypes.number,
  icon: PropTypes.oneOf(Object.keys(icons)).isRequired,
  left: PropTypes.string,
  top: PropTypes.string,
  hiddenMobile: PropTypes.bool,
}

SVG.defaultProps = {
  stroke: 'transparent',
  width: 8,
  fill: 'none',
  left: '0%',
  top: '0%',
  hiddenMobile: false,
}
