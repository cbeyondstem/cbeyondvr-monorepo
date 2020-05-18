import * as React from 'react'

const { useEffect } = React

// useTimeout React Hook
//
// React hook for delaying calls with time
export const useTimeout = (
  callback: () => void, // function to call. No args passed.
  timeout = 0, // delay, ms (default: immediately put into JS Event Queue)
  {
    // manage re-render behavior.
    // by default, a re-render in your component will re-define the callback,
    //    which will cause this timeout to cancel itself.
    // to avoid cancelling on re-renders (but still cancel on unmounts),
    //    set `persistRenders: true,`.
    persistRenders = false,
  } = {}
) => {
  let timeoutId: NodeJS.Timer
  const cancel = () => timeoutId && clearTimeout(timeoutId)

  useEffect(
    () => {
      timeoutId = setTimeout(callback, timeout)
      return cancel
    },
    persistRenders ? [] : [callback, timeout]
  )

  return cancel
}
