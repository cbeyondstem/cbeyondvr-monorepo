import * as React from 'react'
import { StoryFn, StoryContext } from '@storybook/addons'

export const sbDecorator = (storyFn: StoryFn<React.FunctionComponent>, ctx: StoryContext) => {
  const MyThing: React.FunctionComponent<StoryContext> = (props: StoryContext) => <>{storyFn(props)}</>
  // const MyWrappedThing = withCanvas(MyThing)(ctx)
  const s = `.sb-show-main{margin: 0, height: 100vh}`
  return (
    <div>
      <style>{s}</style>
      {MyThing}
    </div>
  )
}
