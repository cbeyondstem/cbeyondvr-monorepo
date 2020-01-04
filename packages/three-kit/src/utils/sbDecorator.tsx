import * as React from 'react'
import { StoryFn, StoryContext } from '@storybook/addons'
import { style } from 'typestyle'
import { withCanvas } from './withCanvas'

export const sbDecorator = (storyFn: StoryFn<React.FunctionComponent>, ctx: StoryContext) => {
  const MyThing: React.FunctionComponent<StoryContext> = (props: StoryContext) => <>{storyFn(props)}</>
  const MyWrappedThing = withCanvas(MyThing)(ctx)
  const s = `.sb-show-main{margin: 0, height: 100vh}`
  return (
    <>
      <style>{s}</style>
      <div
        style={{
          border: '1px solid red',
          textAlign: 'center'
        }}
      >
        {MyWrappedThing}
      </div>
    </>
  )
}
