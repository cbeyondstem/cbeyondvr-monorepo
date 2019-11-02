/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/prefer-default-export, react/prop-types */
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react'
import TopLayout from './src/layouts/TopLayout'

export const wrapRootElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>
}
