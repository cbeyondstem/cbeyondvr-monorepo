import * as _ from 'lodash'
import * as React from 'react'

import { StoryFn, StoryContext } from '@storybook/addons'

/// <reference path="../../types/paths.macro.d.ts"/>
import { base } from 'paths.macro'
// import { action } from '@storybook/addon-actions'
import { DragAStar } from './DragAStar'
import { withStage } from '../utils'

const group = _.join(_.split(base, '/').slice(3), '/')

export default {
  component: DragAStar,
  title: `${group}/DragAStar`,
  decorators: [
    (storyFn: StoryFn<React.FunctionComponent>, ctx: StoryContext) => {
      const MyRect: React.FunctionComponent<StoryContext> = (props: StoryContext) => <>{storyFn(props)}</>

      const MyWrappedRect = withStage(MyRect, 'Try to drag a star')(ctx)
      return (
        <div
          style={{
            border: '1px solid red',
            textAlign: 'center'
          }}
        >
          {MyWrappedRect}
        </div>
      )
    }
  ]
}

export const simple = () => <DragAStar />
