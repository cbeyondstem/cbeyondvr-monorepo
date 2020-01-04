import * as _ from 'lodash'
import * as React from 'react'

import { StoryFn, StoryContext } from '@storybook/addons'

import { base } from 'paths.macro'

// import { action } from '@storybook/addon-actions'
import { Thing } from './Thing'
import { withCanvas } from '../utils'

const group = _.join(_.split(base, '/').slice(3), '/')

export default {
  component: Thing,
  title: `${group}/Thing`,
  decorators: [
    (storyFn: StoryFn<React.FunctionComponent>, ctx: StoryContext) => {
      const MyThing: React.FunctionComponent<StoryContext> = (
        props: StoryContext
      ) => <>{storyFn(props)}</>
      const MyWrappedThing = withCanvas(MyThing)(ctx)
      const s = `.sb-show-main{margin: 0, height: 100vh}`
      return (
        <>
          <style>{s}</style>
          <div
            style={{
              border: '1px solid red',
              textAlign: 'center',
            }}
          >
            {MyWrappedThing}
          </div>
        </>
      )
    },
  ],
}

export const simple = () => <Thing />
