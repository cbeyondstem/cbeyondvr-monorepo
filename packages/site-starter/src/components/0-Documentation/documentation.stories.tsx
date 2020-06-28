import React from 'react'
import { storiesOf } from '@storybook/react'

const story = storiesOf('story|Documentation|Readme', module)

export default {
  component: <div>HELLO</div>,
  title: `story/Documentation`
}

export const intro$ = () => (
  <>
    <div style={{ textAlign: 'center' }}>
      <h1>awesome-gatsby-starter</h1>
      <p>
        <strong>Thanks for using awesome-gatsby-starter!</strong>
        <br />
        Remember to <a href="https://github.com/South-Paw/awesome-gatsby-starter">drop a ⭐ on the project</a> if you
        find it useful.
      </p>
    </div>
  </>
)
